import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../Features/UsersSlice";

//had lfunction hya li katkriyi lina store  o hya kadir liha lappel flblasa lib4iti tst3ml dak reducer lib4iti tst3ml 
export const store = configureStore(
{
    reducer:{
        user:userSlice
    }
}
)

