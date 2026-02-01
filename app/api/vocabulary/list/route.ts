import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/db";
import { VocabularyItem } from "@/models/VocabularyItem";



export async function GET(req: Request) {

    try{
        //connect to database
        await connectToDB();

        //Fetch data
        const allVocab = await VocabularyItem.find({}).sort({createdAt: -1})

        return NextResponse.json(allVocab,{status: 200})

    }catch(err){
        console.error(err);
        return NextResponse.json({message:"failed to fetch vocabular"}, {status: 500})
    }
}