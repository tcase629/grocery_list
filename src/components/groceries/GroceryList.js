import React from 'react';

const GroceryList = ({items, item}) => (
  <div>
    <h2>{item}</h2>
    <ul>
      { items.map( i => <li key={i.id}>{i.item}</li>) }
    </ul>
  </div>
)

export default GroceryList