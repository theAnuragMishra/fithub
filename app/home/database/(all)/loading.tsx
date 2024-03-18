import { ExercisesSkeleton } from "@/app/ui/skeletons";
export default function Loading() {
  return (
    <>
      <div className="w-full bg-gray-100 h-[40px]"></div>
      <ExercisesSkeleton />
    </>
  );
}
