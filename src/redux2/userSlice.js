import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user:{
        name: "Le Meo",
        age:3
    },
    length:3
}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers :{
        changeName(state, aciton){
            state.user.name = aciton.payload
        },
        changeAge(state, action){
            state.user.age = action.payload
        }
    }
})
export const {changeAge, changeName} = userSlice.actions
export default userSlice.reducer;