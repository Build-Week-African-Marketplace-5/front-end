/* Home */
import React from "react";
import banner from "../images/banner.jpg";
import Banner from "./styledComponents/BannerStyled";
import HeaderTwo from "./styledComponents/H2Styled";
import Section from "./styledComponents/SectionStyled";
import { FlexDiv , FlexElement } from "./styledComponents/FlexStyles";
import Image from "./styledComponents/ImageStyled";
import market2 from "../images/market2.jpg"


// creating home page using styled components and adding text 

export default function Home() {
    return (
        <div className="homePage">
            <Banner src={banner} alt="african fabrics"/>
            <Section className="smallIntro">
                <HeaderTwo>African Marketplace is designed to empower women-led small and medium-sized enterprises to trade to legally, safely and profitably!
                </HeaderTwo>
            </Section>
            <Section id="one">
                <FlexDiv>
                    <FlexElement>
                        <HeaderTwo style={{ padding: "22%" }}>How does technology empower women?</HeaderTwo>
                    </FlexElement>
                    <FlexElement>
                        <Image src={market2} alt="women at a outdoor marketplace"/>
                    </FlexElement>
                </FlexDiv>
                <p>
                    African Marketplace combines innovative technologies with proven deep expertise to empower women as forces of change in markets, communities and household. 
                    Using technology to empower women-led businesses has ripple effects that can help create lasting change for households, communities, and market systems. That’s why we put women as traders, producers, and customers at the centre of our products, services and delivery models.
                </p>
            </Section>
        </div>
    );
}