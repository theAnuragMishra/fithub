import { fetchExercisesByBodyPart } from "@/app/lib/data";

export default async function recommended() {
  const waistExercises = await fetchExercisesByBodyPart("waist");
  const upperLegsExercises = await fetchExercisesByBodyPart("upper legs");
  const chestExercises = await fetchExercisesByBodyPart("chest");
  const lowerLegsExercises = await fetchExercisesByBodyPart("lower legs");
  const backExercises = await fetchExercisesByBodyPart("back");
  const upperArmsExercises = await fetchExercisesByBodyPart("upper arms");
  const lowerArmsExercises = await fetchExercisesByBodyPart("lower arms");
  const cardioExercises = await fetchExercisesByBodyPart("cardio");
  const shouldersExercises = await fetchExercisesByBodyPart("shoulders");

  const exercise1 =
    waistExercises[Math.floor(Math.random() * waistExercises.length)];
  const exercise2 =
    upperArmsExercises[Math.floor(Math.random() * upperArmsExercises.length)];
  const exercise3 =
    lowerArmsExercises[Math.floor(Math.random() * lowerArmsExercises.length)];
  const exercise4 =
    upperLegsExercises[Math.floor(Math.random() * upperLegsExercises.length)];
  const exercise5 =
    lowerLegsExercises[Math.floor(Math.random() * lowerLegsExercises.length)];
  const exercise6 =
    chestExercises[Math.floor(Math.random() * chestExercises.length)];
  const exercise7 =
    backExercises[Math.floor(Math.random() * backExercises.length)];
  const exercise8 =
    shouldersExercises[Math.floor(Math.random() * shouldersExercises.length)];
  const exercise9 =
    cardioExercises[Math.floor(Math.random() * cardioExercises.length)];

  const exerciseArray = [
    exercise1,
    exercise2,
    exercise3,
    exercise4,
    exercise5,
    exercise6,
    exercise7,
    exercise8,
    exercise9,
  ];
  return exerciseArray;
}
