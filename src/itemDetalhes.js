import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import categories from "../config/categories";
import "./category.css";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Example from "./fade";

const ItemDetalhes = () => {
  const params = useParams();
  const categoryId = parseInt(params.categoryId);
  const productId = parseInt(params.productId);

  const category = categories.find((category) => category.id == categoryId);

  if (category === undefined) {
    return <div className="text-white">Categoria não encontrada</div>;
  }

  const product = category.products.find((product) => product.id == productId);

  if (product === undefined) {
    return <div className="text-white">Produto não encontrado</div>;
  }

  return (
    <Container className="p-3">
      <Card
        body
        outline
        color="secondary"
        body
        inverse
        style={{ backgroundColor: "#333", borderColor: "#333" }}
      >
        <Row>
          <Col md={12} className="mb-3">
            <Link to=".." className="navbar-brand">
              {/* ta bugado a linha de cima */}
              {/* era pra ser ../.. */}
              <img
                style={{ width: 42, marginRight: 8 }}
                src="https://firebasestorage.googleapis.com/v0/b/imagensfirebaseweb.appspot.com/o/LogoMakr-7zbLhx.png?alt=media&token=5976efbc-867d-466c-87ad-c719b69a3028"
              />
            </Link>
          </Col>
          <Col md={6}>
            <CardImg
              top
              width="100%"
              src={product.imageUrl}
              alt="Card image cap"
            />
          </Col>
          <Col md={6}>
            <CardBody>
              <CardTitle tag="h5">{product.name}</CardTitle>
              <CardText>{product.description}</CardText>
              <div className="counter" className="mb-3">
                <div>
                  {product.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </div>

                <div>
                  {/*<ButtonGroup>
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
            </ButtonGroup>*/}
                </div>
              </div>
              <div>
                <Example />
              </div>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default ItemDetalhes;
