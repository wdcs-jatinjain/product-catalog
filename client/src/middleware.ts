import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname
  console.log("🚀 ~ middleware ~ path:", path)

  const isPublicPath = path === '/login' || path === '/register' || path === '/'
  const token = cookies().get('token') || ''
  console.log("🚀 ~ middleware ~ token:", token)


  if(isPublicPath && token) {
    console.log('if')
    return NextResponse.redirect(new URL('/home', request.nextUrl))

  }
  else if (isPublicPath && !token){
    console.log('else if')
    return NextResponse.redirect(new URL('login', request.nextUrl))
  }
  else if (!isPublicPath && !token) {
    console.log('else if 2')

    return NextResponse.redirect(new URL('/register', request.nextUrl))
  }

}
//if the Customer is havng Token then he should not redirect to the Following Paths-
export const config = {
  matcher: [
     '/', '/register',
  ]
}
