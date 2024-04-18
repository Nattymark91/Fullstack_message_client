import React, {createContext, StrictMode} from 'react';
import { createRoot } from "react-dom/client";
import App from './App';
import UserStore from "./store/UserStore";
import AnswerStore from "./store/AnswerStore";

export const Context = createContext(null)

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Context.Provider value={{
        user: new UserStore(),
        answer: new AnswerStore()
    }}>
        <App />
    </Context.Provider>,
    </StrictMode>
);