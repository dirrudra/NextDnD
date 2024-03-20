import { db } from "@/db/db";
import { game, gameRoom, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';

async function comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    try {
        const match = await bcrypt.compare(plainPassword, hashedPassword);
        return match;
    } catch (error) {
        throw new Error('Error comparing passwords');
    }
}



export async function POST(req:Request) {
  const {email,password} = await req.json()

  try{
    const user = await db.select().from(users).where(eq(users.email,email))
    if (user)
    {
        const password_:string = user[0].password ||""
        if (await comparePasswords(password_, password))
        {
            return NextResponse.json({message:"okay",user:user[0].email})

        }
        else{
            return NextResponse.json({message:"password incorrect"})
        
        }

    }


  }

   catch (error) {
    return NextResponse.json({ error ,message:"error"});
  }
}
    

