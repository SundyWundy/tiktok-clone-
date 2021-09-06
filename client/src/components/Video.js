import React, { useState, useRef } from 'react'
import "./Video.css";

import Button from '@material-ui/core/Button';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import { Container } from '@material-ui/core';

function Video({ url, channel, description, song, likes, messages, shares }) {
    const [play, setPlay] = useState(true);
    const vidRef = useRef(null);


    const handleVid = () => {
        if (play) {
            vidRef.current.pause();
            setPlay(false);
        }
        else {
            vidRef.current.play();
            setPlay(true);
        }
    }
    return (
        <div className="video">
            <Container>
                <div className="followbtn">
                    <Button variant="outlined" color="secondary">
                        Follow
                    </Button>
                </div>


                <h2>{channel}</h2>
                <p>{description}</p>
                <h3><MusicNoteIcon />{song}</h3>


                <video
                    className="videoPlayer"
                    onClick={handleVid}

                    loop
                    ref={vidRef}
                    autoPlay
                    src={url}
                >
                </video>

                <div className="menu">
                    <button className="btnshape"><FavoriteIcon /></button> <br></br><br></br> {likes}
                    <br></br><br></br>
                    <button className="btnshape"><CommentIcon /></button> <br></br><br></br> {messages}
                    <br></br><br></br>
                    <button className="btnshape"><ShareIcon /></button> <br></br><br></br> {shares}
                </div>


                <hr className="Line"></hr>
            </Container>

        </div>
    )
}

export default Video;