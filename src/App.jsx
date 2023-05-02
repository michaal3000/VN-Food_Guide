import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [dishes, setDishes] = useState([]);
  const [filteredDishes, setFilterDishes] = useState(dishes);

  useEffect(() => {
    fetch("food-list.json")
      .then((response) => response.json())
      .then((data) => setDishes(data.dishes))
      .catch((error) => console.error(error));
  }, []);
  useEffect(() => {
    const newfilteredDishes = dishes.filter((dish) => {
      const nameWithoutAccent = dish.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase();
      const searchWithoutAccent = searchField
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLocaleLowerCase();

      return nameWithoutAccent.includes(searchWithoutAccent);
    });

    setFilterDishes(newfilteredDishes);
  }, [dishes, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Foreigner guide to Vietnamese food</h1>

      <SearchBox
        className="dishes-search-box"
        onChangeHandler={onSearchChange}
        placeholder="search dishes"
      />
      <CardList dishes={filteredDishes} />
    </div>
  );
};

export default App;
