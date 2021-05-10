import styled from 'styled-components'

export const VideoContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content:center;
    align-items:center;
    padding:0 30px;
    height:720px;
    position:relative;
    z-index:1;
`;


export const VideoBg = styled.div`
    position:absolute;
    top:0;
    right:0;
    left:0;
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

