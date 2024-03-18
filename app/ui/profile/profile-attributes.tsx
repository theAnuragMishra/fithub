import EditableDiv from "@/app/ui/editable-div";
interface Props {
  weight: string;
  height: string;
  highestStreak: string;
  bmi: number;
}

export default function Attributes(props: Props) {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-5">
      <EditableDiv text={props.weight} what="Kgs" />

      <EditableDiv text={props.height} what="cms" />
      <div className="w-52 h-10 rounded-md bg-gray-100 p-1 px-3 flex items-center justify-start">
        BMI: {props.bmi}
      </div>
      <div className="w-52 h-10 rounded-md bg-gray-100 p-1 px-3 flex items-center justify-start">
        Highest-Streak: {props.highestStreak}
      </div>
    </div>
  );
}
