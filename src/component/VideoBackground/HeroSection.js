import React from 'react'
import Video from '../../videos/v3.mp4'
import {HeroContainer,HeroBg,VideoBg} from './VideoElement'

const HeroSection = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
        </HeroContainer>
    )
}

export default HeroSection;
