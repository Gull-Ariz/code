import styled from 'styled-components'

export const VideoContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content:center;
    align-items:center;
    padding:0 30px;
    height:720px;
    position:relative;
    z-index:0;
`;


export const VideoBg = styled.div`
    position:absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width:100%;
    height:100%;
    overflow:hidden;
`;

export const Videos = styled.video`
    width:100%;
    height:100%;
    -o-object-fit:cover;
    object-fit:cover;
    background:#232a34;
`;


export const VideoContent = styled.div`
    z-index:3;
    max-width:1200px;
    position:absolute;
    padding:8px 24px;
    display:flex;
    flex-direction:column;
    align-items:center;
`

export const VideoH1 = styled.div`
    color:#d2a2e0;
    font-size:20px;
    text-align:center;

    @media screen and (max-width:1500px){
        font-size:20px;
    }
    @media screen and (max-width:1200px){
        font-size:16px;
    }
    @media screen and (max-width:768px){
        font-size:14px;
    }
    
    @media screen and (max-width:500px){
        font-size:10px;
    }
    
`

export const VideoP = styled.div`
    margin-top:24px;
    color:#d2a2e0;
    font-size:30px;
    text-align:center;
    max-width:600px;

    @media screen and (max-width:1500px){
        font-size:30px;
    }

    @media screen and (max-width:1200px){
        font-size:24px;
    }
    @media screen and (max-width:768px){
        font-size:18px;
    }

    @media screen and (max-width:480px){
        font-size:18px;
    }
`
