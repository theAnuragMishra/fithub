import EditableDiv from "@/app/ui/editable-div";
interface Props {
  weight: string;
  height: string;
  streak: number;
  bmi: number;
}

export default function Attributes(props: Props) {
  return (
    <div className="grid md:grid-cols-2 gap-5">
      <EditableDiv
        text={props.weight}
        what="Kgs"
        initialEditing={false}
        adj="weight"
      />

      <EditableDiv
        text={props.height}
        what="cms"
        initialEditing={false}
        adj="height"
      />
      <div className="w-52 h-10 rounded-md bg-gray-100 p-1 px-3 flex items-center justify-start">
        BMI: {props.bmi}
      </div>
      <div className="w-52 h-10 rounded-md bg-gray-100 p-1 px-3 flex items-center justify-start">
        Streak: {props.streak} {props.streak === 1 ? " day" : " days"}
      </div>
    </div>
  );
}
