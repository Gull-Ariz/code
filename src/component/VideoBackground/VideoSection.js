import React from 'react'
import Video from '../../videos/v3.mp4'
import Video1 from '../../videos/video1.mp4'
import {VideoArray} from './VideoArray'
import {VideoContainer,VideoBg,Videos,VideoContent,VideoP,VideoH1} from './VideoElement'
import Button from '../NavbarDropdown/Button'

const VideoSection = () => {
    return (
        <VideoContainer>
            <VideoBg>
                <Videos autoPlay loop muted src={Video} type='video/mp4'/>
            </VideoBg>       
        <VideoContent>
                <VideoP>WE ARE AVAILABLE FOR</VideoP>
                <VideoH1>PLUMBING,CARPANTER,PAINTER,ELECTRICIAN</VideoH1>
                <Button ButtonName="Request an Apointment" cName="btn-Request"/>
            </VideoContent>
        </VideoContainer>
    )
}

export default VideoSection;
