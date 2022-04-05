import { base } from '@/Constructions/const'
import { NextFetchEvent, NextRequest, NextResponse } from 'next/server'
import date from 'date-and-time';

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
    return await Auth(req, ev)
}

async function Auth(req: NextRequest, ev: NextFetchEvent) : Promise<NextResponse> {
  if(!req.cookies.access_token){
    const result = await fetch(base+"/api/auth/updatetoken", {
      headers: {
        "Cookie": Object.entries(req.cookies).map(([k, v]) => `${k}=${v}`).join(";")
      }
    })
    const next = NextResponse.next()
    
    if(result.ok){
      const data = await result.json(); 
      
      next.cookie("access_token", data.access_token, {expires: date.addMinutes(new Date(), 30)})
      next.cookie("refresh_token", data.refresh_token, {expires: date.addDays(new Date(), 14)})
      next.cookie("user", data.userData, {expires: date.addMinutes(new Date(), 30)})
    }
    return next     
  }
}