import { sql } from "@vercel/postgres";

export async function fetchExercises() {
  try {
    const data = await sql`SELECT * FROM exercises`;
    return data.rows;
  } catch (error) {
    throw new Error("failed to fetch exercises");
  }
}

export async function fetchParticularExercise(x: string) {
  try {
    const data = await sql`SELECT * FROM exercises WHERE Id=${x}`;
    return data.rows;
  } catch (error) {
    throw new Error("failed to fetch exercises");
  }
}

export async function fetchExercisesByBodyPart(part: string) {
  try {
    const data = await sql`SELECT * FROM exercises WHERE Body_part=${part}`;
    return data.rows;
  } catch (error) {
    throw new Error("failed to fetch exercises");
  }
}
