export default function Today() {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const today = new Date();

  // Create a new Date object with desired timezone (Asia/Kolkata)
  const istDate = new Date(
    today.toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
  );

  // Get the day, month, and year components from IST date
  const dd = String(istDate.getDate()).padStart(2, "0");
  const mm = String(istDate.getMonth() + 1).padStart(2, "0"); // Jan is 0!
  const yyyy = istDate.getFullYear();
  const day = istDate.getDay();

  // Format the date string
  var formattedDate = dd + "-" + mm + "-" + yyyy;

  return (
    <div className="flex flex-row justify-center items-center">
      <h1 className="text-4xl md:text-6xl">
        {formattedDate} <span className="text-lg">{days[day]}</span>
      </h1>
    </div>
  );
}
