import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../store/RootReducer";
import thunk from 'redux-thunk';


// export function configureStore(){
//     return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// }