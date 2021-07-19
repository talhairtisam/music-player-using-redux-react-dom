import React,{ useRef, useEffect } from 'react';
import { SongDetail } from './SongDetail';
import PlayerControl from './PlayerControl';
import { connect } from 'react-redux';

const Player = ({currentSong,nextSong,isPlaying}) =>{

    const audioEl = useRef(null);

    useEffect(()=>{
        if(isPlaying){
            audioEl.current.play();
        }else{
            audioEl.current.pause();
        }
    })

    return(
        <div className="Player">
            <h2>Now Playing</h2>
            <audio 
            src={currentSong.src} 
            ref={audioEl}
            ></audio>
            <SongDetail song={currentSong}/>
            <PlayerControl />
            <p><strong>Next up:</strong> {nextSong.title} by {nextSong.artist}</p>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        currentSong: state.currentSong,
        nextSong: state.nextSong,
        isPlaying: state.isPlaying
    }
}

export default connect(mapStateToProps)(Player);