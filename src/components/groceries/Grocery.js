import React from 'react'

const Grocery = ({ id, item, complete }) => (
  <li
    style={ complete ? { ...styles.grocery, ...styles.complete } : styles.grocery}
  >
    { item }  
  </li>
);

const styles = {
  grocery: { cursor: 'pointer' },
  complete: { color: 'purple', textDecoration: 'line-through' }
};

export default Grocery;