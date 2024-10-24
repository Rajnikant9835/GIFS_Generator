import { Spinner } from "./Spinner";
import UseGif from "./UseGif";

const API_KEY = process.env.REACT_APP_GIF_API_KEY;

export const Random = () => {
  const { gif, loader, fetchData } = UseGif();

  function generate_handler() {
    fetchData();
  }

  return (
    <div className="bg-green-400 p-4 w-1/2  flex flex-col justify-center items-center rounded-2xl  border-white  border-2 ">
      <p className="text-2xl font-semibold "> A RANDOM GIF</p>
      <div className="bg-black h-1 w-44 "></div>

      {/* for showing loader animation  */}
      {loader ? (
        <Spinner />
      ) : (
        <img className=" bg-pink-500 mt-4" src={gif} alt="#"></img>
      )}

      <button
        className="w-11/12 bg-yellow-600 p-1 rounded-xl mt-3 font-semibold text-xl"
        onClick={generate_handler}
      >
        GENERATE
      </button>
    </div>
  );
};
