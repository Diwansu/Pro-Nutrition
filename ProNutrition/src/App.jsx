import  { useState } from "react";
import "./App.css";
import FoodBox from "./Components/FoodBox";
import Search from "./Components/Search";
import FoodData from "./Components/FoodData";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <Search handleSearch={handleSearch} />
      {FoodData.filter((val) =>
        searchTerm === ""
          ? true
          : val.name.toLowerCase().includes(searchTerm.toLowerCase())
      ).map((foodItem) => (
        <div
          key={foodItem.id}
          style={{ marginBottom: "25px", marginLeft: "100px" }}
        >
          <FoodBox food={foodItem} />
        </div>
      ))}
    </>
  );
};

export default App;