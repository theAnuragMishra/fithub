import Exercise from "@/app/ui/database/exercise";
import { fetchExercises } from "@/app/lib/data";
import { revalidateTag } from "next/cache";

export default async function Page() {
  revalidateTag("collection");
  const data = await fetchExercises();

  return (
    <div className="grid grid-cols-2">
      {data.map((exercise) => (
        <Exercise
          id={exercise.id}
          key={exercise.id}
          name={exercise.name}
          body_part={exercise.body_part}
          gif_url={exercise.gif_url}
        />
      ))}
    </div>
  );
}
