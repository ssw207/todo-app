import React from "react";
import ReactDOM from "react-dom";
// redux
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// redux thunk
import thunk from "redux-thunk";
// redux-devtools
import { composeWithDevTools } from "redux-devtools-extension";

import "./index.css";
import App from "./App";
import { toDoReducer } from "./reducers";

const store = createStore(
  toDoReducer,
  composeWithDevTools(applyMiddleware(thunk)) // redux가 redux-thunk와 redux-devtools를 동시에 사용하기 위함.
);

ReactDOM.render(
  // App이 redux의 store 객체를 전달받기 위함
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
