// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function ExerciseSkeleton() {
  return (
    <div className="m-2">
      <div>
        <div className="text-xl"></div>
      </div>
      <div />
    </div>
  );
}
