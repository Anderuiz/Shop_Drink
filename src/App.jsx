import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import Login from "./Components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
