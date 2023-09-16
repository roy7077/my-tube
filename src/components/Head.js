import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setname, toggelMenu } from "./utils/Cartslice";
import { YOUTUBE_SEARCH_SUGGESTION } from "./utils/Conts";

const Head = () => {
  const [searchText, setSearchText] = useState("");
  const [suggestion, SetSuggestion] = useState([]);
  const [suggestionVisible, SetSuggestionVisible] = useState(false);

  useEffect(() => {
    getSuggestion();
  }, [searchText]);

  const getSuggestion = async () => {
    console.log("search api - ", searchText);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION + searchText);
    const json = await data.json();
    //console.log(json[1]);
    SetSuggestion(json[1]);
  };
  const dispatch = useDispatch();
  return (
    <div className="grid grid-flow-col p-5 m-3 shadow-lg">
      {console.log(suggestion)}
      <div className="col-span-1 flex cursor-pointer">
        <img
          onClick={() => {
            dispatch(toggelMenu());
          }}
          className="h-10"
          alt="ham-menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          className="h-10"
          alt="logo"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 p-1 border border-gray-300 rounded-l-full"
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onFocus={() => {
            SetSuggestionVisible(true);
          }}
          onBlur={() => {
            SetSuggestionVisible(false);
          }}
          onKeyDown={(e) => {
            if (e.keyCode == 13) {
              dispatch(setname(searchText));
            }
          }}
        />
        <button
          className=" p-1 border border-gray-500 rounded-r-full bg-gray-300"
          onClick={() => {
            dispatch(setname(searchText));
          }}
        >
          Search
        </button>
        {
          suggestionVisible &&
          <div className="absoute bg-white py-2 px-2 w-[37rem] shadow-lg border border-gray-200">
            <ul>
              {suggestion.map((s) => (
                <li className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>
              ))}
            </ul>
        </div>
        }
        
      </div>
      <div className="col-span-1">
        <img
          className="h-10"
          alt="profile-logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPvm-Xk7pEU6EMYmm78CXL_KSbCWrQVsaYYR9hoi-_btLTZVWp_pOBXPOq5fsC28pbhxA&usqp=CAU"
        />
      </div>
    </div>
  );
};

export default Head;
