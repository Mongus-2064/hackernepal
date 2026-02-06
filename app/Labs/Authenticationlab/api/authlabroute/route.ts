import { db } from "@/Lib/db";
import { NextResponse } from "next/server";

export async function POST(req:Request){
try {
    await db();
    const body = await req.json();
    const {username , password} =body;



    
    if (!username || !password)
    {
        return NextResponse.json({err:"Please fill all fields"},{status:400});
    }


    const vulname = "nabin";
    const vulpass = "nabin123"

 if(username !== vulname )
    {
        return NextResponse.json({err:"User doesnot Exist"},{status:401});
    }

    if (password !== vulpass)
    {
        return NextResponse.json({err:"Inavlid password"},{status:401});
    }
    
    return NextResponse.json({success:`welcome ${vulname}`});

   
    

} catch (error) {
    return NextResponse.json({err:"Internal Server Error",error}, {status:500});
}
}