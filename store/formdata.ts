import { create } from "zustand";


interface FormDataStore {
    fullname: string;
    setFullname: (fullname: string) => void;
    email: string;
    setEmail: (email: string) => void;
    password: string;
    setPassword: (password: string) => void;
    hidePassword: boolean;
    setHidePassword: () => void;
    error: string;
    setError: (value: string) => void
}

export const useFormDataStore = create<FormDataStore>((set) => ({
    fullname: "",
    email: "",
    password: "",
    hidePassword: true,
    error: "",
    setEmail: (email) => { set({ email }) },
    setPassword: (password) => { set({ password }) },
    setFullname: (fullname) => { set({ fullname }) },
    setHidePassword: () => { set(state => ({ hidePassword: !state.hidePassword })) },
    setError: (value) => set({ error: value })
}))