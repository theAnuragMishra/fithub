import { sql } from "@vercel/postgres";

const today = new Date();
const date = today.getDate();

async function postDate() {
  await sql`INSERT INTO user_date Dates`;
}
