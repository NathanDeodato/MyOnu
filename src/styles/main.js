import styled from "styled-components";

export const Main = styled.main`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
`

export const StartBox = styled.div`
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const Title = styled.h1`
    margin-top: 5%;
    margin-bottom: 5%;
    
    text-align: center;    
    color: #fff;

    @media (max-width: 769px) {
        font-size: 1.5em;
    }

    @media (max-width: 426px) {
        font-size: 0.8em;
    }
`

export const ImgTexts = styled.img`
    width: 100%;
`

export const TextsBox = styled.div`
    width: 80%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
`

export const TextsBoxOne = styled.div`
    height: 30vh;

    margin-top: 5%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 426px) {
        height: 18vh;
    }
`

export const TextsBoxTwo = styled.div`
    height: 30vh;

    margin-top: 5%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media (max-width: 426px) {
        height: 18vh;
    }
`

export const SubTitle = styled.h2`
    width: 60%;
    
    color: #fff;

    @media (max-width: 769px) {
        font-size: 1em;
    }

    @media (max-width: 426px) {
        font-size: 0.55em;
    }
`

export const Text = styled.p`
    width: 80%;

    color: #fff;

    @media (max-width: 769px) {
        font-size: 0.8em;
    }

    @media (max-width: 426px) {
        font-size: 0.45em;
    }
`

export const Hr = styled.hr`
    width: 80%;
    height: 1%;

    margin-top: 5%;

    background-color: #fff;
    border-radius: 10px;
`

export const OdsBox = styled.div`
    width: 80%;

    margin-top: 8%;
`

export const OdsBoxOne = styled.div`
    height: 30vh;
    
    margin-bottom: 8%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 426px) {
        height: 110vh;

        flex-direction: column;
    }
`

export const OdsBoxTwo = styled.div`
    height: 30vh;
    
    margin-bottom: 5%;

    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 426px) {
        height: 110vh;

        flex-direction: column;
    }
`

export const Ods = styled.div`
    width: 25%;
    height: 30vh;

    background-color: #fff;
    border-radius: 15px;

    &:hover {
        cursor: pointer;
    }
`

export const OdsTitle = styled.h3`
    color: #fff;
    font-size: 1em;

    @media (max-width: 769px) {
        font-size: 0.8em;
    }
`

export const OdsImg = styled.img`
`
