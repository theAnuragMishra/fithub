// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ExerciseSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm h-full`}
    >
      <div className="m-2">
        <div>
          <div className="w-full h-[250px]"></div>
        </div>
      </div>
    </div>
  );
}

export function ExercisesSkeleton() {
  return (
    <div className="grid grid-cols-3 mt-10 gap-10">
      <ExerciseSkeleton />
      <ExerciseSkeleton />
      <ExerciseSkeleton />
      <ExerciseSkeleton />
      <ExerciseSkeleton />
      <ExerciseSkeleton />
    </div>
  );
}

export function EachExerciseSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl p-2 shadow-sm h-full`}
    >
      <div className="flex justify-center flex-col">
        <div className="mb-10 bg-gray-100 w-full h-[80px]"></div>
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="w-1/2 bg-gray-100 h-[500px]"></div>
          <div className="p-3 text-xl bg-gray-100 w-1/2 h-[500px]"></div>
        </div>
      </div>
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div
      className={` ${shimmer} flex flex-col justify-center items-center gap-5`}
    >
      <div className={`w-32 h-32 bg-gray-100 rounded-full`}></div>

      <div className="w-full text-center text-xl h-[20px]"></div>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="w-52 h-10 rounded-md bg-gray-100"></div>
        <div className="w-52 h-10 rounded-md bg-gray-100 "></div>
        <div className="w-52 h-10 rounded-md bg-gray-100 "></div>
        <div className="w-52 h-10 rounded-md bg-gray-100 "></div>
      </div>
      <div className="mt-24 bg-gray-100 h-10 w-32"></div>
    </div>
  );
}

export function LeaderboardSkeleton() {
  return (
    <div
      className={`${shimmer} py-4 bg-gray-100 h-[600px] px-6 md:px-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto`}
    ></div>
  );
}
