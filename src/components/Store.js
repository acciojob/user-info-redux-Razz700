import { configureStore } from "@reduxjs/toolkit";
import Slice1  from "../State/Slice1";

export default configureStore({
    reducer:{
        userinfo:Slice1
    }
})