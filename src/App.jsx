import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import { IoMoon } from "react-icons/io5";

function App() {
  let IconColor = "#ffffff";
  let Toggle = () => {
    document.getElementById("toggle-mode").addEventListener("click", () => {
      document.body.classList.contains("dark")
        ? document.body.classList.remove("dark") &&
          (IconColor = "#000000") &&
          document
            .getElementById("toggle-mode")
            .classList.add("toggle-mode2") &&
          document
            .getElementById("toggle-mode")
            .classList.remove("toggle-mode1")
        : document.body.classList.add("dark");
    });
  };
  const [cards, setCards] = useState([]);
  const creteCard = () => {
    let CTitle = document.getElementById("Title");
    let CDetails = document.getElementById("Details");
    let CImage = document.getElementById("fileInput");
    let color1 = document.getElementById("color1");
    let color2 = document.getElementById("color2");
    if (
      CTitle.value.trim() !== "" &&
      CDetails.value.trim() !== "" &&
      CImage.files.length > 0
    ) {
      const file = CImage.files[0];
      const imageURL = URL.createObjectURL(file);
      const newCard = {
        id: Date.now(),
        title: CTitle.value,
        details: CDetails.value,
        image: imageURL,
        colr1: color1.value,
        colr2: color2.value,
      };
      setCards([...cards, newCard]);
      CTitle.value = "";
      CDetails.value = "";
      CImage.value = "";
      color1.value = "#000000";
      color2.value = "#000000";
    } else {
      alert("Please fill all the fields");
    }
  };
  const deleteCard = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };
  return (
    <>
      <div className="App">
        <button onClick={Toggle} id="toggle-mode" className="toggle-mode1">
          <IoMoon
            color={IconColor}
            className="togg"
            style={{ background: "transparent" }}
          />
        </button>
        <div className="CardMaker">
          <h1>Card Factory</h1>
          <div className="containerV12">
            <label>The card title :</label>
            <input
              id="Title"
              type="text"
              className="inpt"
              placeholder="Enter"
            />

            <input type="color" name="color1pick" id="color1" />
          </div>
          <div className="containerV13">
            <label>More Details :</label>
            <input
              id="Details"
              type="text"
              className="inpt"
              placeholder="Enter"
            />

            <input type="color" name="color2pick" id="color2" />
          </div>
          <br />
          <div className="containerV11">
            <label>The card image : </label>
            <input
              type="file"
              accept="image/*"
              id="fileInput"
              style={{ display: "none" }}
            />
            <label htmlFor="fileInput" className="custom-upload-button">
              Choose a file
            </label>
            <br />
          </div>
          <button className="btn" onClick={creteCard}>
            Generate
          </button>
        </div>
      </div>
      <div className="cards-container">
        {cards.map((card) => (
          <div key={card.id}>
            <Card
              title={card.title}
              details={card.details}
              sorc={card.image}
              delet={() => deleteCard(card.id)}
              colr1={card.colr1}
              colr2={card.colr2}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
