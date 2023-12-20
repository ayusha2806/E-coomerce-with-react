import React from 'react';

function Form({ name, price, productID, setName, setPrice, setProductID, submitHandle }) {
  return (
    <form onSubmit={submitHandle}>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="inputStyle"
        placeholder="Product Name"
      />
      <input
        type="number"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        className="inputStyle"
        placeholder="Selling Price"
      />
      <input
        type="number"
        onChange={(e) => setProductID(e.target.value)}
        value={productID}
        className="inputStyle"
        placeholder="Product ID"
      />
      <button type="submit" className="buttonStyle">
        Add
      </button>
    </form>
  );
}

export default Form;
