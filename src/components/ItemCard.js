import React from 'react'
import styled from 'styled-components'

function ItemCard(props) {
    return (

        <Card>
            <h2>{props.data.item_name}</h2>
            <CardH3>${props.data.item_price}</CardH3>
            <p>{props.data.item_description}</p>
        </Card>
    )
}

export default ItemCard



const Card = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-around;
  align-content: space-around;
  margin: 1%;
  line-height: 1.5;
`;

const CardH3 = styled.h3`
  color: #01bf71;
`;






