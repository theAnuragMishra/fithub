import { PencilSquareIcon } from "@heroicons/react/16/solid";
import EditIcon from "@mui/icons-material/Edit";
interface Props {
  weight: number;
  height: number;
  highestStreak: number;
  bmi: number;
}

export default function Attributes(props: Props) {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-5">
      <div className="w-52 h-10 rounded-md bg-gray-100 py-1 px-3 flex items-center justify-between">
        Weight:{props.weight}
        <EditIcon className="cursor-pointer" />
      </div>
      <div className="w-52 h-10 rounded-md bg-gray-100 py-1 px-3 flex items-center justify-between">
        Height:{props.height}
        <EditIcon className="cursor-pointer" />
      </div>
      <div className="w-52 h-10 rounded-md bg-gray-100 p-1 flex items-center justify-start">
        BMI:{props.bmi}
      </div>
      <div className="w-52 h-10 rounded-md bg-gray-100 p-1 flex items-center justify-start">
        Highest-Streak:{props.highestStreak}
      </div>
    </div>
  );
}
