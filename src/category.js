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
import "./category.css";
import { Link, useParams } from "react-router-dom";

const Category = ({ cart, addToCart, removeFromCart }) => {
  const params = useParams();
  const categoryId = parseInt(params.categoryId);

  const category = categories.find((category) => category.id === categoryId);

  if (category === undefined) {
    return <div className="text-white">Categoria não encontrada</div>;
  }

  const products = category.products;
  return (
    <Container className="p-3">
      <CardDeck>
        <Row style={{ margin: -8 }}>
          {products.map((product) => {
            const cartProduct = cart.find(
              (cartProduct) =>
                cartProduct.categoryId === categoryId &&
                cartProduct.productId === product.id
            ) ?? { categoryId, productId: product.id, quantity: 0 };
            return (
              <Col
                key={`${categoryId}-${product.id}`}
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
                  <Link
                    to={`/categories/${categoryId}/products/${product.id}`}
                    className="nav-link"
                  >
                    <Button variant="primary">Ver mais detalhes</Button>
                  </Link>
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
    </Container>
  );
};

export default Category;
