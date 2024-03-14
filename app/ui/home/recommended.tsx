import recommended from "@/app/lib/recommended-exercises";
import RecommendedCard from "./recommended-card";
import Link from "next/link";

export default async function Recommended() {
  const data = await recommended();
  return (
    <div className="mt-5 bg-gray-100 p-5 rounded-lg w-full flex items-center flex-col">
      <h2 className="text-2xl mb-2">Recommended Exercises</h2>
      <div className="grid grid-rows-3 grid-cols-3 gap-5">
        {data.map((item, index) => (
          <Link key={index} href={`/home/database/${item.id}`}>
            <RecommendedCard
              name={item.name}
              target={item.target}
              bodyPart={item.body_part}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
