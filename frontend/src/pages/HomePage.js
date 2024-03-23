import { Row, Col } from "react-bootstrap";
import Product from "../components/Products";
import React from "react";
import { useGetProductsQuery } from "../slices/productApiSlice";
//import Loader from "../components/Loader";
import Message from "../components/Message";
import { Loader } from "../components/Loader";

const HomePage = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      <Row>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">
            {error?.data?.message || error?.error}
          </Message>
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
