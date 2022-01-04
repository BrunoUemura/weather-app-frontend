import "./styles.scss";
import { useContext, useState } from "react";
import { CityContext } from "../../contexts/CityContext";

export default function Navbar() {
  const { setCity } = useContext(CityContext);
  const [search, setSearch] = useState("");

  const handleSearchCity = () => {
    setCity(search);
  };

  return (
    <div className="NavbarContainer">
      <input
        type="text"
        placeholder="Search city"
        className="NavbarInput"
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />
      <button className="NavbarButton" onClick={handleSearchCity}>
        Search
      </button>
    </div>
  );
}
