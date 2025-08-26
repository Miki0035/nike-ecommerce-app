import { email } from "better-auth";
import { create } from "zustand";

interface User {
    email: string;
    isVerified: boolean;
    id: string;
    name: string;
    avatar: string | null;
    setUserEmail: (email: string) => void;
    setId: (id: string) => void;
    setIsVerified: (value: boolean) => void;
    setName: (value: string) => void;
}

export const useUserStore = create<User>((set) => ({
    email: "",
    isVerified: false,
    id: "",
    name: "",
    avatar: null,
    setUserEmail: (email) => (set({ email })),
    setId: (id) => (set({ id })),
    setIsVerified: (value) => (set({ isVerified: value })),
    setName: (name) => (set({ name }))
}))