import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import SearchResult from "../search/searchResult";
import { useNavigate } from "react-router-dom";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import { setClearData } from "../../stores/searchSlice";

function SingleCity() {
  const search = useSelector((state) => state.search);

  const history = useNavigate();
  const dispatch = useDispatch();

  const backButton = () => {
    history(-1);
    dispatch(setClearData({}));
  };

  if (search.isDone) {
    return (
      <Container>
        <Row className="mt-5">
          <Col>
            <IoMdArrowRoundBack className="backButton" onClick={backButton} />
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xl={4}>
            <SearchResult />
          </Col>
        </Row>
      </Container>
    );
  } else if (search.loading) {
    return (
      <div>
        <AiOutlineLoading3Quarters className="loading-icon" />
      </div>
    );
  } else if (search.error !== "") {
    return <h1>{search.error}</h1>;
  } else if (search.error === "" && search.data === "") {
    return (
<>
      <h1>Yeniden İstek Atın</h1>
      <IoMdArrowRoundBack className="backButton" onClick={backButton} />

</>

      )
  }
}

export default SingleCity;
