import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { store } from "./redux/app/store";

import App from "./App";
import "./style.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
