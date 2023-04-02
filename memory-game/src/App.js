
import './App.css';
import {useState} from 'react';

const cardArray = [
    {
        "id": 1,
        "src": require("./images/batman.png")
    },
    {   "id": 2,
        "src": require("./images/cat.png")
    },
    {
        "id": 3,
        "src": require("./images/harley.png")
    },
    {
        "id": 4,
        "src": require("./images/joker.png")
    },
    {   "id": 5,
        "src": require("./images/riddler.png")
    },
    {   "id": 6,
        "src": require("./images/scare.png")
    }
]


function App() {
    const [moves,setMoves] = useState(0);
    const [cards, setCards] = useState([]);

    const shuffleCards = ()=>{
        const shuffledCards = [...cardArray,...cardArray]
            .sort(()=> Math.random()-0.5);
        setCards(shuffledCards);
        setMoves(0); 
    }
   

    return(
    <div>
        <div className ="grid">
            {cards.map(()=>(
            <div className ="card">     
                <img className = 'back' src={require('./images/cover.png')}alt=""></img>
                <img className = 'front' src= {cards.src} alt =""></img>
            </div>   
            ))}
        </div>
        <button onClick={shuffleCards}>New Game</button> 
        <h2>Moves:{moves}</h2> 
               
    </div>    
        
    );




  
}

export default App;

