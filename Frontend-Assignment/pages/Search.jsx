import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { Link, useLocation } from "react-router-dom";

const Search = () => {
  let location = useLocation();
  let search = location.pathname.split("/")[2];
  const [products, setProducts] = useState([]);

  const handleSearch = (e) => {
    const options = {
      method: "GET",
      url: "https://fakestoreapi.com/products/" + search,
    };

    axios
      .request(options)
      .then(function (response) {
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    handleSearch();
  }, [search]);

  return (
    <>
      <Container className="card-container">
        <div className="search-resule">
          <span className="search-result">Search Results for</span>
          <span className="search-result">"{search}"</span>
        </div>

        <Row xs={2} md={4} className="g-4 cards-row my-5">
          {products?.map((_, idx) => {
            return (
              <Col className="cards-col" key={idx}>
                <Link
                  to={`/description/${_.id}/${_.name}`}
                  className="card-link"
                >
                  <Card>
                      <Card.Img variant="top" src={items.image} />
                      <Card.Body>
                        <Card.Title>{items.title}</Card.Title>
                        <Card.Text>
                          Rs:
                          {items.price}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Search;
