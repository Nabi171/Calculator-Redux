import { calculatorReDucer, CALCULATOR_KEY } from "./calculatorRedux/calculator.reducer";
import { combineReducers } from "redux";


let rootReducer = combineReducers({
    [CALCULATOR_KEY]: calculatorReDucer



})

export { rootReducer }