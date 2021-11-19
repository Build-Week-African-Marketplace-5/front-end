// Imports
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";

const ItemPage = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://african-marketplace-buildweek.herokuapp.com/api/locations/2/"
      )
      .then((res) => {
        setItems(res.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(items);

  return (
    <div>
      {items.map((i) => (
        <ItemCard data={i} key={i.item_id} />
      ))}
    </div>
  );
};

export default ItemPage;
