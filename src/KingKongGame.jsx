import React, { useState } from "react";
import "./KingKongGame.css";
import GradientText from './GradientText.jsx'
 

function KingKongGame() {
  const [number, setNumber] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  const handleClick = (response) => {
    const nextNumber = number + 1;
    let correctResponse = "";

    if (nextNumber % 3 === 0 && nextNumber % 5 === 0) {
      correctResponse = "King Kong";
    } else if (nextNumber % 3 === 0) {
      correctResponse = "King";
    } else if (nextNumber % 5 === 0) {
      correctResponse = "Kong";
    } else {
      correctResponse = nextNumber.toString();
    }

    if (response === correctResponse) {
      setNumber(nextNumber);
    } else {
      setGameOver(true);
    }
  };

  const resetGame = () => {
    setNumber(1);
    setGameOver(false);
  };

  return (
    <div className="game">
      <h2>Número actual: {number}</h2>
      {!gameOver ? (
        <div>
          <button onClick={() => handleClick((number + 1).toString())}>
            {number + 1}
          </button>
          <button onClick={() => handleClick("King")}>King</button>
          <button onClick={() => handleClick("Kong")}>Kong</button>
          <button onClick={() => handleClick("King Kong")}>King Kong</button>
        </div>
      ) : (
        <div>
          <h2>¡Perdiste! Inténtalo de nuevo.</h2>
          <button onClick={resetGame}>Reiniciar juego</button>
        </div>
      )}

 
  <GradientText
    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
    animationSpeed={3}
    showBorder={false}
    className="custom-class"
  >
    <p>King Kong es un juego de conteo que desafía la concentración y rapidez mental de los participantes. Se juega en grupo y sigue una dinámica sencilla pero entretenida.</p>
<p>  Reglas del juego</p>
    Los jugadores cuentan en orden ascendente a partir del número 1.

    Cada vez que el número es múltiplo de 3, en lugar de decir el número, el jugador debe decir "KING".

    Si el número es múltiplo de 5, se debe decir "KONG" en lugar del número.

    Si el número es múltiplo de 3 y 5 al mismo tiempo, se debe decir "KING KONG".

    Si un jugador se equivoca al decir un número en lugar de la palabra correcta, queda eliminado o recibe una penalización según lo establecido antes de comenzar.
    
  </GradientText>

    </div>
  );
}

export default KingKongGame;
