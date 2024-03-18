import Today from "@/app/ui/home/date";
import Recommended from "@/app/ui/home/recommended";
import InfoStopwatch from "@/app/ui/home/info-stopwatch";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Today />
      <InfoStopwatch />
      <Recommended />
    </div>
  );
}
