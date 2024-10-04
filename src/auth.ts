import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"

const handler = NextAuth({
    pages: {
        signIn: '/i/flow/login',
    },
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
              username: { label: "Username", type: "text", placeholder: "jsmith" },
              password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
              const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, {
                method: 'POST',
                body: JSON.stringify({
                  id: credentials?.username,
                  password: credentials?.password
                }),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
        
              if (res.ok && user) {
                return user
              }
              return null
            }
        })
    ]
});

export { handler as GET, handler as POST }