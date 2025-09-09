import { NextRequest, NextResponse } from "next/server";
import { useUserStore } from "./store/user";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export async function middleware(req: NextRequest) {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    if (!session) {
        const signInUrl = new URL("/sign-in", req.url)
        return NextResponse.redirect(signInUrl)
    }
    return NextResponse.next();
}

export const config = {
    matcher: ['/products/:path*', '/profile/:path*']
}