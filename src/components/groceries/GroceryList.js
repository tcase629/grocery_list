import React from 'react';
import Grocery from './components/groceries/Grocery';

const GroceryList = ({ items, item }) => (
  <div>
    <h2>{item}</h2>
    <ul>
      { items.map( i => <Grocery key={i.id} {...i} /> )} 
    </ul>
  </div>
)

export default GroceryList