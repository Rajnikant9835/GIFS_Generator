import "./App.css";
import { Random } from "./Component/Random";
import { Tag } from "./Component/Tag";

function App() {
  return (
    <div className="bg-gray-800 flex flex-col justify-center items-center w-full h-full overflow-x-hidden ">
      <h1 className="text-black bg-white w-10/12 flex  justify-center  m-12 p-2 font-bold text-3xl rounded-2xl uppercase ">
        GIFS GENERATOR
      </h1>
      <Random></Random>
      <Tag></Tag>
    </div>
  );
}

export default App;
