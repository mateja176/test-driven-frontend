import * as React from "react";
import { render } from "react-dom";
import App from "./App";

const renderApp = () => render(<App />, document.querySelector(".app"));

renderApp();
