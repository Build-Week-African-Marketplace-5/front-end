import React, {useState, useEffect} from 'react';
import {FaBars} from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavBarElements';
import { animateScroll as scroll } from 'react-scroll';
import { useHistory } from "react-router-dom";

let isLoggedIn = localStorage.getItem("token");




const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const { push } = useHistory();

    const handleLogout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("message");

        push("/");
        window.location.reload(true);
       
    
        
    
    }

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []); 

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to="/" onClick={toggleHome}>African Marketplace</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks 
                            to="#"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks 
                            to="#"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Services</NavLinks>
                        </NavItem>
                        {isLoggedIn &&
                        <NavItem>
                        <NavLinks 
                            to="/allitems"
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                        >Products</NavLinks>
                        </NavItem>
                        }
                    </NavMenu>
                    {isLoggedIn ?
                    <NavBtn>
                        <NavBtnLink onClick={handleLogout}>Logout</NavBtnLink>
                    </NavBtn> :
                    <NavBtn>
                        <NavBtnLink to="/login">Login</NavBtnLink>
                    
                </NavBtn>}

                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;