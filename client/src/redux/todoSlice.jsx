import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    tasks:[],
}

export const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        addNewTask: (state, action) =>{
            state.tasks.push({id: Date.now() + Math.random, task: action.payload , complete:false})
        },
        completeTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if(task){
                task.complete = !task.complete
            }
        },
        deleteTask: (state, action) =>{
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        }
    }
})

export const {addNewTask, completeTask, deleteTask} = todoSlice.actions

export default todoSlice.reducer