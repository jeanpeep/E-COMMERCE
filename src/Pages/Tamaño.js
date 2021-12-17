import React, { useContext } from 'react'
import { Container } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Nav_general from '../components/Nav_general';
import { ProductContext } from '../Context';

export default function Tamaño() {
    const param = useParams();
    const {productList} = useContext(ProductContext);
    const filtro = [];
    var idd = param.id;

    return (
        <div>
            <Nav_general/>
            <Container id="listado">
            {
                productList.forEach((el)=>{
                    var memo = parseFloat(el.description);
                    var num = parseFloat(idd);
                    var memomax = num+0.5;
                    if(memo>=num&&memo<memomax){
                        filtro.push(el);
                    }
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
        </div>
    )
}
