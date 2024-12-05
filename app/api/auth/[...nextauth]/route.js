import NextAuth from 'next-auth';
import GitHubProvider from "next-auth/providers/github";
import connectDb from '@/db/connectDb';
import User from '@/models/User';

// Auth options
export const authOptions = {
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    // Callback to handle user sign-in
    async signIn({ user, account }) {
      if (account.provider === "github") {
        await connectDb();

        // Check if the user already exists in the database
        const currentUser = await User.findOne({ email: user.email });
        if (!currentUser) {
          // Create a new user if they don't exist
          await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
        }

        return true; // Allow sign-in
      }

      return false; // Deny sign-in for other providers
    },

    // Callback to modify the session
    async session({ session, token }) {
      await connectDb();
      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.name = dbUser.username; // Add username to the session
      }

      return session; // Return the modified session
    },
  },
};

// Export NextAuth with authOptions
export default NextAuth(authOptions);

// Explicitly export HTTP methods for Next.js 13+
export const GET = NextAuth(authOptions);
export const POST = NextAuth(authOptions);
