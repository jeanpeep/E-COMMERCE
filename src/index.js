import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free";
import AppRoutes from "./AppRoutes";

ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById("root")
);
