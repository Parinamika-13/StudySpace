import CredentialsProvider from "next-auth/providers/credentials";
import connectDB from "@/lib/db";
import User from "@/models/User";

export const authOptions = {
    secret: process.env.AUTH_SECRET || "changeme_dev_secret",
    providers: [
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                await connectDB();

                if (!credentials?.email || !credentials?.password) {
                    return null;
                }

                const user = await User.findOne({ email: credentials.email }).select("+password");

                if (!user) {
                    return null;
                }

                if (credentials.password !== user.password) {
                    return null;
                }

                return { id: user._id.toString(), name: user.name, email: user.email, image: user.image };
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        async session({ session, token }) {
            if (token && session.user) {
                session.user.id = token.sub;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.sub = user.id;
            }
            return token;
        }
    },
    session: {
        strategy: "jwt",
    },
};
