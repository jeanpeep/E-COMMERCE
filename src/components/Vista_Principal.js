import React from "react";
import { Carousel, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../App.css";
export default function Vista_Principal() {
  return (
    <div>
      <Carousel id="carousel">
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100"
            src="http://i.mlcdn.com.br/portaldalu/fotosconteudo/49090.jpg"
            alt="First slide"
          />
          <Carousel.Caption >
            <Link to="marca/SAMSUNG">
            <div style={{ color: "darkblue" }}>
              <h3>¿Fan de Samsung?</h3>
              <p>Descubre más de sus nuevos equipos</p>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.blogs.es/ac161f/iphone-13-bronce-portada/1366_2000.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
          <Link to="marca/APPLE" >
          <div style={{ color: "darkblue" }}>
              <h3>¿Fan de Apple?</h3>
              <p>Descubre más de sus nuevos equipos</p>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.blogs.es/64a08d/xiaomi-mi-10i-oficial-diseno-especificaciones-caracteristicas-tecnicas/1366_2000.jpg"
            alt="Third slide"
          />
          <Carousel.Caption >
          <Link to="/marca/XIAOMI">
          <div style={{ color: "darkblue" }}>
              <h3>¿Fan de Xiaomi?</h3>
              <p>Descubre más de sus nuevos equipos</p>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://techcetera.co/wp-content/uploads/2019/10/smartphones_huawei_2019.jpg"
            alt="Fouth slide"
          />
          <Carousel.Caption >
          <Link to="/categoria/HUAWEI" >
              <div style={{ color: "darkblue" }}>
              <h3>¿Fan de Huawei?</h3>
              <p>Descubre más de sus nuevos equipos</p>
              </div>
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      
    </div>
  );
}
