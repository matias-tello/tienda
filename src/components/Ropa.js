import React, { useEffect, useState, useContext } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import { BsInstagram , BsCashCoin} from "react-icons/bs";
import { FaTwitter,FaCcPaypal } from "react-icons/fa";
import { FiFacebook} from "react-icons/fi";
import {SiMercadopago } from "react-icons/si";
import { ElementoContext } from "./Context";
import './ropa.css';

import Carrito from "./Carrito";








const Ropa = () => {
  const url = "https://fakestoreapi.com/products";
  const [elemento, setElemento] = useState([]);
  const { setItemSeleccionado } = useContext(ElementoContext);
  

  function ObtenerDatos() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setElemento(data);
      })
      .catch((error) => console.log(error));
  }

  useEffect(() => {
    ObtenerDatos();
  }, []);


 
  const handleItemClick = (item) => {
    setItemSeleccionado(item);
  };


  return (
    <div className="container">
      {elemento?.map((item, index) => (
        <div key={index} className="cont-prendas">
          <div className="prendas" id={`prendas-${index}`}>
            <h5>${item.price}</h5>
            <img src={item.image} alt={`Product ${index}`} />
            <Link to="/carrito"> <button  onClick={() => handleItemClick(item)}>Comprar</button> </Link>
           
          </div>
        </div>
      ))}



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
    </div>
  );
};






export default Ropa;
