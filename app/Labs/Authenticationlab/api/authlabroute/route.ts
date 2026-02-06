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

 if(username === "nabin" && password ==="nabin123")
    {
        return NextResponse.json({success:`welcome ${username}`},{status:200});
    }

    if (username === "nabin")
    {
        return NextResponse.json({err:"Inavlid password"},{status:400});
    }
    else{
        return NextResponse.json({err:"Invalid username"}, {status:400});
    }

   
    

} catch (error) {
    return NextResponse.json({err:"Internal Server Error",error}, {status:500});
}
}