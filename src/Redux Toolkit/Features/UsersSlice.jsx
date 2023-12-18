import { createSlice } from "@reduxjs/toolkit";

const user ={
    name : 'zouir',
    prenom :'amrani',
    age:23,
    country:'ma'
}
// daba hna kan9smo les action li3dna fkola component  matalan (add delete update) f reducers kanhto tretmont dyal kola action 
 const userSlice =createSlice(
    {
        name:'user',
        initialState:user,
        reducers:{       
                resetUser:(state)=>{
                    state.name =undefined
                    state.prenom =undefined
                    state.age =undefined
                    state.country =undefined
                },
                updateUser:(state , action)=>{
                    console.log(state,action)
                    const {name , prenom ,age ,country} =action.payload
                    state.name =name
                    state.prenom =prenom
                    state.age =age
                    state.country =country
                }
            
        }
    }
 )
export const {resetUser,updateUser} =userSlice.actions
export default userSlice.reducer