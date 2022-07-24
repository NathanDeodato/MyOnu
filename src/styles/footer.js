import styled from "styled-components"

export const Footer = styled.footer`
    height: 60vh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

export const Hr = styled.hr`
    width: 80%;
    height: 0.5vh;

    margin-top: 5vh;

    background-color: #fff;
    border-radius: 10px;
`

export const SociaMediaBox = styled.div`
    width: 28%;

    position: relative;
    top: -10%;
    left: 27%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Copy = styled.p`
    position: relative;

    top: 6vh;
    left: -31vw;

    color: #fff;
    font-size: 0.9em;
`

export const Nathan = styled.img`
    width: 10vw;

    &:hover{
        cursor: pointer;
    }
`

export const ImgSocialMedia = styled.img`
    width: 3.5vw;
    height: 7vh;

    &:hover{
        cursor: pointer;
    }
`

export const OnuBox = styled.div``

export const Onu = styled.img`
    width: 25vw;
    
    &:hover{
        cursor: pointer;
    }
`
