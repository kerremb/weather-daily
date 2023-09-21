import React from "react";
import { useSelector } from "react-redux";
function SearchResult() {

  const search = useSelector((state) => state.search);

  if (search.isDone) {

    const description = search.data.list[0].weather[0].description;

    return (
      <div className="search-result">
        <h1>{search.data.city.name}</h1>
        <img src={`https://openweathermap.org/img/wn/${search.data.list[0].weather[0].icon}@2x.png`} alt="weather-icon"/>
        <h1>{Math.round(search.data.list[0].main.temp)}°C</h1>
        <h1>{description.charAt(0).toUpperCase() + description.slice(1)}</h1>
      </div>

    );
  } else {

    return <h1 className="text-center mt-5">{search.error && search.error}</h1>;
    
  }
}

export default SearchResult;
