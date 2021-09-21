import React from 'react';
import Grocery from './Grocery';

const GroceryList = ({ items, item, groceryClick }) => (
  <div>
    <h2>{item}</h2>
    <ul>
      { items.map( i => <Grocery key={i.id} {...i} groceryClick={groceryClick} /> )} 
    </ul>
  </div>
)

export default GroceryList