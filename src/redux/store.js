import {createStore } from 'redux'
// import pizzaReducer from './pizza/pizzaReducer'
import userReducer from './user/userReducer'

export const store = createStore(userReducer)