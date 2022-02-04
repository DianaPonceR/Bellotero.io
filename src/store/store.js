import {combineReducers, createStore} from "redux";
import {calculatorReducer} from "../reducers/calculatorReducer";

const reducers = combineReducers({
    calculator: calculatorReducer
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)