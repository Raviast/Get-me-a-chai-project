import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export const config = {
  api: {
    bodyParser: false, // Disable body parser for custom middleware handling
    externalResolver: true, // Ensures Next.js doesn't cache CORS responses
  },
};

// CORS middleware function
function setCors(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.status(204).end(); // Handle preflight request
    return true; // Skip further processing
  }

  return false; // Continue request handling
}

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
    async signIn({ user, account }) {
      if (account.provider === "github") {
        await connectDb();
        const existingUser = await User.findOne({ email: user.email });
        if (!existingUser) {
          await User.create({
            email: user.email,
            username: user.email.split("@")[0],
          });
        }
        return true;
      }
      return false;
    },
    async session({ session }) {
      await connectDb();
      const dbUser = await User.findOne({ email: session.user.email });
      if (dbUser) session.user.name = dbUser.username;
      return session;
    },
  },
};

export default async function handler(req, res) {
  // Apply CORS middleware
  if (setCors(req, res)) return;

  // Handle NextAuth
  return NextAuth(authOptions)(req, res);
}
