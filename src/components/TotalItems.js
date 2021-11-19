import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

const TotalItems = () => {
  const [items, setItems] = useState([]);
  


  useEffect(() => {
    axios.all([
        axios.get('https://african-marketplace-buildweek.herokuapp.com/api/locations/1'), 
        axios.get('https://african-marketplace-buildweek.herokuapp.com/api/locations/2'),
        axios.get('https://african-marketplace-buildweek.herokuapp.com/api/locations/3'),
        axios.get('https://african-marketplace-buildweek.herokuapp.com/api/locations/4')
        ,axios.get('https://african-marketplace-buildweek.herokuapp.com/api/locations/5')
      ])
      .then(axios.spread((res1, res2, res3, res4, res5) => {
        setItems(res1.data.items.concat(
            res2.data.items,
            res3.data.items,
            res4.data.items,
            res5.data.items));
      }));
  },);


  return (
    <div>

<Link to="/items">View Items By Location</Link>


      {items.map((i) => (
        <ItemCard data={i} key={i.item_id} />
      ))}


    <Link to="/additem">Add New Item</Link>

    </div>
  );
};

export default TotalItems;
