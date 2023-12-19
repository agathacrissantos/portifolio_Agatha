import styled from "styled-components"

export const Main = styled.section`
display:flex;
align-items:center;
justify-content:space-evenly;
background-color:#A577FA;
height:88vh;
@media (max-width: 500px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 150vh;
    background-color: aquamarine;
}
a{
    text-decoration:none;
}
`

export const SobreMim = styled.p`
color:white;
width:30vw;
height:60vh;
font-size:26px;
font-family: Dancing script, serif;
line-height:31px;
@media (max-width: 500px){
    width: 90vw;
    color: black;
}
`

export const FotoSobre = styled.img`
width: 40vw;
height: 70vh;
padding-top:60px;
@media (max-width: 500px){
    width: 80vw;
    height: 40vh;
    margin-top: 10px;
}
` 

export const Link = styled.p`
&:hover{
text-decoration:underline;
}
`