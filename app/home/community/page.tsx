import { fetchDatesForAll, fetchUserNameByUserId } from "@/app/lib/data";
// import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import clsx from "clsx";
import { auth } from "@/auth";
export default async function Page() {
  const data = await fetchDatesForAll();
  // console.log(data);
  const session = await auth();
  return (
    <div className="bg-blue-100 py-4 px-6 md:px-8 rounded-lg shadow-md w-full md:w-3/4 lg:w-2/3 xl:w-1/2 mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-blue-800">Leaderboard</h2>
      <ol>
        {data!.map(async (item, indexInData) => (
          <li
            key={indexInData}
            className={clsx(
              "flex justify-between items-center p-2 rounded-lg border-b border-blue-200",
              {
                "bg-white":
                  (await fetchUserNameByUserId(item.userId)) ===
                  session?.user?.name,
              }
            )}
          >
            <span className="text-lg font-medium text-blue-800">
              {await fetchUserNameByUserId(item.userId)}
              &nbsp;&nbsp;&nbsp;
              {indexInData === 0 ? (
                <span>🔥🔥🔥</span>
              ) : indexInData === 1 ? (
                <span>🔥🔥</span>
              ) : indexInData === 2 ? (
                <span>🔥</span>
              ) : null}
            </span>
            <span className="text-lg font-medium text-blue-600">
              {item.streak} {item.streak === 1 ? " day" : " days"}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
