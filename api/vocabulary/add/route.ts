import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { VocabularyItem } from "@/models/VocabularyItem";

export async function POST(req: Request) {
    try{
        const { term, type, meaning, example, source, tags, userId } =
        await req.json();

        if(!term || !meaning){
            return NextResponse.json({
                message: "Missing required fields"
            }, {status: 400})
        }

    await connectToDB();

    const newWord = await VocabularyItem.create({
        userId,
        term,
        type,
        meaning,
        example,
        source,
        tags,
    });

    return NextResponse.json(newWord,{status: 201});
    
    }catch(error){
       console.error( error) 
       return NextResponse.json(
        {message:"failed to create vocabulary item"},
        {status: 500}
       )
    }
}
