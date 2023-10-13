import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import RootStore from './store';
import Users from './mock/users';

const store = RootStore.create({
  users: Users,
  isModal: false
})

export const StoreContext = createContext(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StoreContext.Provider value={store}>
    <App />
  </StoreContext.Provider>
);
