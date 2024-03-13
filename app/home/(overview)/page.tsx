import Date from "@/app/ui/home/date";
import Exercises from "@/app/ui/home/info";
import Recommended from "@/app/ui/home/recommended-exericses";
import Tracker from "@/app/ui/home/tracker";

export default function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Date />
      <Exercises />
      <Recommended />
      <Tracker />
    </div>
  );
}
