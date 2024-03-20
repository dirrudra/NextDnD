import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
       //@ts-ignore

      async authorize(credentials) {
       //@ts-ignore

        const { email, password } = credentials;


          if (email==='admin@gmail.com' &&password==='admin@gmail.com')
          {
            return {id:1,email,password:password};
          }
          else{
            return null;
          }
       


      }
    })
  ],
  
  pages: {
    signIn: '/login', 
    error:'/login',
    signOut:'/login'

  },
  
secret: process.env["NEXTAUTH_SECRET"] ,


  
};


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }