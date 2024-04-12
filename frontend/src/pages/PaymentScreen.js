import { useState, useEffect } from "react";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormContainer } from "../components/FormContainer";
import { CheckoutPageStep } from "./CheckoutPageStep";
import { savePaymentMethod } from "../slices/cartSlice";

export const PaymentScreen = () => {
  const [paymentMethod, setPaymentMethod] = useState("CreditDebit");
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!shippingAddress) {
      navigate("/shipping");
    }
  }, [shippingAddress, navigate]);

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
  };
  return (
    <FormContainer>
      <CheckoutPageStep step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form>
        <Form.Group>
          <Form.Label as="legend">Select Method</Form.Label>
          <Col>
            <Form.Check
              type="radio"
              className="my-2"
              label="Debit or Credit card"
              id="Credit or debit"
              value="CreditDebit"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></Form.Check>
          </Col>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={onSubmitHandler}>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};
