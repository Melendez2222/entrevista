import React, { useEffect, useState } from "react"
import axios from 'axios';
import "./App.css"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./common/header/Header"
import Pages from "./pages/Pages"
import Cart from "./common/Cart/Cart"
import Footer from "./common/footer/Footer"
import Notfound from "./components/Notfound"
import Editarproducto from "./components/MainPage/Editarproducto";
import Adminpanel from "./components/Adminpanel";
import Listproductos from "./components/MainPage/Listproductos";

function App() {
  const [productItems, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://localhost:7270/PRODUCT/ListAll');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);
  const [Clientes, setClientes] = useState([]);
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await axios.get('https://localhost:7270/CLIENT/All');
        setClientes(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchClientes();
  }, []);
  //Step 2 :
  const [CartItem, setCartItem] = useState([])

  //Step 4 :
  const addToCart = (product) => {
    const productExit = CartItem.find((item) => item.iD_PRODUCTO === product.iD_PRODUCTO)
    if (productExit) {
      setCartItem(CartItem.map((item) => (item.iD_PRODUCTO === product.iD_PRODUCTO ? { ...productExit, qty: productExit.qty + 1 } : item)))
    } else {
      setCartItem([...CartItem, { ...product, qty: 1 }])
    }
  }

  const deleteQty = (product) => {
    setCartItem(CartItem.filter((item) => item.iD_PRODUCTO !== product.iD_PRODUCTO))
  }
  // Stpe: 6
  const decreaseQty = (product) => {
    const productExit = CartItem.find((item) => item.iD_PRODUCTO === product.iD_PRODUCTO)
    if (productExit.qty === 1) {
      setCartItem(CartItem.filter((item) => item.iD_PRODUCTO !== product.iD_PRODUCTO))
    } else {
      setCartItem(CartItem.map((item) => (item.iD_PRODUCTO === product.iD_PRODUCTO ? { ...productExit, qty: productExit.qty - 1 } : item)))
    }
  }
  return (
    <Router>
          <Header CartItem={CartItem} />
      <Switch>
        <Route path="/" exact>
          <Pages productItems={productItems} addToCart={addToCart} component={Listproductos} />
        </Route>
        <Route path="/cart" exact>
          <Header CartItem={CartItem} />
          <Cart
            CartItem={CartItem}
            productItems={productItems}
            addToCart={addToCart}
            decreaseQty={decreaseQty}
            deleteQty={deleteQty}
          />
        </Route>
        <Route path="/LoginModal">
          <Notfound />
        </Route>
        <Route path="/Editarproducto">
          <Editarproducto  productItems={productItems} CartItem={CartItem} addToCart={addToCart} component={Editarproducto}/>
        </Route>
        <Route path="/Adminpanel">
          <Adminpanel productItems={productItems} CartItem={CartItem} addToCart={addToCart} Clientes={Clientes}/>
        </Route>
      </Switch>
          <Footer />
    </Router>
  );
}

export default App
