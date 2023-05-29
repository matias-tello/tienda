import { Link } from "react-router-dom";
import './ofertas.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import React, { useEffect, useState, useContext } from "react";
import { ElementoContext } from "./Context";
import Ropa from './Ropa';
import { useHistory } from "react-router-dom";


const Ofertas=( {Ropa} )=>{

  const { itemSeleccionado ,setItemSeleccionado } = useContext(ElementoContext);

  const history = useHistory();

  const handleItemClick = (prenda) => {
    setItemSeleccionado(prenda);
    history.push("/carrito");
  };


const PrendasOfertas= [{
    title:"Remera Hombre",
    price: 70,
    image:"https://www.ansilta.com/img/articulos/2022/09/remera_aeris_2_polartec_delta_aerobicas_2_imagen12.jpg"
},

{
    title:"Remera Unisex",
    price: 60,
    image:"https://d3ugyf2ht6aenh.cloudfront.net/stores/113/599/products/unitivo-dignidad1-7fef9689d02bbc710815995923318410-640-01-4f1269a56927d819d316039109253002-640-0.webp"
},
{
    title:"Remera Hombre",
    price:70,
    image:"https://www.ansilta.com/img/articulos/2020/10/remera_aeris_44_imagen4.jpg"
},
{
    title:"Remera Hombre",
    price:60,
    image:"https://www.puntosport.com.ar/11202-large_default/remera-head-stricker-sublimada-tenis-padel-azul-blanco-verde-gris-rp00012.jpg"

},
{
    title:"Remera Mujer",
    price:50,
    image:"https://www.ansilta.com/img/articulos/2022/09/remera_lef_2_polartec_power_dry_upf_50_imagen8.jpg"
},
{
    title:"Remera Mujer",
    price:50,
    image:"https://www.cordonandino.com/img/articulos/remera_aeris_dama_imagen2.jpg"
},
{
    title:"Remera Mujer",
    price:75,
    image:"https://megasports.vteximg.com.br/arquivos/ids/206028-1000-1000/06389676002_0.jpg?v=637701691363500000"
},
{
    title:"Remera Unisex",
    price:70,
    image:"https://marshallmoffat.vteximg.com.br/arquivos/ids/156829-545-815/Remera-Naranja-delantero.jpg?v=637055525020770000"
}
]

console.log(PrendasOfertas)
    return(
       <section className="ofertas">

<nav className="navbar-ofertas">
        <ul className="ul-links-ofertas">
          <li>
            <Link to="/inicio-carrito"><p>Inicio</p></Link>
          </li>
         
          <li>
            <Link to="/registrarse"><p>Registrarse</p></Link>
          </li>
       
        
          <li>
            <Link to={"/carrito"}>
              <AiOutlineShoppingCart className="icon-carrito" />
              
            </Link>
          </li>

        </ul>
      </nav>



<div className="contenedor"> 
{
    PrendasOfertas.map((prenda, item)=>{

        return(

<div className="cont-prendas-oferta">

 <div className="prendas-oferta">
        <h1 className="title-oferta"> {prenda.title} </h1>
        <h3 className="precio-prenda">  ${prenda.price} </h3> 
        <img src={prenda.image} className="img-oferta" />
        <button onClick={() => handleItemClick(prenda)} className="btn-comprar" >Comprar</button>

      </div>
 </div>

     
      
        )
    })
}
</div>


      

       </section>
    )
}

export default Ofertas;