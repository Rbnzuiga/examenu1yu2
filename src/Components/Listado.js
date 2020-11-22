import '../App.css';
import { Button, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const carrito = (props) => {
            
            return ( 
                
          <div  className="List" >     
                  <h2>Tus productos</h2>

          {     
        
                
                     <Table  striped bordered hover variant = "dark">
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
                      props.carrito.map((f,index)=>
                        <tr key={index}>
                            <td>{f.codigo}</td>
                            <td>{f.descripcion}</td>
                            <td>{f.precio}</td>
                            <td><Button onClick={()=>props.eliminar(f.precio,index)}
                             variant="outline-danger">Eliminar</Button></td>
                            <td> <p>{carrito.precio}</p> </td>
                            
                        </tr>
                      )
                    }
                      </tbody>
                    </Table>
                  }
        
                  </div>
             );
             
                }

export default  carrito; 