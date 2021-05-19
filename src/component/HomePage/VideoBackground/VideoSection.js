import React from 'react'
import Video from '../../../videos/v3.mp4'
import {VideoContainer,VideoBg,Videos,VideoContent,VideoP,VideoH1} from './VideoElement'
import ButtonRequest from '../Paragraph/Buttons';

const VideoSection = () => {
    return (
        <VideoContainer>
            <VideoBg>
                <Videos autoPlay loop muted src={Video} type='video/mp4'/>
            </VideoBg>       
        <VideoContent>
                <VideoP>WE ARE AVAILABLE FOR</VideoP>
                <VideoH1>PLUMBING,CARPANTER,PAINTER,ELECTRICIAN</VideoH1>
                <ButtonRequest clsName='btn-Request'  btnName="Request and Appointment" domainname="/request"/>
            </VideoContent>
        </VideoContainer>
    )
}

export default VideoSection;
