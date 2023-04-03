
import './App.css';
import {useState} from 'react';
import Card from './Card'

const cardArray = [
    {
        "src": require("./images/batman.png")
    },
    {
        "src": require("./images/cat.png")
    },
    {
        "src": require("./images/harley.png")
    },
    {
        "src": require("./images/joker.png")
    },
    {   
        "src": require("./images/riddler.png")
    },
    {   
      "src": require("./images/scare.png")
    }
]


function App() {
    const [moves,setMoves] = useState(0);
    const [cards, setCards] = useState([]);
    const [first,setFirst] = useState(null);
    const [second,setSecond] = useState(null);

    const shuffleCards = ()=>{
        let x = 0;
        const shuffled = [...cardArray,...cardArray]
            .sort(()=> Math.random()-0.5)
            .map((card)=>({id: x=x+1,...card}))
        setCards(shuffled)
        setMoves(0); 
    }


    const handleChoice = (card)=> {
      console.log(card);
      setMoves((moves)=>moves+1);
    }


    return(
    <div>
        <div className ="grid">
            {cards.map(card=>(
             <Card
               card = {card}
               handleChoice ={handleChoice}
               key = {card.id}
             />  
            ))}
        </div>
        <button className='newButton' onClick={shuffleCards}><b>New Game</b></button> 
        <h2>Moves:{moves}</h2> 
               
    </div>    
        
    );




  
}

export default App;

