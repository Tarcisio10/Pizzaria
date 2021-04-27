import React from "react";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardDeck,
  CardImg,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import categories from "../config/categories";

const Cart = ({ cart, addToCart, removeFromCart }) => {
  if (cart.length === 0) {
    return (
      <Container className="p-3 text-white">Seu carrinho está vazio.</Container>
    );
  }

  const totalValue = cart.reduce((totalValue, cartProduct) => {
    const product = categories
      .find((category) => category.id === cartProduct.categoryId)
      .products.find((product) => product.id === cartProduct.productId);
    return totalValue + product.price * cartProduct.quantity;
  }, 0);

  return (
    <Container className="p-3">
      <CardDeck className="mb-3">
        <Row style={{ margin: -8 }}>
          {cart.map((cartProduct) => {
            const product = categories
              .find((category) => category.id === cartProduct.categoryId)
              .products.find((product) => product.id === cartProduct.productId);
            return (
              <Col
                key={`${cartProduct.categoryId}-${cartProduct.productId}`}
                md={4}
                style={{ padding: 8 }}
              >
                <Card
                  body
                  outline
                  color="secondary"
                  body
                  inverse
                  className="m-0"
                  style={{ backgroundColor: "#333", height: "100%" }}
                >
                  <CardImg
                    top
                    width="100%"
                    src={product.imageUrl}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{product.name}</CardTitle>
                    <CardText>{product.description}</CardText>
                    <div className="counter">
                      <div>
                        {product.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </div>
                      <div>
                        <ButtonGroup>
                          <Button
                            color="success"
                            outline
                            onClick={() => removeFromCart(cartProduct)}
                            disabled={cartProduct.quantity === 0}
                          >
                            -
                          </Button>
                          <Button color="success" outline disabled>
                            {cartProduct.quantity}
                          </Button>
                          <Button
                            color="success"
                            outline
                            onClick={() => addToCart(cartProduct)}
                          >
                            +
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
        </Row>
      </CardDeck>
      <div className="text-white mb-2">
        Total:{" "}
        {totalValue.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </div>
      <div>
        <Button color="success">Finalizar pedido</Button>{" "}
      </div>
    </Container>
  );
};

export default Cart;
