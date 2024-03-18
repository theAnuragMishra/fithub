import { sql } from "@vercel/postgres";
import { auth } from "@/auth";
import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: Request) {
  const session = await auth();
  const data = await req.json();
  await sql`UPDATE user_data
SET weight = ${data.value}
 WHERE email = ${session?.user?.email}`;

  return Response.json({ message: "updated successfully!" });
}
