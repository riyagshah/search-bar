import { useState, useEffect } from "react";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.css";
import { SearchBar } from "./conponent/SearchBar";
import { countries } from "./utils/countries";

function App() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (query === "") {
      setSuggestions([]);
    } else {
      let newListOfSuggestions = countries
        .filter((item) =>
          item.country.toLowerCase().indexOf(query) !== -1 ? true : false
        )
        .map((item) => item.country);
      setSuggestions(newListOfSuggestions);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [query]);

  return (
    <div>
      <h1>Search Countries</h1>
      <SearchBar
        loading={loading}
        setLoading={setLoading}
        suggestions={suggestions}
        onChange={(val) => setQuery(val)}
      />
    </div>
  );
}

export default App;
