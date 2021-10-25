import { useState } from "react";
import "./App.css";
import Searchbar from "./components/Searchbar";
import ImageGallery from "./components/ImageGallery";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(1);

  const getSearchValue = (searchValue) => {
    setSearchValue(searchValue);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={getSearchValue} />
      <ImageGallery searchValue={searchValue} page={page} />
    </div>
  );
}
export default App;
