import React, { createContext, useContext, useReducer } from "react";
import reducers from "./reducers";

const initialState = {
  posts: [],
};

export const Context = createContext();

export const StateProvider = ({ children }) => (
  <Context.Provider value={useReducer(reducers, initialState)}>
    {children}
  </Context.Provider>
);

export const useStateValue = () => useContext(Context);
