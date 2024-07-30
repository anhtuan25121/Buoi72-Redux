import { createSlice } from "@reduxjs/toolkit";
import { changeAge } from "./userSlice";

const initialState={
    student:{
        name:"Le Meo",
        math:3,
        pro: 6,
        dtb:0
    },
    rechecked: false
}
const studentSlice= createSlice({
    name:"student",
    initialState,
    reducers:{
        changeAVG(state){
            state.student.dtb=(state.student.math+state.student.pro)/2;
        },
        rechecked(state){
            state.checked = !state.checked
        }
    }
})

export const {rechecked, changeAVG} = studentSlice.actions
export default studentSlice.reducer;