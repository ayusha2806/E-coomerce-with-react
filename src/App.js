import React, { useEffect, useState } from 'react';
import "./App.css"; // Import your CSS file
import Header from './Component/Header';
import Form from './Component/Form';
import ErrorMessage from './Component/ErrorMessage';
import ProductList from './Component/ProductList';
import TotalCost from './Component/TotalCost';

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [productID, setProductID] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("productList")) || [];
    const storedTotal = parseFloat(localStorage.getItem("total")) || 0;

    setList(storedList);
    setTotal(storedTotal);
  }, []);

  function submitHandle(e) {
    e.preventDefault();

    if (!name || !price || !productID) {
      setErrorMessage("Kindly fill all the fields.");
      return;
    }

    const obj = { Name: name, Price: parseFloat(price), ProductID: productID };
    setList([...list, obj]);
    setTotal(total + obj.Price);

    setName("");
    setPrice("");
    setProductID("");
    setErrorMessage("");

    localStorage.setItem("productList", JSON.stringify([...list, obj]));
    localStorage.setItem("total", total + obj.Price);
  }

  function deleteItem(index) {
    const deletedItem = list[index];
    setList(list.filter((item, i) => i !== index));
    setTotal(total - deletedItem.Price);

    localStorage.setItem("productList", JSON.stringify(list.filter((item, i) => i !== index)));
    localStorage.setItem("total", total - deletedItem.Price);
  }

  return (
    <div className="pageStyle">
      <Header />
      <Form
        name={name}
        price={price}
        productID={productID}
        setName={setName}
        setPrice={setPrice}
        setProductID={setProductID}
        submitHandle={submitHandle}
      />
      <ErrorMessage errorMessage={errorMessage} />
      <ProductList list={list} deleteItem={deleteItem} />
      <TotalCost total={total} />
    </div>
  );
}

export default App;
