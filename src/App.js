import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import Header from "./header";
import Categories from "./categories";
import Category from "./category";
import Cart from "./cart";
import ItemDetalhes from "./itemDetalhes";
import { Container } from "reactstrap";
import categories from "../config/categories";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

const App = () => {
  const { cart, addToCart, removeFromCart } = useCart();

  return (
    <Router>
      <Header />
      <Categories />
      <Switch>
        <Route exact path="/categories/:categoryId">
          <Category
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Route>
        <Route
          exact
          path="/categories/:categoryId/products/:productId"
          component={ItemDetalhes}
        />
        <Route exact path="/categories">
          <Container>
            {categories.map((category) => (
              <Link
                key={category.id}
                to={`/categories/${category.id}`}
                className="navbar-brand d-block m-0 p-0"
              >
                <div
                  className="p-3 my-4 text-white rounded d-flex"
                  style={{ backgroundColor: "#333333" }}
                >
                  <div>
                    <img src={category.imageUrl} height={96} />
                  </div>
                  <div className="text-center main-category-name">
                    {category.name}
                  </div>
                </div>
              </Link>
            ))}
          </Container>
        </Route>
        <Route exact path="/cart">
          <Cart
            cart={cart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </Route>
        <Route exact path="/">
          <Redirect to="/categories" />
        </Route>
      </Switch>
    </Router>
  );
};

const useCart = () => {
  const [cart, setCart] = useState([]);
  const isCartProduct = ({ categoryId, productId }) => (cartProduct) =>
    cartProduct.categoryId === categoryId &&
    cartProduct.productId === productId;
  const not = (fn) => (element) => !fn(element);
  const addToCart = ({ categoryId, productId }) =>
    setCart((cart) => {
      const cartProduct = cart.find(isCartProduct({ categoryId, productId }));
      if (cartProduct) {
        return cart.map((cartProduct2) => {
          return cartProduct === cartProduct2
            ? {
                ...cartProduct,
                quantity: cartProduct.quantity + 1,
              }
            : cartProduct2;
        });
      }
      return [...cart, { categoryId, productId, quantity: 1 }];
    });
  const removeFromCart = ({ categoryId, productId }) => {
    const _isProduct = isCartProduct({ categoryId, productId });
    setCart((cart) => {
      const cartProduct = cart.find(_isProduct);
      if (cartProduct.quantity === 1) {
        return cart.filter(not(_isProduct));
      }
      return cart.map((cartProduct2) => {
        return cartProduct === cartProduct2
          ? {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            }
          : cartProduct2;
      });
    });
  };
  return { cart, addToCart, removeFromCart };
};

export default App;
