import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
    baseURL: process.env.NEXT_PUBIC_ENDPOINT,
    secret: process.env.BETTER_AUTH_SECRET
})

export const { signIn, signOut, signUp, useSession } = authClient