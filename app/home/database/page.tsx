import Exercise from "@/app/ui/database/exercise";
import { fetchExercises } from "@/app/lib/data";

export default async function Page() {
  const data = await fetchExercises();

  return (
    <div>
      {data.map((exercise) => (
        <Exercise
          key={exercise.id}
          name={exercise.name}
          body_part={exercise.body_part}
        />
      ))}
    </div>
  );
}
