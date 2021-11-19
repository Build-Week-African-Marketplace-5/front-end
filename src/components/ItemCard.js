import React from 'react'

function ItemCard(props) {
    return (
        <div>
            <h2>Name: {props.data.item_name}</h2>
            <h3>Price: {props.data.item_price}</h3>
            <p>Description: {props.data.item_description}</p>
        </div>
    )
}

export default ItemCard

