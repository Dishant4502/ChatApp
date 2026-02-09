import {create} from 'zustand';

export const useAuthStore = create((set) => ({
    authUser: { name: 'John', _id: 123, age: 25},
    isLoggedIn: false,
    isLoading: false,

    Login: () => {
        console.log('Login function called');   
        set({isLoggedIn: true, isLoading:true});
    },
}));