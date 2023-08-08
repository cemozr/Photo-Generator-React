import { useState } from "react";
import SearchBar from "./SearchBar";
import "./App.css";
import SearchImages from "./api";
import ImageList from "./ImageList";

function App() {
  const [images, setImages] = useState([]);
  const handleSubmit = async (term) => {
    const result = await SearchImages(term);
    setImages(result);
  };

  return (
    <div>
      <SearchBar search={handleSubmit} />
      <ImageList imagesPlaceholder={images} />
    </div>
  );
}

export default App;
