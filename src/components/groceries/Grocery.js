import React from 'react'

const Grocery = ({ id, item, complete, groceryClick }) => (
  <li
    style={ complete ? { ...styles.grocery, ...styles.complete } : styles.grocery}
    onClick={ () => groceryClick(id) }
  >
    { item }  
  </li>
);

const styles = {
  grocery: { cursor: 'pointer' },
  complete: { color: 'purple', textDecoration: 'line-through' }
};

export default Grocery;