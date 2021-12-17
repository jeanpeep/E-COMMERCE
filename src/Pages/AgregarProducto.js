import React, { useContext, useState } from 'react'
import { Button, Col, Container, Dropdown, Form, Toast } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

import logo from "../images/logo.png";
import loginlogo from "../images/loginlogo.jpg";
import { DetailContext, UserContext } from '../Context';
import axios from 'axios';

export default function AgregarProducto() {
    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    const {user} = useContext(UserContext)
    const {details, setDetails} = useContext(DetailContext)

    const registrarProducto = ()=>{
        alert(user.token)
        const product_name = document.getElementById("product_name").value;
        const description = document.getElementById("description").value;
        const price = document.getElementById("price").value;
        const category = "Electronics";
        const brand= "JP".concat(" ",document.getElementById("brand").value);
        const sku = document.getElementById("sku").value;
        const image = document.getElementById("image").value;
        var data = JSON.stringify({
            "product_name": product_name,
            "description": description,
            "price": price,
            "category": category,
            "brand": brand,
            "sku": sku,
            "image": image
          });
          
          var config = {
            method: 'post',
            url: 'https://ecomerce-master.herokuapp.com/api/v1/item',
            headers: { 
              'Authorization': `JWT ${user.token}`, 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
          .then(function (response) {
            navigate(`/producto/${response.data._id}`);
            ;
          })
          .catch(function (error) {
            console.log(error);
            setShow(true);
          });
    }

    return (
        <div>
            <div className="h-50">
        <div className="d-flex align-items-center" id="">
          <Link to="/">
            <i class="fas fa-long-arrow-alt-left fs-4">Volver</i>
          </Link>
          <div id="logologin">
            <img src={logo} alt="Logo" id="logologin2" />
          </div>
        </div>
        <Dropdown.Divider />
        <Container className="d-flex flex-row flex-wrap-reverse">
          <div>
            <img
              src="https://mightygadget.co.uk/wp-content/uploads/2020/01/mobile-gaming-1-2048x1346.webp"
              alt="Login"
              style={{ height: "400px", width: "540px" }}
            />
          </div>
          <div className="flex-column">
            <div
              style={{ margin: "30px", "padding-left": "100px" }}
              className="d-flex flex-column"
            >
              <h1>INGRESAR PRODUCTO</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  id="product_name"
                  placeholder="Nombre del producto"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  id="description"
                  placeholder='Tamaño en pulgadas (5.5" - 7")'
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  id="price"
                  placeholder='Precio'
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  id="brand"
                  placeholder='Marca'
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  id="sku"
                  placeholder='Memoria (32-64-128 GB)'
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="text"
                  id="image"
                  placeholder='Imagen del producto'
                />
              </Form.Group>
              <Button variant="primary" onClick={registrarProducto}>
                Registrar
              </Button>
              <br />
              
            </div>
            <Col xs={6}>
              <Toast
                onClose={() => setShow(false)}
                show={show}
                delay={6000}
                bg="secondary"
                autohide
              >
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Ingreso incorrecto</strong>
                </Toast.Header>
                <Toast.Body>
                  Datos ingresados son incorrectos
                </Toast.Body>
              </Toast>
            </Col>
          </div>
        </Container>
      </div>
        </div>
    )
}
