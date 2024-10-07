import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";

export const {handlers : {GET, POST}, auth, signIn} = NextAuth({
    pages: {
        signIn: '/i/flow/login',
    },
    providers: [
      credentials({
            credentials: {
              username: { label: "Username" },
              password: { label: "Password", type: "password" },
            },          
            async authorize(credentials) {
              const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
                method: 'POST',
                body: JSON.stringify({
                  id: credentials?.username,
                  password: credentials?.password
                }),
                headers: { "Content-Type": "application/json" }
              })
              const user = await res.json()
              if(!res.ok) return null
              if (res.ok && user) {
                return {
                  id: user.id,
                  name: user.nickname,
                  image: user.image,
                  ...user,
                }
              }
            }
        })
    ]
});
