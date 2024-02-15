import { db } from "@/db/db";
import { game, gameRoom } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";


export async function POST(req:Request) {
  const {gameid,useremail} = await req.json()
  try {
    const result = await db.select().from(gameRoom).where(eq(gameRoom.gameId,gameid))
    const _user = result.find((user)=> user.userEmail === useremail && user.gameId === gameid)
    if (_user )
    return NextResponse.json({message:"user exists"})


    if (result.length > 5 ) 
    return NextResponse.json({message:"room filled"}) 

    await db.insert(gameRoom).values({
        gameId: gameid,
        userEmail: useremail
    })

    return NextResponse.json({ message:"okay"});
  } catch (error) {
    return NextResponse.json({ error ,message:"error"});
  }
}
    

export async function DELETE(req:Request, ) {
  const {id} = await req.json()
  try {
    await db.delete(gameRoom).where(eq(gameRoom.id,id))

    return NextResponse.json({ message:"okay"});
  } catch (error) {
    return NextResponse.json({ error ,message:"error"});
  }
}




export async function GET(req:Request, ) {
  try {

    const result = await db.select().from(gameRoom);


    

    return NextResponse.json({ message:"GET ROUTE API CALLED - GAME ROOM",result});
  } catch (error) {
    return NextResponse.json({ error ,message:"error"});
  }
}

