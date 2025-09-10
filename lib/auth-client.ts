import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
    secret: process.env.BETTER_AUTH_SECRET
})

export const { signIn, signOut, signUp, useSession } = authClient