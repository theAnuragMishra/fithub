import axios from "axios";
import { unstable_noStore } from "next/cache";
const options = {
  method: "GET",
  url: "https://exercisedb.p.rapidapi.com/exercises",
  params: { limit: "1000" },
  headers: {
    "X-RapidAPI-Key": process.env.RAPI_KEY,
    "X-RapidAPI-Host": process.env.RAPI_HOST,
  },
};

//function to get gifs
export async function getGifUrls() {
  unstable_noStore;
  let gifArray: string[] = [];
  const response = await axios.request(options);

  //   console.log("Response Status Text:", response.statusText);

  try {
    response.data.map(async (exercise: { gifUrl: string }) => {
      gifArray.push(exercise.gifUrl);
    });
    // console.log(gifArray);
    return gifArray;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
