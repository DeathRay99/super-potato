import React from "react";
export default function Form() {
  const [allMemeImages, setAllMemeImages] = React.useState({});
  React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemeImages(data));
  }, []);
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/c2qn.jpg",
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMemeText) => ({
      ...prevMemeText,
      [name]: value,
    }));
  }
  function Meme() {
    const memeArray = allMemeImages.data.memes;
    const randomIndex = Math.floor(Math.random() * memeArray.length);
    const url = memeArray[randomIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  return (
    <div className="form">
      <div>
        <input
          type="text"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          name="bottomText"
          onChange={handleChange}
          value={meme.bottomText}
        />
      </div>
      <button onClick={Meme}>Get a new meme image 🖼️</button>
      <div className="meme">
        <img src={meme.randomImage} alt="meme" className="meme-image" />
        <h2 className="topText">{meme.topText} </h2>
        <h2 className="bottomText">{meme.bottomText}</h2>
      </div>
    </div>
  );
}
