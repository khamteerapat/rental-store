import { withAuth } from "next-auth/middleware"


export default withAuth(
  function middleware (req) {
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (req.nextUrl.pathname.startsWith('/api/auth')) {
            return true
          }
  
          if (req.nextUrl.pathname === '/login') {
            return true
          }
  
          return !!token
      }
    },pages: {
        signIn: "/login" 
      }
  }
)