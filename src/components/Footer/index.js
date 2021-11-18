import React from 'react'
import {FaGithub, FaTwitter, FaYoutube, FaLinkedin} from 'react-icons/fa';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink} from './FooterElements';
import {SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us </FooterLinkTitle>
                            <FooterLink to="/login">How it works</FooterLink>
                            <FooterLink to="/login">Testimonials</FooterLink>
                            <FooterLink to="/login">Careers</FooterLink>
                            <FooterLink to="/login">Investors</FooterLink>
                            <FooterLink to="/login">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>African MarketPlace</SocialLogo>
                        <WebsiteRights>African MarketPlace  © {new Date().getFullYear()} All rights reserved. </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//www.github.com/Build-Week-African-Marketplace-5" target="_blank" aria-label="Github"><FaGithub/></SocialIconLink>
                            <SocialIconLink href="//www.twitter.com/bloomtech" target="_blank" aria-label="Twitter"><FaTwitter/></SocialIconLink>
                            <SocialIconLink href="//www.youtube.com/watch?v=JRXtVE5Cct8&ab_channel=BloomInstituteofTechnology" target="_blank" aria-label="Youtube"><FaYoutube/></SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/school/lambdaschool/" target="_blank" aria-label="Linkedin"><FaLinkedin/></SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer