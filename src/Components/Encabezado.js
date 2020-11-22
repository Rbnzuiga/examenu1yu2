

import React, {Component} from 'react';
import buenfinlogo from '../logo-buen-fin-256.png'



class Encabezado extends Component{
    render()  {
        return(
     <div className="Encabezado">
    <p>
    <img src={buenfinlogo} className = "buenfinlogo" alt="logo"/>
    </p>

     </div>


);
    }
}
export default Encabezado; 