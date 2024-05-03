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
        initialState: initialState,
        reducers: {
            number: (state, action) => {
                if (state.operator === '') {
                    state.leftValue += action.payload
                } else
                    state.rightValue += action.payload
                    state.result=state.leftValue.concat(state.operator).concat(state.rightValue)
            },
            addition: (state) => {
                state.operator = "+"
                state.result=state.leftValue.concat(state.operator)
            },
            substraction: (state) => {
                state.operator = "-"
                state.result=state.leftValue.concat(state.operator)
            },
            multiplication: (state) => {
                state.operator = "*"
                state.result=state.leftValue.concat(state.operator)
            },
            division: (state) => {
                state.operator = "/"
                state.result=state.leftValue.concat(state.operator)
            },
            result:(state)=>{
                switch(state.operator){
                    case '+':
                            return {...state,result:parseFloat(state.leftValue) + parseFloat(state.rightValue),leftValue:'',rightValue:'',operator:''}
                    case '-':
                            return {...state,result:parseFloat(state.leftValue) - parseFloat(state.rightValue),leftValue:'',rightValue:'',operator:''}   
                    case '*':
                            return {...state,result:parseFloat(state.leftValue) * parseFloat(state.rightValue),leftValue:'',rightValue:'',operator:''}
                    case '/':
                            return {...state,result:parseFloat(state.leftValue) / parseFloat(state.rightValue),leftValue:'',rightValue:'',operator:''}
                }
            },
            clear:(state)=>{
                return {...state,result:0,leftValue:'',rightValue:'',operator:''}
            }
        }
    }
);

export const { number, addition, substraction, multiplication, division,result,clear } = calculatorSlice.actions;
export const selectCount = (state) => {
    return state.calculator.result;
}
export default calculatorSlice.reducer;
