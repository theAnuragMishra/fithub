import Image from "next/image";

interface props {
  name: string;
  body_part: string;

  //   equipment: string;
  //   id: string;
  //   target: string;
  //   secondary__muslces: string[];
  //   instructions: string[];
}
export default function Exercise(props: props) {
  return (
    <div>
      <div className="text-xl">{props.name}</div>
    </div>
  );
}
