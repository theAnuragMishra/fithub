import Image from "next/image";
import Link from "next/link";

//defining interface for the props passed into Exercise function
interface props {
  name: string;
  body_part: string;
  gif_url: string;
  //   equipment: string;
  id: string;
  //   target: string;
  //   secondary__muslces: string[];
  //   instructions: string[];
}
export default function Exercise(props: props) {
  return (
    <div className="m-2 w-full">
      <Link href={`/home/database/${props.id}`}>
        <div className="text-xl">{props.name}</div>
      </Link>
      <Image
        src={props.gif_url}
        height={900}
        width={1600}
        alt="exercise gif"
        unoptimized
      />
    </div>
  );
}
