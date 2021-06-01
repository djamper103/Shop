import {combineReducers, createStore} from "redux"
import Login_reducer from './Reducer/Login-reducer'




let redusers=combineReducers({
    LoginPage:Login_reducer,
})

let store=createStore(redusers);


export default store;