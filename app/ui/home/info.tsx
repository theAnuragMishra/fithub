export default function Info() {
  let noOfExercises = 6;
  let totalMinutes = 10;
  return (
    <div className="h-20 bg-blue-500 text-2xl text-white w-2/5 rounded-lg flex justify-center items-center mt-5 p-5">
      {noOfExercises} Exercises, {totalMinutes} Minutes Spent
    </div>
  );
}
