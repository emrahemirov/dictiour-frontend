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
        username: string;
        password: string;
      }): Promise<any> {
        if (!credentials.username || !credentials.password) return null;

        const { data } = await axios.post(`${apiEndpoint}/auth/sign-in`, {
          username: credentials.username,
          password: credentials.password
        });

        if (!data) return null;

        let { accessToken, username, role } = data;

        accessToken = `Bearer ${accessToken}`;

        return { accessToken, username, role };
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user);
      return token;
    },
    async session({ session, token }) {
      session.user = token.user;
      return session;
    }
  }
});
