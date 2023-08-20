import React from 'react';
import './Footer.css'

import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipNextOutlinedIcon from '@mui/icons-material/SkipNextOutlined';
import PlayCircleOutlineOutlinedIcon from '@mui/icons-material/PlayCircleOutlineOutlined';
import SkipPreviousOutlinedIcon from '@mui/icons-material/SkipPreviousOutlined';
import RepeatIcon from '@mui/icons-material/Repeat';

import {Grid, Slider} from '@mui/material';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import VolumeDownIcon from '@mui/icons-material/VolumeDown';


function Footer(props) {
    return (
        <div className="footer">
            <div className="footer__left">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2e/Usher-yeah.jpg/220px-Usher-yeah.jpg" alt="" className="footer__albumLogo"/>
                <div className="footer__songInfo">

                    <h4>Yeah!</h4>
                    <p>Usher</p>

                </div>
            </div>

            <div className="footer__center">

                <ShuffleIcon className="footer__green"/>
                <SkipPreviousOutlinedIcon className="footer__icon"/>
                <PlayCircleOutlineOutlinedIcon fontSize="large" className="footer__icon"/>
                <SkipNextOutlinedIcon className="footer__icon"/>
                <RepeatIcon className="footer__green"/>

            </div>
            <div className="footer__right">

                <Grid container spacing={2}>

                    <Grid item>
                        <PlaylistPlayIcon/>
                    </Grid>

                    <Grid item>
                        <VolumeDownIcon/>
                    </Grid>

                    <Grid item xs>
                        <Slider/>
                        
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default Footer;