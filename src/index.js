import React from "react";
import ReactDom from "react-dom";

//Provider is a component
import {Provider} from "react-redux";

//createSore is a function
import {createStore} from "redux";

import App from "./components/App";
import reducers from "./reducers";


// the App has to be nested (passed as a child) to the Provider
//Provider takes in a single prop - store which is a result of calling a function createSore with reduces passed as and argument
ReactDom.render(
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>
    , document.querySelector("#root"));
//any component can get access to the redux store through the provider tag

