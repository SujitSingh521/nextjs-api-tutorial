// app/api/add/route.js

import { NextResponse } from "next/server";

export async function POST(request) {
  let data = await request.json();
  console.log(data);
  return NextResponse.json({ success: true, data});

  // return NextResponse.json({ success: true, data:data});
  // return NextResponse.json({ success: true, data: "yes" });
  // return NextResponse.json({ success: true, data: "yes", recevied: data });


}
