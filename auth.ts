import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [Credentials({
    credentials: {
        email: {},
        password: {}
    },
    authorize(credentials) {
        console.log(credentials)
        return null;
    }
  })],
});