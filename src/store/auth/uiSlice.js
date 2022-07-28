import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'checking',
        user:{},
        erroMenssage: undefined
    },
    reducers: {
        checking: (state) =>{
            state.status = 'checking';
            state.user = {};
            state.erroMenssage = undefined;
        },
        onLogin: (state, {payload}) =>{
            state.status = 'authenticated';
            state.user = payload;
            state.erroMenssage = undefined;
        }
    }
});


// Action creators are generated for each case reducer function
export const { checking, onLogin } = authSlice.actions;

