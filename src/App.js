
import './App.css';
import { useState} from 'react';

const cardArray = [
  { id: 1, 
    src: "./images/batman.png"
  },

  {id: 2, 
    src:"./images/cat.png"
  },
  {
    id: 3,
    src: "./images/harley.png"
  },
  {
    id: 4,
    src:"./images/riddler.png"
  },
  {id: 5,
    src:"./images/joker.png"
  },
  {
    id: 6,
    src: "./images/scare.png"
  }
  
];



 


function App() {

  const [cards, setCards] = useState([])
  


 /*randomizes cards */
const shuffleCards= ()=> {
  let shuffled = [...cardArray,...cardArray]
  shuffled =shuffled.sort(()=> Math.random() - 0.5)
  setCards(shuffled);
  
};
console.log(cards)


  return (
    <div>
      <h1>Memory Game</h1>
      <div className="grid">
          <div className="card">
            <div>
              <img src = {require("./images/cover.png")} alt=""></img>
            </div>
          </div> 
      </div>
      <button onClick={shuffleCards}>New Game</button>  
    </div>
     
    

  );


  
}

export default App;

