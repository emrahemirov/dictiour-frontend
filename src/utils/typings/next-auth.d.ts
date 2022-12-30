import { UserRoles } from '@utils/enums';
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      accessToken?: string;
      username?: string;
      role?: UserRoles;
    };
  }
}
