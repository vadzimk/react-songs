import React from "react";
import {connect} from "react-redux";

//will be passed to the connect function:
import {selectSong} from "../actions";

class SongList extends React.Component{
    //this.props === {songs: state.songs}
    renderList(){
        return this.props.songs.map((song)=>{
            console.log(this.props);
            return (

                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary"
                        onClick={()=>this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">
                        {song.title}
                    </div>
                </div>
            );
        });
    }

    render(){

        return (
            <div className="ui divided list">{this.renderList()}</div>
        );
    }
}
//===================================================================

//takes the State object (all the data that's inside the Redux Store) and show it up as props inside our SongList component.
//the name mapStateToProps is not required to have this specific name
//the object that we return from mapStateToProps function is going to show up as props inside our SongList component
const mapStateToProps=(state)=>{
    //console.log("State", state);
    return {songs: state.songs};
};
//=====================================================================

//connect is a react component
//we configure the connect function to get a song list out of "redux store" from the "provider"
//any time that our list of songs inside of our store changes, the provider will automatically notify our connect function, and the Connect function will pass the updated list of songs to the SongList component
export default connect(mapStateToProps, {selectSong: selectSong})(SongList);
