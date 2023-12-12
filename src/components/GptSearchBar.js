import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GptSearchBar = () => {
  const selectedLang = useSelector((store) => store.config.language);
  const { gptSearchPlaceholder, search } = lang[selectedLang];
  return (
    <div className="pt-[15%] flex justify-center">
      <form className=" w-1/2  grid grid-cols-12">
        <input
          type="text"
          className="p-2 m-4 col-span-9 rounded-md"
          placeholder={gptSearchPlaceholder}
        ></input>
        <button className="py-2 px-4 m-4 text-white text-sm bg-red-700 col-span-3 rounded-md">
          {search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
