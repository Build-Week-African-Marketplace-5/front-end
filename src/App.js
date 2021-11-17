import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';

import Home from "./components/Home";
import About from "./components/About";
import Login from "./components/Login";
import SignUpForm from "./components/Signup";

import HeaderOne from "./components/styledComponents/H1Styled";
import Container from "./components/styledComponents/ContainerStyled";
import Nav from "./components/styledComponents/NavStyled";
import StyledLink from "./components/styledComponents/LinkStyled";

function App() {
  return (
    <Container className="container">
      <header>
        <HeaderOne>African Marketplace</HeaderOne>
          <div>
            <Nav className="navigation">
              <span>
                <StyledLink to="/">Home</StyledLink>
              </span>
              <span>
                <StyledLink to="/About">About</StyledLink>
              </span>
              <span>
                <StyledLink to="/Login">Login</StyledLink>
              </span>
              <span>
                <StyledLink to="/Signup">Sign Up</StyledLink>
              </span>
              {/* <span>
                <styledLink to="/" onClick={logout}>Log Out</styledLink>
              </span> */}
              <span>
                <StyledLink to="/listings">Listings</StyledLink>
              </span>
            </Nav>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/About" component={About}></Route>
              <Route path="/Login" component={Login}></Route> 
              {/* <Route path="/Signup" component={SignUpForm}></Route>*/}
            </Switch>
          </div>
      </header>
    </Container>
  );
}

export default App;
