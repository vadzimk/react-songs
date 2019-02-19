import React from "react";
import {connect} from "ract-redux";

const SongDetail = ({song}) => {
    if(!song){
        return <div>Select a song</div>;
    }
    return (
        <div>
            <h3>Details for</h3>
            <p>Title: {song.title}</p>
            <p>Duration: {song.duration}</p>
        </div>
    );
};

const mapStateToProps = (state) =>{
//we reach into that state object and pull out just the properties that we care about:
return {song: state.selectedSong};

};

export default connect(mapStateToProps)(SongDetail);


