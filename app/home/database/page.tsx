import Exercise from "@/app/ui/database/exercise";
import { fetchExercises } from "@/app/lib/data";
// import { revalidateTag } from "next/cache";
import { getGifUrls } from "@/app/lib/gifurls";

export default async function Page() {
  const data = await fetchExercises();
  const gifArray = await getGifUrls();

  return (
    <div className="grid grid-cols-2">
      {data.map((exercise, index) => (
        <Exercise
          id={exercise.id}
          key={exercise.id}
          name={exercise.name}
          body_part={exercise.body_part}
          gif_url={gifArray![index]}
        />
      ))}
    </div>
  );
}
