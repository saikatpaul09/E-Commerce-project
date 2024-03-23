import { Link, useNavigate } from "react-router-dom";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTocart } from "../slices/cartSlice";
import { FaTrash } from "react-icons/fa";
import Message from "../components/Message";

export const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const addTocartHandler = async (product, qty) => {
    await dispatch(addTocart({ ...product, qty }));
  };
  const isLoggedIn = localStorage.getItem("userInfo");
  return (
    <Row>
      <Col>
        <Col md={8}>
          <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <Message>
              Your Cart is empty <Link to="/">Go back</Link>
            </Message>
          ) : (
            <ListGroup variant="flush">
              {cartItems.map((item, index) => (
                <ListGroup.Item key={item._id}>
                  <Row>
                    <Col md={2}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${item._id}`}>{item?.name}</Link>
                    </Col>
                    <Col md={2}>$ {item?.price}</Col>
                    <Col>
                      <Form.Control
                        as="select"
                        value={item?.qty}
                        onChange={(e) =>
                          addTocartHandler(item, Number(e.target.value))
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                    <Col md={2}>
                      <Button type="button" variant="light">
                        <FaTrash />
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>
                Subtotal ({cartItems.reduce((acc, item) => acc + item?.qty, 0)})
                items
              </h3>
              ( ${" "}
              {cartItems
                .reduce((acc, item) => acc + item?.qty * item?.price, 0)
                .toFixed(2)}
              )
            </ListGroup.Item>
            <ListGroup.Item>
              <Button
                type="button"
                variant="light"
                onClick={() =>
                  navigate(
                    isLoggedIn ? "/shipping" : "/login?redirect=/shipping"
                  )
                }
              >
                Proceed to checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};
