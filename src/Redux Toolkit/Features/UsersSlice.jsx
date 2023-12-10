import { createSlice } from "@reduxjs/toolkit";

const user ={
    name : 'zouir',
    prenom :'amrani',
    age:23,
    country:'MA'
}

export const userSlice =createSlice(
    {
        name:'user',
        initialState:user,
        reducers:{

        }
    }
)