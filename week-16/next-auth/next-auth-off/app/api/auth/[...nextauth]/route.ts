import NextAuth from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({    
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                username: {
                    label: 'email', type: 'text', placeholder: 'username' },
                password: {
                    label: 'password', type: 'password', placeholder: 'password' }
                },
                async authorize(credentials: any) {

                return {
                    id: "user1",
                    name: "Aagja Krish",
                    email: "hello@gmail.com"
                }
            }
        })
    ],

    secret: process.env.NEXTAUTH_SECRET
})

export const GET = handler;
export const POST = handler;