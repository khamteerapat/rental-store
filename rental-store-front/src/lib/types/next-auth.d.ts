import { DefaultSession } from "next-auth";

declare module 'next-auth' {
    export interface Session extends DefaultSession {
      accessToken: string;
      refreshToken: string;
    }

    interface JWT extends DefaultJWT {
      accessToken: string;
      refreshToken: string;
    }

    interface User extends DefaultUser {
      accessToken: string;
    }
  }