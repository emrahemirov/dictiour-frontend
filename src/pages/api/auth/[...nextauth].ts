import { apiEndpoint } from '@utils/constants';
import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialProvider from 'next-auth/providers/credentials';

export default NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    CredentialProvider({
      type: 'credentials',
      credentials: {},
      async authorize(credentials: {
        email: string;
        password: string;
      }): Promise<any> {
        if (!credentials.email || !credentials.password) return null;

        const { data } = await axios.post(`${apiEndpoint}/auth/sign-in`, {
          email: credentials.email,
          password: credentials.password
        });

        if (!data) return null;

        const accessToken = data.replace('accessToken: ', 'Bearer ');

        return { accessToken };
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    jwt: async ({ token, user }) => {
      user && (token.user = user);
      return token;
    },
    session: async ({ session, token }) => {
      session.user = token.user;
      return session;
    }
  }
});
