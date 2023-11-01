
import { Row, Col } from "react-bootstrap";
import Product from "../components/Products";
import React from "react";
import { useGetProductsQuery } from "../slices/productSlice";

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      <Row>
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>{error?.data?.message || error?.error}</div>
        ) : (
          products.map((product) => (
            <Col sm={12} md={6} lg={4} xl={3} className="mt-3" key={product.id}>
              <Product product={product} />
            </Col>
          ))
        )}
      </Row>
    </>
  );
};

export default HomePage;
