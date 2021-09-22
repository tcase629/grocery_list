import React from 'react'

const Grocery = ({ id, item, complete, groceryClick }) => (
  <h3>
    <li
      style={ complete ? { ...styles.grocery, ...styles.complete } : styles.grocery}
      onClick={ () => groceryClick(id) }
    >
      { item }  
    </li>
  </h3>
);

const styles = {
  grocery: { cursor: 'pointer', listStyleType: 'none' },
  complete: { color: '#996a66', textDecoration: 'line-through' }
};

export default Grocery;