interface Props {
  weight: number;
  height: number;
  highestStreak: number;
  timeSpent: number;
}

export default function Attributes(props: Props) {
  return (
    <div className="grid grid-rows-2 grid-cols-2 gap-5">
      <div className="w-52 h-10 rounded-md bg-gray-100 p-1 flex items-center justify-start">
        Weight:{props.weight}
      </div>
      <div className="w-52 h-10 rounded-md bg-gray-100 p-1 flex items-center justify-start">
        Height:{props.height}
      </div>
      <div className="w-52 h-10 rounded-md bg-gray-100 p-1 flex items-center justify-start">
        Highest-Streak:{props.highestStreak}
      </div>
      <div className="w-52 h-10 rounded-md bg-gray-100 p-1 flex items-center justify-start">
        Time-Spent:{props.timeSpent}
      </div>
    </div>
  );
}
