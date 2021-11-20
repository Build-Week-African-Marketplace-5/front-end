import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ItemPage from "./ItemPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NavBtnLink } from "./Navbar/NavBarElements";
const TotalItems = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .all([
        axios.get(
          "https://african-marketplace-buildweek.herokuapp.com/api/locations/1"
        ),
        axios.get(
          "https://african-marketplace-buildweek.herokuapp.com/api/locations/2"
        ),
        axios.get(
          "https://african-marketplace-buildweek.herokuapp.com/api/locations/3"
        ),
        axios.get(
          "https://african-marketplace-buildweek.herokuapp.com/api/locations/4"
        ),
        axios.get(
          "https://african-marketplace-buildweek.herokuapp.com/api/locations/5"
        ),
      ])
      .then(
        axios.spread((res1, res2, res3, res4, res5) => {
          setItems(
            res1.data.items.concat(
              res2.data.items,
              res3.data.items,
              res4.data.items,
              res5.data.items
            )
          );
        })
      );
  });

  return (
    <ItemPageF>
      <NavDiv>
        <Navbar />
      </NavDiv>

      <Selector>
        <Link to="/items"><NewSpan>View Items By Location</NewSpan></Link>
      </Selector>

      <ItemsContainer>
        {items.map((i) => (
          <ItemCard data={i} key={i.item_id} />
        ))}
      </ItemsContainer>

      
      <Selector>

        <NavBtnLink to="/additem">Add New Item</NavBtnLink>
      </Selector>


      <FooterDiv>
        <Footer />
      </FooterDiv>
    </ItemPageF>
  );
};

export default TotalItems;

const ItemsContainer = styled.div`
  background-color: #101522;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: spa;
  align-items: center;
  text-align: center;
`;

const ItemPageF = styled.div`
  background-color: #101522;
  height: 100%;
`;

const NavDiv = styled.div`
  height: 100px;
  background-color: #101522;
  border: 1px solid #101522;
`;

const FooterDiv = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Selector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1%;
`;

const SH1 = styled.h1`
  color: #01bf71;
`;

const SHLabel = styled.label`
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const NewSpan = styled.span`
  color: #01bf71;
  font-size: 20px;
`;
