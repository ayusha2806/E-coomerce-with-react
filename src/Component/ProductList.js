import React from 'react';

function ProductList({ list, deleteItem }) {
  return (
    <ul className="listStyle">
      {list.map((user, index) => (
        <li key={index} className="listItemStyle">
          <span>
            Product Name: {user.Name} | Selling Price: {user.Price} | Product ID: {user.ProductID}
          </span>
          <button onClick={() => deleteItem(index)} className="buttonStyle">
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ProductList;
