import React, { useContext, useState } from 'react'
import { CanastaContext } from '../Context'
import '../App.css';
import { Button, Dropdown,} from 'react-bootstrap';

export default function ListaCanasta() {
    var total= 0;
    const{canasta, setCanasta}=useContext(CanastaContext)
    function eliminarCanasta (id){
        var nuevaCanasta = canasta.filter((element)=> element._id !==id);
        setCanasta(nuevaCanasta)
    }

    if(canasta.length){
        canasta.map((el)=>{
            total=total+el.price;
        })
    return (
        <div>
            {canasta.map((el)=>{
                return(<div id="itemsCanasta">
                    <img src={el.image} style={{width:"50px"}}/>
                    <div className='d-flex ms-2 flex-column'>
                    <h7><b>{el.product_name}</b></h7>
                    <h7>Marca: {el.brand.substring(3)}</h7>
                    <h7><i>Precio: <b>{el.price}</b> </i></h7>
                    </div>
                    <div>
                    <Button onclick={()=> eliminarCanasta(el._id)}style={{width:"5px"}} variant='transparent'>🗑</Button>
                    </div>
                </div>)
            })}
            <Dropdown.Divider />
            <div className='position-sticky'>
                <h5>Monto total: S/.{total}</h5>
            </div>
        </div>
    )
    }
    else{
    return(
        <div>
            <h4>No hay elementos en la canasta</h4>
        </div>
    )
    }
}
