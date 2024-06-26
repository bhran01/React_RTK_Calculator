import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "../features/calculator/calculatorSlice";

export const storeObj=configureStore({
    reducer:{
        calculator:calculatorReducer
    }
})