import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Encabezado from './Components/Encabezado';
import Productos from './Components/Productos';
import Listado from './Components/Listado'
import productos from './Components/Productos';
import carrito from './Components/Listado';





class App extends Component {
  

    constructor() {
      super();
      this.state = { 
        carrito:[], 
        total:0, 
        productosLista:[ 
        {codigo:1,descripcion:"Huawei Matebook D 15", precio:15899}, 
        {codigo:2,descripcion:"Samsung Galaxy S10", precio:13999}, 
        {codigo:3,descripcion:"Samsung Galaxy A01", precio:1850}, 
        {codigo:4,descripcion:"Xiaomi Redmi Note 9s", precio:5949}, 
        {codigo:5,descripcion:"Mochila Xiaomi", precio:699}, 
        {codigo:6,descripcion:"Teclado Primus Gaming Ballista", precio:1999}], 
        }; 
        
      };
      enviar=(producto, precio)=>{
      let temporal=this.state.carrito
      let total=this.state.total
       
      this.setState({
        ...this.state,
        carrito:[...temporal,producto],
        total:total+precio

      })
      
   


    }

eliminar=(precio, index)=>{
  const temporal = this.state.carrito.filter((a,i)=>i!==index)
  let total=this.state.total
  this.setState({
    ...this.state,
    carrito:temporal,
    total:total-precio                    
  })
}
  render(){
    
    return (
      <div className="App">
        <Encabezado
       
        />
        <div className="Containers">
        
          <Productos
            productosLista={this.state.productosLista}
            enviar ={this.enviar}
            total={this.state.total}


          />
          <div className = "list">
          <Listado
           eliminar ={this.eliminar}     
           carrito={this.state.carrito}>
           
          </Listado>
          </div>
        </div>
      </div>
    )
  }

}
 
export default App;
