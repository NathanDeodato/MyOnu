import styled from "styled-components"

export const Header = styled.header`
    width: 100vw;
    height: 20vh;

    display: flex;
    justify-content: space-around;
    align-items: center;

    border-bottom: 1.5px solid #fff;
`

export const BoxLogo = styled.div`
    width: 30%;

    position: absolute;
    left: 5vw;
`

export const LogoOnu = styled.img`
    width: 22vw;

    &:hover {
        cursor: pointer;
    }
`

export const Hr = styled.hr`
    height: 12vh;
    
    position: absolute;
    left: 32%;
`

export const ThemeBox = styled.div`
    width: 10%;
    
    position: absolute;
    left: 35%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const ThemeIcon = styled.img`
    width: 3vw;

    &:hover {
        cursor: pointer;
    }
`

export const ThemeSelect = styled.img`
    width: 3vw;

    &:hover {
        cursor: pointer;
    }
`

export const SearchBox = styled.div`
    width: 30%;
    
    position: absolute;
    left: 50%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const SearchInput = styled.input`
    width: 25vw;
    height: 6vh;

    padding-left: 1.5vw;

    color: #fff;
    background-color: #1c1c1c;
    border: 3px solid #069DD8;
    border-radius: 20px;
    outline: none;
`

export const SearchButton = styled.img`
    width: 2vw;

    &:hover {
        cursor: pointer;
    }
`
