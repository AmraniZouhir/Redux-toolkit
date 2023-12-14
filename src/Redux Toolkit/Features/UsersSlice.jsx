import { createSlice } from "@reduxjs/toolkit";

const user ={
    name : 'zouir',
    prenom :'amrani',
    age:23,
    country:'MA'
}
// daba hna kan9smo les action li3dna fkola component  matalan (add delete update) f reducers kanhto tretmont dyal kola action 
 const userSlice =createSlice(
    {
        name:'user',
        initialState:user,
        reducers:{
            user:{
                resetUser:(state)=>{

                },
                updateUser:(state)=>{
                    
                }
            }
        }
    }
)
export default userSlice.reducer