import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    return await Auth(req, ev)
}

async function Auth(req: NextRequest, ev: NextFetchEvent) : Promise<NextResponse> {
    const token = req.cookies.access_token
    if (token) {
        return NextResponse.redirect('/')
    }

    return NextResponse.next()
}