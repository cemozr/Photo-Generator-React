import { useState } from "react";
import "./Searchbar.css";
import "animate.css";
export default function SearchBar({ search }) {
  const HandleFormSubmit = (event) => {
    event.preventDefault();
    search(inputValue);
  };
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="header animate__animated animate__fadeIn ">
      <form onSubmit={HandleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Ara"
        />
      </form>
    </div>
  );
}
