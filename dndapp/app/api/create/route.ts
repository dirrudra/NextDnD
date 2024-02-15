import { db } from "@/db/db";
import { game } from "@/db/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";


export async function POST(req:Request) {
  const {imageurl,story,name,rules,createdby} = await req.json()
  try {

    const _game = await db.select().from(game).where(eq(game.name,name))
    if (_game.length > 0) 
    {
      return NextResponse.json({message:"game exists"})
    }

   const result = await db.insert(game).values({
      name: name,
      imageUrl: imageurl,
      story: story,
      updatedAt: new Date(),
      rules: rules,
      createdByEmail: createdby
    
    }).returning({id:game.id})




    return NextResponse.json({ message:"okay",result});
  } catch (error) {
    return NextResponse.json({ error ,message:"error"});
  }
}
    

export async function DELETE(req:Request, ) {
  const {id} = await req.json()
  try {
    await db.delete(game).where(eq(game.id,id))

    return NextResponse.json({ message:"okay"});
  } catch (error) {
    return NextResponse.json({ error ,message:"error"});
  }
}


export async function PUT(req:Request, ) {
  const {imageurl,story,rules,id} = await req.json()
  try {
    await db.update(game).set({imageUrl:imageurl,story:story,rules:rules}).where(eq(game.id,id))

    return NextResponse.json({ message:"okay"});
  } catch (error) {
    return NextResponse.json({ error ,message:"error"});
  }
}


export async function GET(req:Request, ) {
  try {
    const result = await db.select().from(game);

    

    return NextResponse.json({ message:"GET ROUTE API CALLED - CREATE",result});
  } catch (error) {
    return NextResponse.json({ error ,message:"error"});
  }
}

