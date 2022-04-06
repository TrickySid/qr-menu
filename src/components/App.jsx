import React from "react";
import Categories from "./Categories/Categories";

const restoName = { name: "KC Canteen" };

const itemDetails = [
  {
    name: "",
    category: "",
    price: ""
  }
];

const categoryNames = [
  {
    title: "Starters",
    content: "This is the Starters section"
  },
  {
    title: "Main Course",
    content: "This is the Main Course section"
  },
  {
    title: "Desserts",
    content: "This is the Desserts section"
  }
];

function createRows(itemDetails) {
  return <Menu name={itemDetails.name} price={itemDetails.price} />;
}

function createTable(props) {
  return (
    <div>
      <table className="menu-table">
        <tr className="menu-header">
          <th>Item</th>
          <th>Category</th>
          <th>Price</th>
          {itemDetails.map(createRows)}
        </tr>
      </table>
    </div>
  );
}

function createCategory(categoryNames) {
  return (
    <Categories
        title={categoryNames.title}
        content={categoryNames.content}
    />
  );
}

function App() {
    return (
      <div>
        <h4 className="resto-name">{restoName.name}'s Menu</h4>
        {categoryNames.map(createCategory)}
      </div>
    );
  }
  
  export default App;
  