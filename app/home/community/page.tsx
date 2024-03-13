const data = [
  { name: "Apoorva", score: "0" },
  { name: "Anurag", score: "100" },
];
export default function Page() {
  return (
    <div className="bg-blue-100 py-4 px-6 md:px-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Leaderboard</h2>
      <ol>
        {data.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-2 border-b border-blue-200"
          >
            <span className="text-lg font-medium text-blue-800">
              {item.name}
            </span>
            <span className="text-lg font-medium text-blue-600">
              {item.score}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
