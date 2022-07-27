import React, { useState } from "react"

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
    OdsTitle,
    OdsImg
 } from "../styles/main"

import {
    OdsOne,
    OdsTwo,
    OdsThree,
    OdsFour,
    OdsFive,
    OdsSix,
} from "../styles/ods"

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
                    <OdsOne 
                    className="OdsOne"
                    >
                        <OdsTitle>
                            1. Inclusão Social
                        </OdsTitle>
                        <OdsImg>
                            
                        </OdsImg>
                    </OdsOne>
                    <OdsTwo 
                    className="OdsTwo"
                    >
                        <OdsTitle>
                            2. Educação de Qualidade
                        </OdsTitle>
                        <OdsImg>
                        
                        </OdsImg>
                    </OdsTwo>
                    <OdsThree 
                    className="OdsThree"
                    >
                        <OdsTitle>
                            3. Segurança
                        </OdsTitle>
                        <OdsImg>
                        
                        </OdsImg>
                    </OdsThree>
                </OdsBoxOne>
                <OdsBoxTwo>
                    <OdsFour 
                    className="OdsFour"
                    >
                        <OdsTitle>
                            4. Saúde e Bem Estar
                        </OdsTitle>
                        <OdsImg>
                        
                        </OdsImg>
                    </OdsFour>
                    <OdsFive 
                    className="OdsFive"
                    >
                        <OdsTitle>
                            5. Revitalização Urbana
                        </OdsTitle>
                        <OdsImg>
                        
                        </OdsImg>
                    </OdsFive>
                    <OdsSix 
                    className="OdsSix"
                    >
                        <OdsTitle>
                            6. Incentivo ao Comercio
                        </OdsTitle>
                        <OdsImg>
                        
                        </OdsImg>
                    </OdsSix>
                </OdsBoxTwo>
            </OdsBox>
        </Main>
    )
}
