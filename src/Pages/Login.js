import React, { useContext, useState } from "react";
import {
  Button,
  Col,
  Container,
  Dropdown,
  Form,
  Toast,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import loginlogo from "../images/loginlogo.jpg";
import axios from "axios";
import { DetailContext, UserContext } from "../Context";

export default function Login() {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const {details, setDetails} = useContext(DetailContext)

  React.useEffect(()=>{
    const ema = localStorage.getItem("email");
    const pas = localStorage.getItem("password");
    if(ema&&pas){
      document.getElementById("email").value=(JSON.parse(ema));
      document.getElementById("password").value=(JSON.parse(pas))
    }
  },[]);
  const handleLogin = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    if (email && password) {
      var data = JSON.stringify({
        email: email,
        password: password,
      });

      var config = {
        method: "post",
        url: "https://ecomerce-master.herokuapp.com/api/v1/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          var token = response.data.token;
          setUser(response.data);
          localStorage.setItem('email',JSON.stringify(email));
        localStorage.setItem('password',JSON.stringify(password));
          var data = '';
          var config = {
                method: 'get',
                url: 'https://ecomerce-master.herokuapp.com/api/v1/user/me',
                headers: {
                  'Authorization': `JWT ${token}`
                },
                data: data
              };
          axios(config)
            .then(function (response) {
             setDetails(response.data.user);
             navigate("/", { replace: true });
             }).catch(function (error) {
             console.log(error);
             })})
            .catch(function (error) {
             console.log(error);
             setShow(true);
            })
        } else {
          setShow(true);
        }
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
              src={loginlogo}
              alt="Login"
              style={{ height: "400px", width: "500px" }}
            />
          </div>
          <div className="flex-column">
            <div
              style={{ margin: "30px", "padding-left": "100px" }}
              className="d-flex flex-column"
            >
              <h1>INICIAR SESIÓN</h1>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  id="email"
                  placeholder="Correo electrónico"
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  id="password"
                  placeholder="Contraseña"
                />
              </Form.Group>
              <Button variant="primary" onClick={handleLogin}>
                Ingresar
              </Button>
              <br />
              <h7>
                ¿Aún no te has registrado?{" "}
                <span>
                  <Link to="/signup" className="text-primary">
                    Registrate aquí
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
                  <strong className="me-auto">Ingreso incorrecto</strong>
                </Toast.Header>
                <Toast.Body>
                  El usuario y/o la contraseña son incorrectas
                </Toast.Body>
              </Toast>
            </Col>
          </div>
        </Container>
      </div>
    );
  }
