import { createSlice } from '@reduxjs/toolkit'

const Cartslice= createSlice({
    name:"cart",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggelMenu:(state)=>{
            state.isMenuOpen=(!state.isMenuOpen);
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
    }
})

export const{toggelMenu ,closeMenu}=Cartslice.actions;
export default Cartslice.reducer;