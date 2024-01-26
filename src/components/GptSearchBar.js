import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const selectedLang = useSelector((store) => store.config.language);
  const { gptSearchPlaceholder, search } = lang[selectedLang];
  const searchText = useRef(null);

  //Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as an movie recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ".only give me names of 5 movies, comma separated like the example result given ahead. Example Results: RRR, Salaar, KGF, HI Nanna, Devara ";
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      //Error Handling
    }
    const gptMovies = gptResults.choices?.[0]?.message.content.split(",");
    console.log(gptMovies);

    //Make an API call to get the Movie Results

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };
  return (
    <div className="pt-[50%] md:pt-[15%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(event) => event.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-2 m-4 col-span-9 rounded-md"
          placeholder={gptSearchPlaceholder}
        ></input>
        <button
          className="py-2 px-4 m-4 text-white text-sm bg-red-700 col-span-3 rounded-md"
          onClick={handleGptSearchClick}
        >
          {search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
