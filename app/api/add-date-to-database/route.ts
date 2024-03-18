import { sql } from "@vercel/postgres";
import { auth } from "@/auth";

function getTodayDate() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const dd = String(today.getDate()).padStart(2, "0");
  return yyyy + "-" + mm + "-" + dd;
}

const todayDate = getTodayDate();
// console.log(typeof todayDate);
export async function POST() {
  const session = await auth();

  await sql`
  UPDATE user_data
  SET dates = array_append(COALESCE(dates::date[], ARRAY[]::date[]), ${todayDate})
  WHERE email = ${session?.user?.email} AND NOT (${todayDate} = ANY(dates));
`;

  return Response.json({ message: "date added successfully!" });
}
