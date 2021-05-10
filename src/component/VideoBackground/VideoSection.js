import React from 'react'
import Video from '../../videos/v3.mp4'
import {VideoContainer,VideoBg,Videos} from './VideoElement'

const VideoSection = () => {
    return (
        <VideoContainer>
            <VideoBg>
                <Videos autoPlay loop muted src={Video} type='video/mp4'/>
            </VideoBg>
        </VideoContainer>
    )
}

export default VideoSection;
