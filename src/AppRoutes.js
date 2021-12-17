import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Loading from "./components/Loading";
import {
  CanastaContext,
  DetailContext,
  ProductContext,
  UserContext,
} from "./Context";
import AgregarProducto from "./Pages/AgregarProducto";
import Login from "./Pages/Login";
import Marca from "./Pages/Marca";
import Memoria from "./Pages/Memoria";
import MiCuenta from "./Pages/MiCuenta";
import Noencontrado from "./Pages/Noencontrado";
import Producto from "./Pages/Producto";
import Signup from "./Pages/SignUp";
import Tamaño from "./Pages/Tamaño";
var axios = require("axios");

export default function AppRoutes() {
  const [productList, setProductList] = useState();
  const [user, setUser] = useState({});
  const [canasta, setCanasta] = useState([]);
  const [details, setDetails] = useState({});

  useEffect(() => {
    var config = {
      method: "get",
      url: "https://ecomerce-master.herokuapp.com/api/v1/item",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        var dat = response.data;
        var prod = [];
        dat.forEach((el) => {
          if (el.brand) {
            if (el.brand.includes("JP ")) {
              var precio = el.price.toString().replace(".", "");
              el.price = parseInt(precio);
              prod.push(el);
            }
          }
        });
        prod = prod.sort(() => Math.random() - 0.5);
        setProductList(prod);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <ProductContext.Provider value={{ productList, setProductList }}>
      <UserContext.Provider value={{ user, setUser }}>
        <CanastaContext.Provider value={{ canasta, setCanasta }}>
          <DetailContext.Provider value={{ details, setDetails }}>
            <Routes>
              <Route path="/" element={productList ? <App /> : <Loading />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route
                path="/marca/:id"
                element={productList ? <Marca /> : <Loading />}
              />
              <Route
                path="/tamano/:id"
                element={productList ? <Tamaño /> : <Loading />}
              />
              <Route
                path="/memoria/:id"
                element={productList ? <Memoria /> : <Loading />}
              />
              <Route
                path="/producto/:id"
                element={productList ? <Producto /> : <Loading />}
              />
              {(details.role=="ADMIN")?<Route path="/nuevo_producto" element={<AgregarProducto/>}/>:null}
              {(details)?<Route path="/mi_cuenta" element={<MiCuenta/>}/>:null}
              <Route path="/*" element={<Noencontrado/>}/>
            </Routes>
          </DetailContext.Provider>
        </CanastaContext.Provider>
      </UserContext.Provider>
    </ProductContext.Provider>
  );
}
