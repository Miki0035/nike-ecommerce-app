import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBIC_ENDPOINT
})

export const { signIn, signOut, signUp, useSession } = authClient