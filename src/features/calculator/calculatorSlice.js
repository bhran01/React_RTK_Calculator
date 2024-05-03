import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    result: 0,
    leftValue: '',
    operator: '',
    rightValue: ''
}

const calculatorSlice = createSlice(
    {
        name: 'calculator',
        initialState,
        reducers: {
            number: (state, action) => {
                if (state.operator === '') {
                    state.leftValue += action.payload
                    state.result = state.leftValue;
                } else
                    state.rightValue += action.payload
                state.result = state.leftValue + state.operator + state.rightValue
            },
            setOperator(state, action) {
                state.operator = action.payload;
                state.result = state.leftValue + state.operator;
            },
            result: (state) => {
                const { leftValue, rightValue, operator } = state;
                let result;
                switch (operator) {
                    case '+':
                        result = parseFloat(leftValue) + parseFloat(rightValue);
                        break;
                    case '-':
                        result = parseFloat(leftValue) - parseFloat(rightValue);
                        break;
                    case '*':
                        result = parseFloat(leftValue) * parseFloat(rightValue);
                        break;
                    case '/':
                        result = parseFloat(leftValue) / parseFloat(rightValue);
                        break;
                    default:
                        return 'ignore';
                }
                return { ...initialState, result: result }
            },
            clear: () => {
                return initialState
            }
        }
    }
);

export const { number, setOperator, result, clear } = calculatorSlice.actions;
export const selectCount = (state) => {
    return state.calculator.result;
}
export default calculatorSlice.reducer;
