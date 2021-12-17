import React, { useState } from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Button,
  Offcanvas,
  Dropdown,
  NavDropdown,
} from "react-bootstrap";
import logo from "../images/logo.png";
import logo2 from "../images/logo2.png";
import { Link } from "react-router-dom";
import "../App.css";
import Carrito from "./Carrito";

export default function Nav_general() {

  const [showBarra, setShowBarra] = useState(false);
  const handleCloseBarra = () => setShowBarra(false);
  const handleShowBarra = () => setShowBarra(true);

  return (
    <div>
      <Navbar bg="light" expand={false}>
        <Container>
          <div className="w-25 d-flex">
            <Navbar.Toggle onClick={handleShowBarra} />
            <Offcanvas
              className="w-25"
              show={showBarra}
              onHide={handleCloseBarra}
            >
              <Offcanvas.Header closeButton>
              <Link to="/">
                <Offcanvas.Title
                  id="offcanvasNavbarLabel1"
                  className="d-flex justify-content-center"
                >
                  <img src={logo2}alt="logo2" className="w-50 ps-2" />
                </Offcanvas.Title>
                </Link>
              </Offcanvas.Header>
              <Dropdown.Divider />
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Item id="seccion" className="text-black">
                    Marcas
                  </Nav.Item>
                  <ul id="opciones">
                    <li id="opcion">
                      <Link to="/marca/APPLE">Apple</Link>
                    </li>
                    <li id="opcion">
                      <Link to="/marca/SAMSUNG">Samsung</Link>
                    </li>
                    <li id="opcion">
                      <Link to="/marca/HUAWEI">Huawei</Link>
                    </li>
                    <li id="opcion">
                      <Link to="/marca/XIAOMI">Xiaomi</Link>
                    </li>
                  </ul>
                  <NavDropdown title="Tamaños" id="seccion">
                    <ul id="opciones">
                      <li id="opcion">
                        <Link to="/tamano/5.5">5.5 - 6 pulgadas</Link>
                      </li>
                      <li id="opcion">
                        <Link to="/tamano/6">6 - 6.5 pulgadas</Link>
                      </li>
                      <li id="opcion">
                        <Link to="/tamano/6.5">6.5 - 7 pulgadas</Link>
                      </li>
                    </ul>
                  </NavDropdown>
                  <NavDropdown title="Memoria Interna" id="seccion">
                    <ul id="opciones">
                      <li id="opcion">
                        <Link to="/memoria/32" >
                          32GB
                        </Link>
                      </li>
                      <li id="opcion">
                        <Link to="/memoria/64" >
                          64GB
                        </Link>
                      </li>
                      <li id="opcion">
                        <Link to="/memoria/128" >
                          128GB
                        </Link>
                      </li>
                    </ul>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Offcanvas>
            <div id="logo">
              <Link to="/">
              <img src={logo} alt="logo" className="w-100 ms-3" />
              </Link>
            </div>
          </div>
          <Form className="d-flex px-4">
            <FormControl
              type="search"
              placeholder="Buscar en Mobilia"
              className="me-1 content"
              aria-label="Search"
              id="busqueda"
            />
            <Button variant="outline-primary">
              <i className="fas fa-search"></i>
            </Button>
          </Form>
         <Carrito/>
        </Container>
      </Navbar>
    </div>
  );
}
