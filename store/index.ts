import { createStore, applyMiddleware, Store } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./reducers";

function bindMiddleware(middleware: any[]) {
  if (process.env.NODE_ENV !== "production") {
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

function makeStore() {
  const store = createStore(rootReducer, {}, bindMiddleware([]));

  return store;
}

export const wrapper = createWrapper(makeStore as any);
