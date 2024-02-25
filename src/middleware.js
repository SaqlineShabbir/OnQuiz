import { NextResponse, NextRequest } from 'next/server';
;

export async function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/signup' || path === '/';
    const accessToken = request?.cookies.get('accessToken')?.value || '';



    const onlyPublicPath = path === '/login' || path === '/signup'

    if (onlyPublicPath && accessToken) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }
    if (!isPublicPath && !accessToken) {
        // User is not authenticated and trying to access a private path
        return NextResponse.redirect(new URL('/login', request.nextUrl).toString());
    }

    // Continue processing if it's a public path or if the user has a valid accessToken
    return NextResponse.next()

}

export const config = {
    matcher: [
        '/',
        '/quizboard',
        '/login',
        '/signup',



    ],
};