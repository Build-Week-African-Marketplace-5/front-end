import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InfoSection from "./InfoSection";
import { NavBtnLink } from "./Navbar/NavBarElements";

import styled from "styled-components";

const ItemPage = () => {
  const [items, setItems] = useState([]);

  const initialLocation = "1";

  const [storeLocation, setStoreLocation] = useState(initialLocation);

  const onChange = (evt) => {
    setStoreLocation(evt.target.value);
  };

  useEffect(() => {
    axios
      .get(
        `https://african-marketplace-buildweek.herokuapp.com/api/locations/${storeLocation}`
      )
      .then((res) => {
        setItems(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [storeLocation]);

  return (
    <ItemPageF>
      <NavDiv>
        <Navbar />
      </NavDiv>

      <Selector>
        <SHLabel>
          <SH1>Select Location</SH1>
          <select name="location" value={storeLocation} onChange={onChange}>
            <option value="">- Select a Location -</option>
            <option value="1">Lagos</option>
            <option value="2">Addis Ababa</option>
            <option value="3">Nairobi</option>
            <option value="4">Kinshasa</option>
            <option value="5">Cape Town</option>
          </select>
        </SHLabel>
      </Selector>

      <ItemsContainer>
        {items.map((i) => (
          <ItemCard data={i} key={i.item_id} />
        ))}
      </ItemsContainer>

      <Selector>

        <NavBtnLink to="/additem">Add New Item</NavBtnLink>
      </Selector>

      <Selector>

<NavBtnLink to="/allitems">View All Items</NavBtnLink>
</Selector>

      <FooterDiv>
        <Footer />
      </FooterDiv>
    </ItemPageF>
  );
};

export default ItemPage;

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
