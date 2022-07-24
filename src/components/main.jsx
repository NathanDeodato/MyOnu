import React from "react"

import { 
    Main,
    StartBox,
    TextsBox,
    TextsBoxOne,
    TextsBoxTwo,
    Title,
    ImgTexts,
    SubTitle,
    Text,
    Hr,
    OdsBox,
    OdsBoxOne,
    OdsBoxTwo,
    Ods,
    OdsTitle,
    OdsText
 } from "../styles/main"

import {
    OnuStart
} from "../assets/assets"

export default function fMain() {
    return(
        <Main>
            <StartBox>
                <Title>
                    Objetivos de desenvolvimento sustentável
                </Title>
                <ImgTexts src={OnuStart}/>
            </StartBox>
            <TextsBox>
                <TextsBoxOne>
                    <SubTitle>
                        Como as Nações Unidas apoiam os Objetivos de 
                        Desenvolvimento Sustentável em Brás de Pina
                    </SubTitle>
                    <Text>
                        A ONU e seus parceiros no Brasil estão trabalhando 
                        para atingir os Objetivos de Desenvolvimento 
                        Sustentável. São 17 objetivos ambiciosos e interconectados 
                        que abordam os principais desafios de 
                        desenvolvimento enfrentados por pessoas no Brasil e no mundo.
                    </Text>
                </TextsBoxOne>
                <TextsBoxTwo>
                    <SubTitle>
                        Os Objetivos de Desenvolvimento Sustentável em Brás de Pina
                    </SubTitle>
                    <Text>
                        Os Objetivos de Desenvolvimento Sustentável são um apelo global 
                        à ação para acabar com a pobreza, proteger o meio 
                        ambiente e o clima e garantir que as pessoas, em todos os 

                        lugares, possam desfrutar de paz e de prosperidade. 
                        Estes são os objetivos para os quais as Nações Unidas 
                        estão contribuindo a fim de que possamos atingir a Agenda 2030 no Brasil.
                    </Text>
                </TextsBoxTwo>
            </TextsBox>
            <Hr/>
            <OdsBox>
                <OdsBoxOne>
                    <Ods className="OdsOne">
                        <OdsTitle>
                        
                        </OdsTitle>
                        <OdsText>
                        
                        </OdsText>
                    </Ods>
                    <Ods className="OdsTwo">
                        <OdsTitle>
                        
                        </OdsTitle>
                        <OdsText>
                        
                        </OdsText>
                    </Ods>
                    <Ods className="OdsThree">
                        <OdsTitle>
                        
                        </OdsTitle>
                        <OdsText>
                        
                        </OdsText>
                    </Ods>
                </OdsBoxOne>
                <OdsBoxTwo>
                    <Ods className="OdsFour">
                        <OdsTitle>
                        
                        </OdsTitle>
                        <OdsText>
                        
                        </OdsText>
                    </Ods>
                    <Ods className="OdsFive">
                        <OdsTitle>
                        
                        </OdsTitle>
                        <OdsText>
                        
                        </OdsText>
                    </Ods>
                    <Ods className="OdsSix">
                        <OdsTitle>
                        
                        </OdsTitle>
                        <OdsText>
                        
                        </OdsText>
                    </Ods>
                </OdsBoxTwo>
            </OdsBox>
        </Main>
    )
}
