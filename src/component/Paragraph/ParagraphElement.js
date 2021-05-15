import styled from 'styled-components'


export const ParagraphContainer=styled.div `
   background:#c5d9e6;
    width:100vw;
    position:relative;
`

export const ParagraphHeading=styled.div `
    text-align:center;
    font-size:30px;
    paddig:4px 16px;
    margin-top:10px;
    margin-left:30px;
    @media screen and (max-width:768px){
        margin-left:10px;
    }
`

export const Paragraph= styled.div `
    text-align:center;
    font-size:18px;
    font-family:'Garamond';
    paddig:8px 20px;

`

export const ParagraphImage=styled.div `
    margin-left:10px;
    margin-top:10px;
    object-fit:cover;
              
    @media screen and (max-width:768px){
        margin-left:180px;  
   }
    @media screen and (max-width:500px){
        margin-left:80px;  
   } 
`

