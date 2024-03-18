import { fetchParticularExercise } from "@/app/lib/data";
import { getGifUrls } from "@/app/lib/gifurls";
import Image from "next/image";
export default async function Page({
  params,
}: {
  params: { exercise: string };
}) {
  const exerciseId = params.exercise;
  //   console.log(exerciseId);

  const data = await fetchParticularExercise(exerciseId);
  const gifArray = await getGifUrls();

  return (
    <div className="flex justify-center flex-col">
      <div className="flex items-end gap-4 mb-20">
        <h1 className="text-6xl">{data[0].name}</h1>
        <h3 className="text-3xl">({data[0].body_part})</h3>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <Image
          className=""
          src={gifArray[data[0].sr_no - 1]}
          width={900}
          height={1600}
          alt="exercise gif"
          unoptimized
        />
        <div className="p-3 text-xl">
          <p>
            <strong>Equipment-</strong> {data[0].equipment}
          </p>

          <p>
            <strong>Target-</strong> {data[0].target}
          </p>
          <p>
            <strong>Secondary Muscles:</strong>&nbsp;
            {data[0].secondary_muscles.map((item: string, index: number) =>
              index != data[0].secondary_muscles.length - 1 ? (
                <span key={index}>{item}, </span>
              ) : (
                <span key={index}>{item}</span>
              )
            )}
          </p>
          <div>
            <strong>Instructions:</strong>
            <ol>
              {data[0].instructions.map((item: string, index: number) => (
                <li key={index}>
                  {index + 1}. {item}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
