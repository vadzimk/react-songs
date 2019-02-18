//usually the root file inside the actions directory is called index.js because it is imported by default by webpack if you specify only the folder name
//could be called action-creator
//named export:

//action creator createsa an action object upon the input provided
export const selectSong =(song)=>{
    //return an action, that has a type property, and optional payLoad
    return {
        type: "SONG_SELECTED",
        payLoad: song
    };

};


