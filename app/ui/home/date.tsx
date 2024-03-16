export default function Today() {
  var today = new Date();

  // Get the day, month, and year components
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); // Jan is 0!
  var yyyy = today.getFullYear();

  // Format the date string
  var formattedDate = dd + "-" + mm + "-" + yyyy;

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl">{formattedDate}</h1>
    </div>
  );
}
