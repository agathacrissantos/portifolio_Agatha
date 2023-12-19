import styled, { createGlobalStyle } from "styled-components"

export const EstiloGlobal = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
`

export const Header = styled.section`
display:flex;
align-items:center;
justify-content:space-around;
background-color:#1E68BD;
@media (max-width: 500px){
    position: fixed;
    width: 100vw;
}
h1{
    font-size:24px;
}
`

export const Nav = styled.nav`
width:50vw;
ul{
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  height:12vh;
  list-style:none;
  font-size:20px;
}
  li{
    &:hover{
    cursor: pointer;
    transform: scale(130%);
  }
  }
a{    
  text-decoration:none;
  color:black;
  font-family: Lobster, Serif;
  }
`