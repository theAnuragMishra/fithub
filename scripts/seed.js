const { db } = require("@vercel/postgres");
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  params: { limit: "1000" },
  headers: {
    "X-RapidAPI-Key": RAPI_KEY,
    "X-RapidAPI-Host": RAPI_HOST,
  },
};

async function seedUsers(client) {
  const response = await axios.request(options);

  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

    const insertedUsers = await Promise.all(
      response.data.map(async (exercise) => {
        return client.sql`
        INSERT INTO exercises (Body_part, Equipment, Gif_url, Id, Name, Target, Secondary_muscles, Instructions)
        VALUES (${exercise.bodyPart}, ${exercise.equipment}, ${exercise.gifUrl}, ${exercise.id}, ${exercise.name}, ${exercise.target}, ${exercise.secondaryMuscles}, ${exercise.instructions})
        ON CONFLICT (id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return;
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
