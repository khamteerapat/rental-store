
import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthOptions } from "next-auth"
import { authenticate } from "@/app/api/authService"

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
          name: 'credentials',
          credentials: {
            username: { label: "Username", type: "text" },
            password: { label: "Password", type: "password" }
          },
          async authorize (credentials, req) {
            if (typeof credentials !== "undefined") {
              const res = await authenticate({ username: credentials.username, password: credentials.password })
              if (typeof res !== "undefined") {
                return { ...res.data.user_information, accessToken: res.data.token }
              } else {
                return null
              }
            } else {
              return null
            }
          }
        })
      ],
      callbacks: {
        async jwt({ token, user }) {
          if(user) {
            token.accessToken = user.accessToken
          }
          return token
        },
        async session({ session, token, user }) {

            session.accessToken = token.accessToken as string;

          return session
        }
      },
      pages: {
        signIn: '/login'
      },
      session: { strategy: "jwt" }
}