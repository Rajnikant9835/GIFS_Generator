import React, { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import UseGif from "./UseGif";

const API_KEY = process.env.REACT_APP_GIF_API_KEY;

export const Tag = () => {
  const [Tag, setTag] = useState("");

  //using custom hooks
  const { gif, loader, fetchData } = UseGif(Tag);

  function changeHandler(event) {
    const value = event.target.value;
    console.log(value);
    setTag(value);
  }

  // async function fetchData() {
  //   setLoader(true);
  //   const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${Tag}`;
  //   const { data } = await axios.get(URL);
  //   const imagesource = data.data.images.downsized_large.url;
  //   console.log(imagesource);
  //   setGif(imagesource);
  //   setLoader(false);
  // }

  // useEffect(() => {
  //   fetchData();
  // }, []);

  function generate_handler() {
    fetchData(Tag);
  }

  return (
    <div className="bg-blue-800 p-4 w-1/2  flex flex-col justify-center items-center rounded-2xl  border-white  border-2 mt-8">
      <p className="text-2xl font-semibold "> Your GIF </p>
      <div className="bg-black h-1 w-44 "></div>

      {/* for showing loader animation  */}
      {loader ? (
        <Spinner />
      ) : (
        <img className=" bg-pink-500 mt-4" src={gif} alt="#"></img>
      )}

      <input
        className="w-11/12 bg-yellow-50 p-1 px-5 text-center text-xl font-semibold  rounded-xl mt-3"
        onChange={changeHandler}
      />
      <button
        className="w-11/12 bg-yellow-600 p-1 rounded-xl mt-3 font-semibold text-xl"
        onClick={generate_handler}
        value={Tag}
      >
        GENERATE
      </button>
    </div>
  );
};
