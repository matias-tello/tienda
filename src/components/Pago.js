import React from "react";
import './pago.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { BsFillCreditCard2BackFill, BsFillCreditCard2FrontFill, BsCashCoin } from "react-icons/bs";


const Pago=()=>{

return(

    <section className="metodo-pago">

<div className="pagos">
<h1> <BsFillCreditCard2BackFill/>  Tarjeta Credito </h1>

</div>



<div className="pagos">
<h1>  <BsFillCreditCard2FrontFill/> Tarjeta Debito</h1>

</div>


<div className="pagos">
    <h1> <BsCashCoin/> Efectivo</h1>
</div>

    </section>



)


}

export default Pago;