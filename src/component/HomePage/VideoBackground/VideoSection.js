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
                <VideoP>HOME MAINTENANCE MADE EASY!!</VideoP>
                <VideoH1>Bridging the gap between the users and the providers of home maintenance and handyman services in the most hassle-free, quick, and cost-effective way.</VideoH1>
                <ButtonRequest clsName='btn-Request'  btnName="Request and Appointment" domainname="/request"/>
            </VideoContent>
        </VideoContainer>
    )
}

export default VideoSection;
