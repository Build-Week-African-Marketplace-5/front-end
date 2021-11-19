import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroH2, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElement';
import { Link, Route } from 'react-router-dom';
import { NavBtnLink } from '../Navbar/NavBarElements';


const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    let isLoggedIn = localStorage.getItem("token");

    let username = "";
    
    let message = localStorage.getItem("message");

    if (message) {
        username = message.split(" ")[1];
    } else {
        username = "";
    }
  
    




    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                {isLoggedIn ? <HeroH2>{`Welcome, ${username}!`}</HeroH2> : null}
                

                {isLoggedIn ?
                <HeroH1>View Products or List Your Own:</HeroH1>
                :
                <HeroH1>Technology Made Easy for Women</HeroH1>
                }
                


                {isLoggedIn ? 
                <HeroP>
                &nbsp;
                </HeroP> 
                :
                <HeroP>
                Sign up for a new account today and 
                display your PRODUCTS FOR SALE
                </HeroP>
                
                }
                
                {isLoggedIn ?
                <HeroBtnWrapper>
                    <Button 
                    to="/allitems"
                    onMouseEnter={onHover} 
                    onMouseLeave={onHover} 
                    primary='true' 
                    dark='true'
                    smooth={true} 
                    duration={500} 
                    spy={true} 
                    exact='true' 
                    offset={-80}
                    >View Products {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
                </HeroBtnWrapper>
                : <HeroBtnWrapper>
                <Button 
                to="/signup"
                onMouseEnter={onHover} 
                onMouseLeave={onHover} 
                primary='true' 
                dark='true'
                smooth={true} 
                duration={500} 
                spy={true} 
                exact='true' 
                offset={-80}
                >Sign Up and Get Started {hover ? <ArrowForward/> : <ArrowRight/>}</Button>
            </HeroBtnWrapper>}
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection