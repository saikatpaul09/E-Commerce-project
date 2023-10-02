import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from "../components/Products";
import React from "react";

const HomePage = () => {
  return (
    <>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} className="mt-3">
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomePage;
