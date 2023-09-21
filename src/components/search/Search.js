import React from "react";
import SearchBar from "./searchBar";
import SearchResult from "./searchResult";
import "./search.css";
import { Col, Row } from "react-bootstrap";
function Search() {
  return (
    <div id="search-container">
      <Row className="justify-content-md-center">
        <Col lg="6">
          <SearchBar />
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xl="4">
          <SearchResult />
        </Col>
      </Row>
    </div>
  );
}

export default Search;
