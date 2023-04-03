import React from 'react';



export default function Card({card, handleChoice}){
    const selectCard=()=>{
        handleChoice(card)
    }
    return(
     <div className ="card" >
        <img id ={card.id} className = 'front' src= {card.src} alt ="" ></img>    
        <img onClick={selectCard} className = 'back' src={require('./images/cover.png')}alt=""></img>
    </div>
    );   
}
