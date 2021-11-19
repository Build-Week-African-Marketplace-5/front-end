import React, { useState, useEffect, useReducer } from "react";
import axios from "axios";
import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";

const ItemPage = () => {
  const [items, setItems] = useState([]);

  const initialLocation = "1";

  const [storeLocation, setStoreLocation] = useState(initialLocation);

  const onChange = (evt) => {
    setStoreLocation(evt.target.value)
}
  
  

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
    <div>
      <label>
    Select Location:
    <select name="location" value={storeLocation} 
                        onChange={onChange}>
      <option value="">- Select a Location -</option>
      <option value="1">Lagos</option>
      <option value="2">Addis Ababa</option>
      <option value="3">Nairobi</option>
      <option value="4">Kinshasa</option>
      <option value="5">Cape Town</option>
    </select>
  </label>
      {items.map((i) => (
        <ItemCard data={i} key={i.item_id} />
      ))}


    <Link to="/additem">Add New Item</Link>

    </div>
  );
};

export default ItemPage;
