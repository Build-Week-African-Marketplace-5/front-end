// About Page // 
/**
 African Marketplace is created to address information barriers in low technology environments through scalable and sustainable techonology and research solutions.

 Business owners can create an account on the site and login to see the current goods listed on the platform and their prices, divided by category.  

Users can also list their own items on the platform for their respective market locations by providing the name, description and price. 

 
 */

import React from "react";
import farm2 from "../images/farm2.jpg";

import Container from "./styledComponents/ContainerStyled";
import HeaderTwo from "./styledComponents/H2Styled";
import Image from "./styledComponents/ImageStyled";
import { FlexDiv, FlexElement } from "./styledComponents/FlexStyles";

export default function About() {
  //Creating the about page using styled components and some jumble text for filler
  return (
    <div>
      <Container id="aboutIntro">
        <FlexDiv className="flexConatiner">
          <FlexElement>
            <HeaderTwo style={{ padding: "30% 30%" }}>OUR STORY</HeaderTwo>
          </FlexElement>
          <FlexElement>
            <Image src={farm2} alt="a mother looking out at a farm" />
          </FlexElement>
        </FlexDiv>
        <h3 style={{ color: "#073421" }}>
        To address information barriers in low technology environments through scalable and sustainable technology and research solutions.
        </h3>
        <p>
            Business owners can create an account on the site and login to see the current goods listed on the platform and their prices, divided by category. Users can also list their own items on the platform for their respective market locations by providing the name, description and price. 
        </p>
      </Container>
    </div>
  );
}