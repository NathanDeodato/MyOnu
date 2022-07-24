import React from "react"

import { 
    Footer,
    Copy,
    SociaMediaBox,
    ImgSocialMedia,
    OnuMiniBox,
    OnuMiniLogo,
    OnuBox,
    OnuLogo
 } from "../styles/footer"

export default function fFooter() {
    return(
        <Footer>
            <Copy>
                © Copyright 2022 Deodatont.Dev
            </Copy>
            <SociaMediaBox>
                <ImgSocialMedia/>
                <ImgSocialMedia/>
                <ImgSocialMedia/>
            </SociaMediaBox>
            <OnuMiniBox>
                <OnuMiniLogo 
                src="{}"
                />
            </OnuMiniBox>
            <OnuBox>
                <OnuLogo/>
            </OnuBox>
        </Footer>
    )
}
