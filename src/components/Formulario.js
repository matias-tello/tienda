import { Link, BrowserRouter, Switch, Route } from "react-router-dom";
import './form.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";


const Formulario=()=>{

const[nombre,  setNombre] = useState("")
const[apellido,  setApellido] = useState("")


function CapturarNombre(e){
    setNombre(e.target.value)
}

function CapturarApellido(e){
    setApellido(e.target.value)
}

function Enviar(e){
   
    console.log(nombre)
    console.log(apellido)
}




    return(
        
<body className="body-form">

<section className="section-form">


<nav className="navbar-carrito-form">
        <ul className="ul-links-form">
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
            
            </Link>
        </li>

        </ul>
    </nav>



    <form  className="formulario" onSubmit={Enviar} action="https://formsubmit.co/tellomatias17@gmail.com" method="POST" >
            <h2> Formulario de Registro </h2>

         <input  type="text" placeholder="Ingrese su nombre" id="nombre" name="name"  value={nombre} onChange={CapturarNombre} />
         <input  type="text" placeholder="Ingrese su apellido" id="apellido" name="apellido" value={apellido} onChange={CapturarApellido} />
         <input  type="email" placeholder="Ingrese su email" id="email" name="email" />
         <input  type="password" placeholder="Ingrese su contraseña" id="contraseña" name="contraseña" />
       
         <input  type="submit" placeholder="Enviar" id="enviar"  />

    </form>

</section>
</body>


    )
}



export default Formulario;