export default function Workout() {
  var today = new Date();

  var day = String(today.getDate()).padStart(2, "0");
  var month = String(today.getMonth() + 1).padStart(2, "0");
  var year = String(today.getFullYear()).slice(2);

  var formattedDate = day + "-" + month + "-" + year;
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl">{formattedDate}</h1>
    </div>
  );
}
