import React from "react"
import { 
    OnuLogo,
    OnuMiniLogo,
    SearchLupa,
    ThemeMode,
    ToggleOn
} from "../assets/assets"

import { 
    Header,
    BoxLogo,
    LogoOnu,
    Hr,
    ThemeBox,
    ThemeIcon,
    ThemeSelect,
    SearchBox,
    SearchInput,
    SearchButton
 } from "../styles/header"

export default function fHeader() {
    return(
        <Header>
            <BoxLogo>
                <LogoOnu 
                src={OnuLogo}
                />
            </BoxLogo>

            <Hr/>

            <ThemeBox>
                <ThemeIcon
                src={ThemeMode}
                />
                <ThemeSelect
                src={ToggleOn}
                />
            </ThemeBox>
            <SearchBox>
                <SearchInput
                placeholder="Pesquisar"
                >

                </SearchInput>
                
                <SearchButton 
                src={SearchLupa}
                />
            </SearchBox>
        </Header>
    )
}
