import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), "data.csv"); // Adjust path if needed
    const fileContents = fs.readFileSync(filePath, "utf8");
    
    return new NextResponse(fileContents, {
      headers: {
        "Content-Type": "text/csv",
      },
    });
  } catch (error) {
    return new NextResponse("File not found", { status: 404 });
  }
}
