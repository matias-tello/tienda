import React, {useState} from "react";
import "../App.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";



  
    
     
     function Hero(){


  
      const [isMenuOpen, setMenuOpen] = useState(false);


      const handleMenuToggle = () => {
        setMenuOpen(!isMenuOpen);
      };


      return(
        <section id="hero"> 

<nav className="navbar">
        <ul className={`ul-links ${isMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/inicio"> Inicio  </Link>
          </li>
         
          <li>
            <Link to="/registrarse">Registrarse</Link>
          </li>
          <li>
            <Link to="/ofertas">Ofertas</Link>
          </li>
        
          <li>
            <Link to={"/carrito"}>
              <AiOutlineShoppingCart />
            </Link>
          </li>
         
        

        </ul>
        <div className="cont-icon-responsive">
        <p> <button onClick={handleMenuToggle}>  <AiOutlineMenu className={`toggle ${isMenuOpen ? "rotate" : ""}`}  /> </button> </p>
        </div>
      </nav>


        </section>
      )
     }


     export default Hero; 























    