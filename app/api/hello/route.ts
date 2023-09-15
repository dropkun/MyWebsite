import { NextResponse, NextRequest } from 'next/server';

export async function GET(request: Request ){
    console.log("get request");
    return NextResponse.json({ message: 'Hello, world!' });
}