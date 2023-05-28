import React from 'react';
import './App.css';
import Hero from './components/Hero';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Pago from './components/Pago';
import Ropa from './components/Ropa';
import Carrito from './components/Carrito';
import { ElementoProvider } from './components/Context';
import Formulario from './components/Formulario';
import Ofertas from './components/Ofertas';
import CollapsibleExample from './components/Hero';

function App() {
  return (
    <BrowserRouter>

      <ElementoProvider>
        
        <Switch>

          <Route exact path="/carrito" component={Carrito} />
          <Route exact path="/registrarse" component={ Formulario}/>
          <Route exact path="/ofertas" component={Ofertas}/>
          <Route path="/">

            <Hero />

            <Pago />

            <Ropa />

          </Route>

        </Switch>

      </ElementoProvider>

    </BrowserRouter>
  );
}

export default App;
