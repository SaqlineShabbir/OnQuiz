import { NextResponse, NextRequest } from 'next/server';
;

export async function middleware(request) {
    const path = request.nextUrl.pathname;
    const isPublicPath = path === '/login' || path === '/signup' || path === '/';
    const accessToken = request?.cookies.get('accessToken')?.value || '';
    const admin = request.cookies.get('Admin')?.value || '';
    const restricted = path === '/quizboard/manage-category' || path === '/quizboard/add-category' || path === '/quizboard/add-question' || path == '/quizboard/make-admin'


    const onlyPublicPath = path === '/login' || path === '/signup'

    if (onlyPublicPath && accessToken) {
        return NextResponse.redirect(new URL('/', request.nextUrl))
    }

    if (!isPublicPath && !accessToken) {
        // User is not authenticated and trying to access a private path
        return NextResponse.redirect(new URL('/login', request.nextUrl).toString());
    }
    if (restricted && !admin) {
        // User is not authenticated and trying to access a private path
        return NextResponse.redirect(new URL('/quizboard', request.nextUrl).toString());
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
        '/quizboard/manage-category',
        '/quizboard/add-category',
        '/quizboard/add-question',
        '/quizboard/make-admin'



    ],
};