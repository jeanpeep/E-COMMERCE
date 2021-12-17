import React, { useContext, useEffect, useState } from 'react'
import { Button, Dropdown, NavDropdown, Offcanvas } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { CanastaContext, DetailContext, UserContext } from '../Context'
import ListaCanasta from './ListaCanasta'
import "../App.css";

export default function Carrito() {
    const navigate = useNavigate();
    const {user, setUser}= useContext(UserContext)
    const { canasta, setcanasta} = useContext(CanastaContext)
    const [showCanasta, setShowCanasta] = useState(false);
    const {details,setDetails} = useContext(DetailContext)
  const handleCloseCanasta = () => setShowCanasta(false);
  const handleShowCanasta = () =>{
    if(user.token){
        setShowCanasta(true);
    }
  } 
    const [carrito, setCarrito] = useState(true);

  const disable = ()=>{
      (user.token)?setCarrito(false):setCarrito(true)
  }   
  const salir = ()=>{
      setUser({});
      setDetails({});
      navigate("/");
  }
  useEffect(() => {
     disable();
  }, [])

    return (
        <div className="w-25 d-flex flex" id="nav_gen">
        <Button variant="secondary" onClick={handleShowCanasta} disabled={carrito} className="m-1">
          <i className="fas fa-shopping-cart "></i>  
        </Button>
        <p id="badge">{canasta.lenght}</p>
        <Offcanvas
          className="w-25"
          show={showCanasta}
          onHide={handleCloseCanasta}
          key="2"
          placement="end"
          name="canasta"
        >
          <Offcanvas.Header id="" closeButton>
            <Offcanvas.Title id="canasta_titulo">
              Tu canasta
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Dropdown.Divider />
          <Offcanvas.Body>
            <>
              <ListaCanasta />
            </>
            
          </Offcanvas.Body>
          
        </Offcanvas>
        {
            (!user.token)?(<Button variant="primary" className="m-1">
            <Link to="/login"  className="text-dark border-light"><b>Ingresa</b></Link>
          </Button>):(<NavDropdown title={details.first_name.slice(0,1)} id="basic-nav-dropdown">
            
          <NavDropdown.Item><Link to="/mi_cuenta">Mi cuenta</Link></NavDropdown.Item>
          {(details.role=='ADMIN')? <NavDropdown.Item><Link to="/nuevo_producto">Agregar Productos</Link></NavDropdown.Item>:null}
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={salir}>Cerrar sesión</NavDropdown.Item>
        </NavDropdown>)
        }
        
      </div>
    )
}
