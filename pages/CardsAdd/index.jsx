import React, { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const CardsAdd = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(''); 
    const [tipo, setTipo] = useState('');
    const [atk, setAtk] = useState('');         
    const [def, setDef] = useState('');
    const  [cards, setCards] = useState([])

    const handlerSubmit = (e) => {
        e.preventDefault(); 
       
       
          setCards( {name, description, image, tipo, atk, def} );
          console.log(cards)
    }
    console.log(name)
    console.log(description)
    return (
        <div className="bg-sky-500/50 h-96">
            
            {/* Add your form or card creation UI here */}
            <h1 className="text-3xl text-red-100 font-bold underline">
Adicionar cards
   
  </h1>
 
  <Input  legenda="nome" onChange={e => setName(e.target.value)}/>
  <Input  legenda="Descrição" onChange={e=> setDescription(e.target.value)} />
  <Input  legenda="imagen(url)" onChange={e => setImage(e.target.value)} />
  <Input  legenda="tipo" onChange={e => setTipo(e.target.value)} />
  <Input  legenda="atk" onChange={e => setAtk(e.target.value)}/>
  <Input legenda="def" onChange={e => setDef(e.target.value)} />

  <Button onClick={handlerSubmit}></Button>

  <p>
    {cards.name} 
    {cards.description} 
    {cards.image} 
    {cards.tipo}
    {cards.atk}
    {cards.def}  </p>

        </div>
    );
};

export default CardsAdd;