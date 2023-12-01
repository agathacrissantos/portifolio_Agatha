import styled from "styled-components"

export const Main = styled.section`
display: flex;
justify-content: space-evenly;
align-items: center;
height:88vh;
background-color: #A577FA;
background-size:100%;
`

export const MinhaSecao = styled.div`
background-image: url("src/assets/FundoTela.jpg");
background-repeat: no-repeat;
background-size: cover;
display: flex;
justify-content: space-evenly;
align-items:center;
flex-direction: column;
height: 50vh;
h1{
    padding-left: 160px;
}
h2{
    padding-left: 260px;
}
nav{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30vw;
    height: 10vh;
    padding-left: 180px;
    padding-top: 160px;
}
img{
    height: 6vh;
    width: auto;
}
`
export const Nome = styled.h1`
font-size:30px;
width:50vw;
font-family:Dancing Script, serif;
color: white;
`


export const Resumo = styled.h2`
font-size:30px;
width:50vw;
font-family:Dancing Script, serif;
color: white;
`
export const Icones = styled.a`
width:20vw;
height: 20vh;
`

export const FotoInicio = styled.img`
width: 30vw;
height: 50vh;
`
