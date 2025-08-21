import React, { useState } from "react";
import deck from "../../api/config";

const MaiorCarta = () => {
const cartas = deck 
console.log(cartas);
const [jogador1, setJogador1] = useState([]);
const [jogador2, setJogador2] = useState([]); 
const [winner, setWinner] = useState(""); 

const sortearCartas = (e) => {
  e.preventDefault();
  const carta1 = cartas[Math.floor(Math.random() * cartas.length)];
  const carta2 = cartas[Math.floor(Math.random() * cartas.length)];
  setJogador1(carta1);
  setJogador2(carta2);

  if (carta1.numero === carta2.numero) {
    setWinner("Empate!");
  } else {
    const valores = {
      "A": 14, "K": 13, "Q": 12, "J": 11,
      "10": 10, "9": 9, "8": 8, "7": 7,
      "6": 6, "5": 5, "4": 4, "3": 3, "2": 2
    };
    if (valores[carta1.numero] > valores[carta2.numero]) {
      setWinner("Jogador 1 vence!");
    } else {
      setWinner("Jogador 2 vence!");
    }
  }   

  
}




console.log(jogador1);
  return (
    <div className="relative min-h-screen bg-green-100 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-mono p-4">Carta Maior</h1>
      <div className="flex justify-between w-80 padding-4">
     <div className="jogador-1">
        {jogador1.length !== 0 && (
          <div className="flex flex-col items-center">
            <img src={jogador1.imagem} alt={`${jogador1.numero} de ${jogador1.naipe}`} className="w-32 h-auto mb-2" />
            <p className="text-lg font-semibold">{`${jogador1.numero} de ${jogador1.naipe}`}</p>
          </div>
        )}
     </div>
     <div className="jogador-2">
      {
        jogador2.length !== 0 && (
          <div className="flex flex-col items-center">
            <img src={jogador2.imagem} alt={`${jogador2.numero} de ${jogador2.naipe}`} className="w-32 h-auto mb-2" />
            <p className="text-lg font-semibold">{`${jogador2.numero} de ${jogador2.naipe}`}</p>
          </div>
        )
      }
     </div>
     </div>
   
  <button className="focus:ring-3" onClick={sortearCartas}>Jogar</button>
  <div>
    {winner && <p className="text-2xl font-bold mt-4">{winner}</p>}
    
    
  </div>
    </div>
  );
};

export default MaiorCarta;
