import { createSlice } from '@reduxjs/toolkit'

const Cartslice= createSlice({
    name:"cart",
    initialState:{
        isMenuOpen:true,
        name:"honeysing",
    },
    reducers:{
        toggelMenu:(state)=>{
            state.isMenuOpen=(!state.isMenuOpen);
        },
        closeMenu:(state)=>{
            state.isMenuOpen=false;
        },
        setname:(state,action)=>{
            state.name=action.payload;
        }
    }
})

export const{toggelMenu ,closeMenu,setname}=Cartslice.actions;
export default Cartslice.reducer;