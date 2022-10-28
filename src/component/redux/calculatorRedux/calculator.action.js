import { LOAD_ANS, LOAD_CLEAR, LOAD_BUTTONS, LOAD_BACKSPACE } from '../calculatorRedux/calculator.actionType.js';



export const LoadButtons = (number) => {
    return {
        type: LOAD_BUTTONS,
        payload: number
    }
}

export const LoadAns = (number) => {
    return {
        type: LOAD_ANS,
        payload: number
    }
}

export const LoadClear = (number) => {
    return {
        type: LOAD_CLEAR,
        payload: number
    }
}

export const LoadBackSpace = (number) => {
    return {
        type: LOAD_BACKSPACE,
        payload: number
    }
}