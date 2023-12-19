import styled from "styled-components"

export const Main = styled.section`
display: flex;
justify-content: space-evenly;
align-items: center;
height:88vh;
background-color: #A577FA;
background-size:100%;
@media (max-width:500px){
    background-color: aquamarine;
    background-size: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-around;
    align-items: baseline;
    height: 110vh;
}
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
@media (max-width: 500px){
height: 30vh;
}
h1{
    padding-left: 160px;
}
h2{
    padding-left: 260px;
    @media (max-width: 500px){
        padding-left: 200px;
    }
}
nav{
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 30vw;
    height: 10vh;
    padding-left: 180px;
    padding-top: 160px;
    @media (max-width: 500px){
        height: 20vh;
        position: absolute;
    }

}
a:hover{
    cursor: pointer;
    transform: scale(120%);
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
@media (max-width: 500px){
    color: black;
    padding-bottom: 60px;
    padding-right: 80px;
    }

`

export const Resumo = styled.h2`
font-size:30px;
width:50vw;
font-family:Dancing Script, serif;
color: white;
@media (max-width: 500px){
    color: black;
    padding-bottom: 540px;
    padding-right: 170px;
    width: 100vw;
    
    }

`

export const FotoInicio = styled.img`
width: 30vw;
height: 50vh;
@media (max-width: 500px){
    height: 40vh;
    width: 40vw;
    padding-top: 40px;
}
`
