import { sql } from "@vercel/postgres";
import { unstable_noStore } from "next/cache";
import { auth } from "@/auth";
// import bcrypt from "bcryptjs";

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

export async function fetchProfile() {
  unstable_noStore();
  const session = await auth();
  // const plainTextEmail = session!.user?.email;
  // const saltRounds = 10;

  try {
    // bcrypt.hash(
    //   plainTextEmail!,
    //   saltRounds,
    //   async function (err: any, hash: any) {
    //     // data =
    //     //   await sql`SELECT weight, height, streak FROM user_data WHERE email = ${hash}`;
    //     console.log(hash);
    //   }
    // );
    const data =
      await sql`SELECT weight, height, streak FROM user_data WHERE email = ${
        session?.user!.email
      }`;

    return data!.rows;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchDatesForAll() {
  unstable_noStore();
  try {
    const data = await sql`SELECT dates, user_id from user_data`;

    interface StreakWithIndex {
      userId: number;
      streak: number;
    }

    const streaksWithIndices: StreakWithIndex[] = [];

    // Calculate streaks for each user
    data.rows.forEach((user) => {
      const streak = calculateStreak(user.dates);
      const userId = user.user_id;
      streaksWithIndices.push({ userId, streak });
    });

    // Sort streaks in descending order
    streaksWithIndices.sort((a, b) => b.streak - a.streak);

    // Get top ten streaks with their indices
    const topTenStreaks: StreakWithIndex[] = streaksWithIndices.slice(0, 10);
    return topTenStreaks;
  } catch (error) {
    console.error(error);
  }
}

function calculateStreak(dates: string[]): number {
  let streak = 0;
  let maxStreak = 0;
  for (let i = dates.length - 1; i > 0; i--) {
    const current = new Date(dates[i]);
    const previous = new Date(dates[i - 1]);
    // console.log("---");
    // console.log("current date is" + current);
    // console.log("previous is " + previous);
    let diff = (current.getTime() - previous.getTime()) / (1000 * 60 * 60 * 24);

    if (isNaN(diff)) {
      diff = 0;
    }
    // console.log("diff is" + diff);
    // console.log("---");
    if (diff === 1) {
      streak++;
      maxStreak = Math.max(streak, maxStreak);
    } else {
      streak = 0;
    }
  }
  return maxStreak;
}

export async function fetchCurrentUserStreak() {
  unstable_noStore();
  const session = await auth();
  try {
    const data =
      await sql`SELECT dates from user_data where email = ${session?.user?.email}`;

    const streak = calculateStreak(data.rows[0].dates);
    return streak;
  } catch (error) {
    console.error(error);
  }
}

export async function fetchUserNameByUserId(uid: number) {
  const data = await sql`SELECT name FROM user_data WHERE user_id = ${uid}`;
  return data.rows[0].name;
}
