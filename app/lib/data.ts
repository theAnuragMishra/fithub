import { sql } from "@vercel/postgres";
import { unstable_noStore } from "next/cache";

const itemsPerPage = 6; //setting number of items per page

//fetching all exercises
export async function fetchExercises() {
  try {
    const data = await sql`SELECT * FROM exercises`;
    return data.rows;
  } catch (error) {
    throw new Error("failed to fetch exercises");
  }
}

//fetching a particular exercise
export async function fetchParticularExercise(x: string) {
  try {
    const data = await sql`SELECT * FROM exercises WHERE Id=${x}`;
    return data.rows;
  } catch (error) {
    throw new Error("failed to fetch exercises");
  }
}

//fetching exercises by body parts
export async function fetchExercisesByBodyPart(part: string) {
  try {
    const data = await sql`SELECT * FROM exercises WHERE Body_part=${part}`;
    return data.rows;
  } catch (error) {
    throw new Error("failed to fetch exercises");
  }
}

export async function fetchFilteredExercises(
  query: string,
  currentPage: number
) {
  unstable_noStore();
  const offset = (currentPage - 1) * itemsPerPage;

  try {
    const data = await sql`
      SELECT * FROM exercises WHERE
        name ILIKE ${`%${query}%`} OR
        body_part ILIKE ${`%${query}%`} OR
        target ILIKE ${`%${query}%`}
      LIMIT ${itemsPerPage} OFFSET ${offset}
    `;

    return data.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch exercises.");
  }
}

export async function fetchExercisesPages(query: string) {
  unstable_noStore();
  try {
    const count =
      await sql`SELECT COUNT(*) FROM exercises WHERE name ILIKE ${`%${query}%`} OR
        body_part ILIKE ${`%${query}%`} OR
        target ILIKE ${`%${query}%`}
  `;

    const totalPages = Math.ceil(Number(count.rows[0].count) / itemsPerPage);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of exercises.");
  }
}
