import { sql } from "@vercel/postgres";

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
