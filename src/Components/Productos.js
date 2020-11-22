import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const productosLista = (props) => {
    return ( 
        <div  className="List" >  
        <h2>Lista de productos</h2>

        {   
      
             <Table  striped bordered hover variant = "dark" >
            <thead>
              <tr>
                <th>codigo</th>
                <th>descripcion</th>
                <th>precio</th>
                <th></th>
            
            
              </tr>
            </thead>
              <tbody>
            {
              props.productosLista.map((a,index)=>
                <tr key={index}>
                    <td value={a.codigo} name = "codigo" >{a.codigo} </td>
                    <td value={a.descripcion} name = "descripcion" >{a.descripcion} </td>
                    <td value={a.precio} name = "precio" >${(a.precio).toFixed(2).replace(/\d(?=(\d{3})+.)/g, '$&,')}</td>
                    <td><Button onClick={()=>props.enviar(a,a.precio)}  variant="success">Agregar</Button></td>
                </tr>
                
              )
            }
              </tbody>
            </Table>
          }
                 <h3>total:{props.total}</h3>
          </div>
     );

}
 
export default productosLista