import React, { useContext} from 'react'
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom'
import Nav_general from '../components/Nav_general'
import { CanastaContext, ProductContext, UserContext } from '../Context';

export default function Producto() {
    const {user} = useContext(UserContext)
    const param = useParams();
    const {productList} = useContext(ProductContext);
    var id = param.id;
    var filtro = [];
    var cont;
    const {canasta, setCanasta} = useContext(CanastaContext);
    function eliminar(idd){
        for ( var i = 0, l = canasta.length, bar = []; i < l; i++ ) {
            bar[ i ] = canasta[ i ];
         }
        var bar2=[]
         bar.map((el)=>{
             if(!el._id==id){
                 bar2.push(el);
             }
         })
         setCanasta(bar2)
    }
    const añadirCarro = ()=>{
        productList.forEach((el)=>{
            if(el._id==id){
                setCanasta([...canasta,el])
            }
        })
    }

    return (
        <div>
            <Nav_general/>
            <Container id="listado">
            <br/>
            {
                productList.forEach((el)=>{
                    if(el._id==id){
                        filtro.push(el);
                    }
                })
            }
            {
                filtro.map((el)=>{
                    return(
                    <div className='d-flex flex-row ps-4 pt-2'>
                    <img src={el.image} alt="pic" style={{width:"430px",height:'470px'}}/> 
                    <div id="cardd2" className='d-flex flex-column ps-5 pt-2'>
                    <h1>{el.product_name}</h1>
                    <h4>Marca: {el.brand.substring(3)}</h4>
                    <h4>Tamaño: {el.description}"</h4>
                    <h5>Memoria: {el.sku}GB</h5>
                    <h5>Precio: S/.{el.price}</h5>
                    <br/>
                    {(user.token)?<Button onClick={añadirCarro} style={{width:'180px'}}>Añadir al carrito</Button>:<Button style={{width:'180px'}} disabled>Debes Logearte primero</Button>}
                    </div>
                    </div>)
                })
            }
            </Container>
        </div>
    )
}
