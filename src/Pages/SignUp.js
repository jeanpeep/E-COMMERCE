import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Container, Dropdown, Form, Toast } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import signuplogo from "../images/signuplogo.jpg";
var qs = require("qs");

export default function SIgnup() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = () => {
    var first_name=document.getElementById("first_name").value;
    var last_name = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var data = qs.stringify({
      "first_name":first_name,
      "last_name": last_name,
      "email": email,
      "password": password
    });
    
    var config = {
      method: 'post',
      url: 'https://ecomerce-master.herokuapp.com/api/v1/signup',
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      navigate("/", { replace: true });
    }).catch((er)=>{
      setShow(true);
    })
    
  };

  return (
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
            src={signuplogo}
            alt="Login"
            style={{ height: "400px", width: "550px" }}
          />
        </div>
        <div className="flex-column">
          <div
            style={{ margin: "30px", "padding-left": "100px" }}
            className="d-flex flex-column"
          >
            <h1>REGÍSTRATE</h1>
            <Form.Group className="mb-3" >
              <Form.Control type="text" id="first_name" placeholder="Nombre" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Control type="text" id="last_name" placeholder="Apellido" />
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Control type="email" id="email" placeholder="Correo electrónico" />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Control type="password" id="password" placeholder="Contraseña" />
            </Form.Group>

            <Button variant="primary" onClick={handleSignUp}>
              Ingresar
            </Button>
            <br />
            <h7>
              ¿Ya tienes una cuenta?{" "}
              <span>
                <Link to="/login" className="text-primary">
                  Inicia sesión aquí
                </Link>
              </span>
            </h7>
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
                <strong className="me-auto">Registro incorrecto</strong>
              </Toast.Header>
              <Toast.Body>
                El nombre,el apellido, el correo y/o la contraseña son incorrectas
              </Toast.Body>
            </Toast>
          </Col>
        </div>
      </Container>
    </div>
  );
}
