import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { FormContainer } from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingAddress } from "../slices/cartSlice";
import { CheckoutPageStep } from "./CheckoutPageStep";
export const ShippingScreen = () => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress?.address) || "";
  const [city, setCity] = useState(shippingAddress?.city) || "";
  const [postalCode, setPostalCode] =
    useState(shippingAddress?.postalCode) || "";
  const [country, setCountry] = useState(shippingAddress?.country) || "";
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    navigate("/payment");
  };

  return (
    <FormContainer>
      <CheckoutPageStep step1 step2 />
      <h1>ShippingScreen</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="address" className="my-2">
          <Form.Label>Address</Form.Label>
          <Form.Control
            type="text"
            value={address}
            placeholder="Enter address"
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="city" className="my-2">
          <Form.Label>City</Form.Label>
          <Form.Control
            type="text"
            value={city}
            placeholder="Enter city"
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="postalcode" className="my-2">
          <Form.Label>Postal code</Form.Label>
          <Form.Control
            type="text"
            value={postalCode}
            placeholder="Enter pin"
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="country" className="my-2">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="text"
            value={country}
            placeholder="Enter country"
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type="Submit" variant="primary" className="my-2">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
