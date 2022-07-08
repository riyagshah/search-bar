import React from "react";
import { useState } from "react";
import { Circles } from "react-loader-spinner";

const SearchBar = ({ loading, setLoading, onChange, suggestions }) => {
  const [inputText, setInputText] = useState("");
  
  const handleChange = (e) => {
    setInputText(e.target.value.toLowerCase());
    onChange(e.target.value);
    setLoading(true);
  };

  const handleClear = () => {
    setInputText("");
    onChange("");
    setLoading(false);
  };

  return (
    <>
      <div
        className={suggestions.length > 0 && !loading ? "bar dataShow" : "bar"}
      >
        <span className="material-symbols-outlined">search</span>
        <input type="text" value={inputText} onChange={handleChange} />
        <div className="rightDiv">
          {!loading && inputText && (
            <span
              className="material-symbols-outlined cross"
              onClick={handleClear}
            >
              close
            </span>
          )}
          {loading && <Circles color="#00BFFF" height={20} width={20} />}
        </div>
      </div>
      <div
        className={suggestions.length > 0 && !loading ? "searchData" : "hidden"}
      >
        {!loading && suggestions.length > 0
          ? suggestions.map((item, index) => <div key={index}>{item}</div>)
          : inputText &&
            suggestions.length === 0 &&
            !loading && <h2 className="nomatch">No Match</h2>}
      </div>
    </>
  );
};

export { SearchBar };
