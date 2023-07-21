import React, { useEffect, useState } from "react";
import { Col, Row, Card, Button } from "react-bootstrap";
import "../Scss/cards.scss";
import axios from "axios";
import Featured from "./Featured";

export default function Cards(props) {
  console.log(props);
  const [products, setProducts] = useState([]);
  const [sortedProducts, setSortedProducts] = useState([]);
  const productsPerRow = 12;
  const [next, setNext] = useState(productsPerRow);

  const loadMore = () => {
    setNext(next + productsPerRow);
  };

  const getProducts = () => {
    const options = {
      method: "GET",
      url: "https://fakestoreapi.com/products/",
    };

    axios
      .request(options)
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="card-collector">
      <div className="new">
        {props.Featured ? <h2>Featured Products</h2> : <h2 id="scrollnow">Just For You</h2>}
        <div className="cards-c">
          {props.Featured ? (
            <Row xs={2} md={3} lg={4} className="g-2">
              {products?.slice(14, 21).map((items, index) => (
                <Col key={index}>
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
                </Col>
              ))}
            </Row>
          ) : (
            <>
              <Row xs={2} md={3} lg={4} className="g-2">
                {products?.slice(0, next).map((items, index) => (
                  <Col key={index}>
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
                  </Col>
                ))}
              </Row>

              <div className="seemore-btn d-flex justify-content-center py-5">
                {next < products?.length && (
                  <Button className="use-btn" onClick={loadMore}>
                    See More
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
