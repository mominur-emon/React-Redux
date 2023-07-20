//4. store create

/* need to use store install redux package = npm install redux */

import { createStore } from "redux";
import counterReducer from "./services/reducers/counterReducer.jsx";

const store = createStore(counterReducer);

export default store;

/* after store ready then use to react so need install  package = npm install react-redux */
