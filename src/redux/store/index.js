import { createStore, applyMiddleware, compose } from "redux";
import reducers from "../reducers";
import promise from "redux-promise-middleware";

import logger from "redux-logger";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  storeEnhancers(applyMiddleware(promise, logger))
);

export default store;
