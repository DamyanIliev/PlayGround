import { createSlice } from "@reduxjs/toolkit";

const initialState = { count:0 }

export const counterSlice = createSlice({
    name:'counter',
    initialState,
    reducers:{
        increace: (state) =>{
            state.count += 1;
        },
        decreace: (state)=>{
            state.count -= 1
        },
        reset: (state)=>{
            state.count =0
        },
        increaceByInputVal: (state, action)=>{
            state.count = state.count + action.payload
        },
    }
})

export const {increace,decreace,reset,increaceByInputVal} = counterSlice.actions;

export default counterSlice.reducer