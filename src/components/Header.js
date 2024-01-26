import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { addGptMovieResult } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt?.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT search
    dispatch(toggleGPTSearchView());

    if (showGptSearch) {
      dispatch(addGptMovieResult({ movieNames: null, movieResults: null }));
    }
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
  };
  return (
    <>
      <div className="relative w-full px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img
          className="w-44 mx-auto md:mx-0 mb-7 md:mb-0 md:pb-0"
          src={LOGO}
          alt="logo"
        />
        {user && (
          <div className="flex flex-col md:flex-row items-center -mt-[23px]">
            <div className="flex ">
              {showGptSearch && (
                <>
                  <select
                    onChange={handleLanguageChange}
                    className="bg-transparent text-white "
                  >
                    {SUPPORTED_LANGUAGES.map((lang, index) => (
                      <option
                        className="text-white bg-black"
                        value={lang.identifier}
                        key={index}
                      >
                        {lang.name}
                      </option>
                    ))}
                  </select>
                </>
              )}

              <button
                className="text-white font-bold md:text-xs px-4 bg-purple-700 mx-3 rounded-md"
                onClick={handleGptSearchClick}
              >
                {showGptSearch ? "Home Page" : "GPT Search"}
              </button>
              <img className="w-6 h-6" alt="icon" src={user.photoURL} />
              <p className="ml-2 font-bold text-xl  text-white">
                {user.displayName}
              </p>
            </div>

            <button
              onClick={handleSignOut}
              className="mx-2 mt-4 md:mt-0 text-xs bg-gray-500 text-white font-bold p-2 px-6 bg-opacity-40 rounded-md hover:bg-opacity-80"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
