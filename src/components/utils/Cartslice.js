import { createSlice } from '@reduxjs/toolkit'

const Cartslice= createSlice({
    name:"cart",
    initialState:{
        isMenuOpen:true,
    },
    reducers:{
        toggelMenu:(state)=>{
            state.isMenuOpen=(!state.isMenuOpen);
        }
    }
})

export const{toggelMenu}=Cartslice.actions;
export default Cartslice.reducer;