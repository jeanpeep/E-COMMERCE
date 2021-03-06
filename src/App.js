import { useContext} from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';
import Nav_general from './components/Nav_general';
import Vista_Principal from './components/Vista_Principal';
import { ProductContext, UserContext } from './Context';

function App() {
  var cont= 0;
  const filtro = [];
  const {productList} = useContext(ProductContext)
  return (
    <>
      <Nav_general/>
      <Vista_Principal/>
      <h3>Algunos de nuestros productos:</h3>
      <Container id="listado">
      
            {
                productList.forEach((el)=>{
                    if(cont<10){
                        filtro.push(el);
                    }
                    cont++;
                })
            }
            {
                filtro.map((el)=>{
                    return(
                    <Link to={`/producto/${el._id}`}>
                    <div id="cardd" className='d-flex flex-column ps-4 pt-2'>
                    <img src={el.image} alt="pic" style={{width:"130px",height:'170px'}}/> 
                    <h5 >{el.product_name}</h5>
                    <h7>Marca: {el.brand.substring(3)}</h7>
                    <h7>Tamaño: {el.description}"</h7>
                    <h7>Memoria: {el.sku}GB</h7>
                    </div>
                    </Link>)
                })
            }
            </Container>
    </>
  );
}

export default App;
