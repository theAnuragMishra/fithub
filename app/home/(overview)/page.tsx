import Today from "@/app/ui/home/date";
import Info from "@/app/ui/home/info";
import Recommended from "@/app/ui/home/recommended";
import Stopwatch from "@/app/ui/home/stopwatch";
// import Tracker from "@/app/ui/home/tracker";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Today />
      <Info />
      <Stopwatch />
      <Recommended />
    </div>
  );
}
