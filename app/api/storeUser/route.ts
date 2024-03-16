import { sql } from "@vercel/postgres";
import { NextApiRequest, NextApiResponse } from "next";
import { auth } from "@/auth";
export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const session = await auth();

  if (!session) {
    res.status(401).json({ error: "Not authenticated" });
    return;
  }

  const userEmail = session!.user!.email;

  try {
    // fetching the user's email from the PostgreSQL table
    const data = await sql`SELECT * FROM user_data WHERE Email='${userEmail}'`;
    if (data.rows.length === 0) {
      try {
        await sql`INSERT INTO user_data (email) VALUES (${userEmail})`;
      } catch (error) {
        console.error("Error storing email:", error);
        res
          .status(500)
          .json({ error: "An error occurred while storing email" });
      }
    }

    res.status(200).json({ message: "Email stored successfully" });
  } catch (error) {
    console.error("Error retreiving user: ", error);
    res.status(500).json({ error: "An error occurred while retreiving user" });
  }
}
