import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDatas } from "../../stores/searchSlice";
import { setValue } from "../../stores/searchOnChange";
import { BsSearch } from "react-icons/bs";
import { AiOutlineLoading3Quarters, AiOutlineClose } from "react-icons/ai";
import "./search.css";

function SearchBar() {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search);
  const [city, setCity] = useState("");

  const onChangeFunc = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    dispatch(setValue(city));
    // eslint-disable-next-line
  }, [city]);

  const searchWithEnter = (e) => {
    if (e.key === "Enter") {
      dispatch(fetchDatas(city));
    }
  };

  return (
    <>
      <div id="search-bar-container">
        <input
          onKeyDown={searchWithEnter}
          onChange={onChangeFunc}
          id="search-bar"
          value={city}
        />

        <BsSearch
          id="search-button"
          onClick={() => dispatch(fetchDatas(city))}
          className="search-button-icon"
        />

        {search.loading && (
          <AiOutlineLoading3Quarters className="loading-icon-search-bar" />
        )}
        {city.length > 0 && (
          <AiOutlineClose onClick={() => setCity("")} className="clear-icon" />
        )}
      </div>
    </>
  );
}

export default SearchBar;
