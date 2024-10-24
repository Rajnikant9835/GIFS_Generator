import axios from "axios";
import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_GIF_API_KEY;

const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
// const choice_URL = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${Tag}`
function UseGif(Tag) {
  const [gif, setGif] = useState("");
  const [loader, setLoader] = useState(false);

  async function fetchData(Tag) {
    setLoader(true);
    const { data } = await axios.get(Tag ? `${URL}&tag=${Tag}` : URL);

    const imagesource = data.data.images.downsized_large.url;
    console.log(imagesource);
    setGif(imagesource);
    setLoader(false);
  }

  useEffect(() => {
    fetchData("car");
  }, []);

  return { gif, loader, fetchData };
}

export default UseGif;
