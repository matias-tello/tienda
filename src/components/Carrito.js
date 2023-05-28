import React, { useContext, useState } from "react";
import './carrito.css';
import { ElementoContext } from "./Context";
import Hero from './Hero'
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsInstagram , BsCashCoin} from "react-icons/bs";
import { FaTwitter,FaCcPaypal } from "react-icons/fa";
import { FiFacebook} from "react-icons/fi";
import {SiMercadopago } from "react-icons/si";

const Carrito = () => {
  const { itemSeleccionado } = useContext(ElementoContext);
  const [cantidadElemento, setCantidadElemento] = useState(1);
  const [stock, setStock] = useState(10);
  const [stockMensaje , setStockMensaje] = useState("");
 

  function Stock() {
    setCantidadElemento(cantidadElemento + 1);
    setStock(stock - 1);
    
    if (stock <= 1) {
      setStockMensaje("Perdón, nos quedamos sin stock");
      
    } 
  }



  

  return (
    <section className="compra">
      <nav className="navbar-carrito">
        <ul className="ul-links-carrito">
          <li>
            <Link to="/inicio-carrito"><p>Inicio</p></Link>
          </li>
         
          <li>
            <Link to="/registrarse"><p>Registrarse</p></Link>
          </li>
          <li>
            <Link to="/ofertas"><p>Ofertas</p></Link>
          </li>
        
          <li>
            <Link to={"/carrito"}>
              <AiOutlineShoppingCart className="icon-carrito" />
              <p> {cantidadElemento} </p>
            </Link>
          </li>

        </ul>
      </nav>

      {itemSeleccionado && (          //{itemSeleccionado &&  }  SI HAY UN itemSeleccionado va a retornar lo que le digamos

        <div className="elemento-comprado">

          <img src={itemSeleccionado.image} alt="Elemento seleccionado" className="img-seleccionada" />

          <div className="datos-productos">

            <h2 className="nombre-producto-seleccionado">{itemSeleccionado.title}</h2>

            <span className="stock-producto">Stock: {stockMensaje ? stockMensaje : stock}</span>

            <h3>Precio por unidad: ${itemSeleccionado.price}</h3>

            <button className="btn-cantidad" onClick={Stock}>Cantidad: {cantidadElemento}  </button>
           
          </div>
        </div>
      )}

<div className="footer">



<div className="redes">

<span>  <BsInstagram/> </span>
<span> <FaTwitter/> </span>
<span> <FiFacebook/>  </span>

</div>



<div className="pagos-footer">

<span> <BsCashCoin/> </span>
<span> <FaCcPaypal/> </span>
<span> <SiMercadopago/> </span>

</div>



</div>


    </section>
  );
};

export default Carrito;




         