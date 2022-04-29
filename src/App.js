import React, { useState } from "react";
import "./App.css";
import List from "./components/List";

function App() {
  const [currentItem, setCurrentItem] = useState("");
  const [itemList, setItemList] = useState([]);

  const changeHandler = (e) => {
    setCurrentItem(e.target.value);
  };
  const addItemHandler = () => {
    setItemList([...itemList, { item: currentItem, key: Date.now() }]);
    setCurrentItem("");
  };

  return (
    <div className="App">
      <h1>My Todo List</h1>
      <header className="App-header">
        <div className="container">
          <div className="input-container">

            <input type="text" value={currentItem} onChange={changeHandler} placeholder="add task..." />
            <button onClick={addItemHandler}>add</button>
            </div>
            <List itemList={itemList} setItemList={setItemList}></List>
        </div>
      </header>
    </div>
  );
}

export default App;
