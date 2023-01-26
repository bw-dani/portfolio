import * as React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./Styles/global.scss";

import App from "./App";
import ThemeWrapper from "./components/Theme/Wrapper";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ThemeWrapper>
);
