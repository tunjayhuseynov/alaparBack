import { NextFetchEvent, NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
	return await Auth(req, ev);
}

async function Auth(req: NextRequest, ev: NextFetchEvent): Promise<NextResponse> {
	if (req.cookies.business_user && req.nextUrl.pathname.includes('/business/create')) {
		return NextResponse.redirect('/profile/business');
	}
	return NextResponse.next();
}
