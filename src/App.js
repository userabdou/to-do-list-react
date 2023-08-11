import React, { useState } from "react";
import "./App.css";

function App() {
  const [newelement, setNewelement] = useState("");
  const [elements, setElements] = useState([]);

  function ajouter() {
    if (!newelement) {
      alert("tu ne peux pas entrez une tache vide !!");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newelement,
    };

    setElements((oldList) => [...oldList, item]);

    setNewelement("");
  }

  function supprimer(id) {
    const newArray = elements.filter((item) => item.id !== id);
    setElements(newArray);
  }

 
 
  return (
    <div className="app">
      <div className="titre">
        <h1>My Todo List</h1>
      </div><br></br>
      <div className="input">
      <input
        type="text"
        className="zoneR"
        placeholder="Ajoutez une tache"
        value={newelement}
        onChange={(e) => setNewelement(e.target.value)}
      />

      <button class="btn btn-info" onClick={() => ajouter()}>Ajoutez</button>
      </div>

      <ul class="list-group">
     
        {elements.map((item) => {
          return (
            <div>
              <li key={item.id}  class="list-group-item d-flex justify-content-between align-items-center">
                {item.value}
                <button class="btn btn-danger" onClick={() => supprimer(item.id)}>
                  Supprimer
                </button>
              </li>

            </div>
          );
        })}
      </ul>
      
 
    </div>
  );
}

export default App;