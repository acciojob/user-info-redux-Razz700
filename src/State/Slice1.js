import { createSlice } from "@reduxjs/toolkit";
export const Slice1=createSlice({
    name:'userinfo',
    initialState:{
        name:'',
        email:''
    },
   reducers:{
    setname:(state,action)=>{
        state.name=action.payload
    },
    setemail:(state,action)=>{
        state.email=action.payload
    }
   }
})
export const {setname,setemail}=Slice1.actions;
export default Slice1.reducer;