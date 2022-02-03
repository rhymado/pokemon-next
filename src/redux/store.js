import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import reducers from "./reducers";

const enhancers = applyMiddleware(logger);
const store = createStore(reducers, enhancers);

export default store;
