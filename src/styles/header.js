import styled from "styled-components"

export const Header = styled.header`
    width: 100%;
    height: 20vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    border-bottom: 2px solid #fff;
    
    @media (max-width: 376px) {
        height: 15vh;
    }
`

export const BoxLogo = styled.div`
    width: 30%;

    position: absolute;
    left: 5vw;

    @media (max-width: 426px) {
        width: 40%;
    }
`

export const LogoOnu = styled.img`
    width: 75%;

    &:hover {
        cursor: pointer;
    }
`

export const Hr = styled.hr`
    height: 12vh;
    
    position: absolute;
    left: 32%;

    @media (max-width: 426px) {
        height: 8vh;
        
        left: 35%;
    }
`

export const ThemeBox = styled.div`
    width: 8%;
    
    position: absolute;
    left: 36.5%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 1025px) {
        left: 38%;
    }

    @media (max-width: 426px) {
        width: 12%;

        left: 40%;
    }
`

export const ThemeIcon = styled.img`
    width: 35%;

    &:hover {
        cursor: pointer;
    }
`

export const ThemeSelect = styled.img`
    width: 35%;

    &:hover {
        cursor: pointer;
    }
`

export const SearchBox = styled.div`
    width: 35%;
    
    position: absolute;
    left: 50%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 426px) {
        width: 42%;
        
        left: 55%;
    }
`

export const SearchInput = styled.input`
    width: 80%;
    height: 6vh;

    padding-left: 5%;

    color: #fff;
    background-color: #1c1c1c;
    border: 3px solid #069DD8;
    border-radius: 20px;
    outline: none;

    @media (max-width: 1025px) {
        width: 85%;
    }

    @media (max-width: 769px) {
        font-size: 0.7em;
    }

    @media (max-width: 426px) {
        height: 5vh;

        border-radius: 15px;
    }

    @media (max-width: 376px) {
        width: 80%;

        font-size: 0.6em;
    }
`

export const SearchButton = styled.img`
    width: 6%;

    &:hover {
        cursor: pointer;
    }

    @media (max-width: 426px) {
        width: 8%;
    }

    @media (max-width: 376px) {
        width: 10%;
    }
`
