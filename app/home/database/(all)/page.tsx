import Exercise from "@/app/ui/database/exercise";
import { fetchExercisesPages, fetchFilteredExercises } from "@/app/lib/data";
import { ExercisesSkeleton } from "@/app/ui/skeletons";
import { getGifUrls } from "@/app/lib/gifurls";
import Pagination from "@/app/ui/database/pagination";
import Search from "@/app/ui/search";

export default async function Page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchExercisesPages(query);

  // const data = await fetchExercises();
  const gifArray = await getGifUrls();
  const filteredExercises = await fetchFilteredExercises(query, currentPage);

  return (
    <div>
      <Search placeholder="Search exercises..." />

      <div className="grid grid-cols-2 mt-10 w-full md:grid-cols-3">
        {filteredExercises.map((exercise) => (
          <Exercise
            key={exercise.id}
            id={exercise.id}
            name={exercise.name}
            body_part={exercise.body_part}
            gif_url={gifArray![exercise.sr_no - 1]}
          />
        ))}
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
