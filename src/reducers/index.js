
import {combineReducers} from "redux";


//we are going to have 2 reducers:
//1 that returns a static list of songs
//2 allow user to select a specific song by clicking on it

const songsReducer = ()=>{
    return [
        {title: "No Scrubs", duration: "4:05"},
        {title: "Macarena", duration: "2:30"},
        {title: "All Star", duration: "3:15"},
        {title: "I want it that way", duration:"1:45"}
    ];
};

const selectedSongReducer = (selectedSong=null, action)=> {
    //receives current data-currently selected song, action object

    if(action.type === "SONG_SELECTED"){
        return action.payload;
    }

    return selectedSong;
};

//export a combined set of reducers - will be passed to the createStore function to create a "Redux Store".
//the keys of the passed object will become the keys of the State object
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});