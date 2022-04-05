import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    return await Auth(req, ev)
}

async function Auth(req: NextRequest, ev: NextFetchEvent) : Promise<NextResponse> {
    const token = req.cookies.access_token
    const user = JSON.parse(req.cookies.user)
    if (!token) {
        return NextResponse.redirect('/login')
    }

    if(user?.verified === "Waiting"){
        return NextResponse.redirect('/profile')
    }

    return NextResponse.next()
}