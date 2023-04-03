
import './App.css';
import {useState} from 'react';

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
    const [choice1,setChoice1] = useState(null);
    const [choice2,setChoice2] = useState(null);

    const shuffleCards = ()=>{
        let x = 0;
        const shuffled = [...cardArray,...cardArray]
            .sort(()=> Math.random()-0.5)
            .map((card)=>({id: x=x+1,...card}))
        setCards(shuffled)
        setMoves(0); 
    }


    const selectCard = (card)=> {
        setChoice1(card);
        setChoice2(card);
        
    }
   console.log(cards)

    return(
    <div>
        <div className ="grid">
            {cards.map(card=>(
            <div className ="card">     
                <img className = 'back' src={require('./images/cover.png')}alt=""></img>
                <img id ={card.id} className = 'front' src= {card.src} alt ="" onClick={selectCard}></img>
            </div>   
            ))}
        </div>
        <button className='newButton' onClick={shuffleCards}><b>New Game</b></button> 
        <h2>Moves:{moves}</h2> 
               
    </div>    
        
    );




  
}

export default App;

