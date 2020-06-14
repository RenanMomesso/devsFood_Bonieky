import React from "react";
import "./App.css";
import HomeScreen from "./pages/HomeScreen";
import Tela2Screen from "./pages/Tela2Screen";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container, Menu, PageBody } from "./ApplyStyled";
import MenuItem from './components/MenuItem'
import PrivateRoute from "./components/PrivateRoute";
import CartItem from "./components/CartItem";
import ReactToolTip from 'react-tooltip'

function App() {
  const user = useSelector((state) => state.user.name);
  return (
    <BrowserRouter>
      <Container>
        <Menu>
          <MenuItem title="Menu" icon="/assets/store.png" link="/" /> 
          <MenuItem title="Pedidos" icon="/assets/order.png" link="/orders" /> 
          <MenuItem title="Meu Perfil" icon="/assets/profile.png" link="/profile" /> 
        </Menu>
        <PageBody>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route exact path="/tela2/:name" component={Tela2Screen} />
            <PrivateRoute path="/orders">
              <div>tela de pedido</div>
            </PrivateRoute>
           
            <PrivateRoute path="/profile">
              <div>tela de perfil</div>
            </PrivateRoute>
          </Switch>
        </PageBody>
        <CartItem/>
        <ReactToolTip id="tip-top" place="top" effect="solid"/>
        <ReactToolTip id="tip-right" place="right" effect="solid"/>
      </Container>
    </BrowserRouter>
  );
}

export default App;
