import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css';
import authReducer from "./state/state";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {
  persistStore,
  persistReducer,
  FLUSH,//ALL DELETE
  REHYDRATE,//ACTION
  PERSIST,//DATA 
  PURGE,//PARTIAL DELETE
  PAUSE,
  REGISTER
} from "redux-persist";

import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';//like provider


const persistConfig = {key : "root",storage , version : 1};
const persistedReducer = persistReducer(persistConfig,authReducer)
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware)=> getDefaultMiddleware({
    serializableCheck:{
      ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
    }
  })
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistStore(store)}>
          <App />
        </PersistGate>

      </Provider>
    </Router>
    
  </React.StrictMode>,
)
