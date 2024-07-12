import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name:"modal",
    initialState:{
        open:false,
        type:"addProduct",
        defaultData:{},
    }, 
    reducers:{
        preferModal(state, {payload}){
            const {type, datas} = payload
            state.type = type
            state.defaultData = datas || {}
            console.log(payload);
            state.open = true
        },
        closeModal(state){
            state.open = false
        },
    }
})

export default modalSlice