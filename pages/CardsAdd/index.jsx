import React, { useState } from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";
import api from "../../src/services/api";
import './styled.css';

const CardsAdd = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(''); 
    const [tipo, setTipo] = useState('');
    const [atk, setAtk] = useState(0);         
    const [def, setDef] = useState(0);
    const  [cards, setCards] = useState([])
    const [img, setImg] = useState('https://youtooz.com/cdn/shop/products/yugioh_darkmagician_characterai_es_1000x1000_min-8qxy.png?v=1684524635');

    const handlerSubmit = async (e) => {
        e.preventDefault(); 
       
       
    const newCard = { "name" : name, "description" : description, "image" : image, "tipo" : tipo, "atk" : parseInt(atk), "def" : parseInt(def) };
setCards(newCard); // atualiza localmente se quiser
setImg(image);

await api.post('/cards-add', newCard); // envia corretamente
console.log(newCard);
          console.log(cards)
    }
    console.log(name)
    console.log(description)
    return (
<div className="min-h-screen bg-gradient-to-b from-black via-red-900 to-black text-white font-mon d-flex -justify-center items-center py-10">
            
            {/* Add your form or card creation UI here */}
          <header className="max-w-4xl mx-auto p-6">
            <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/2/21/Yu-Gi-Oh%21.png" alt="" />
             <h1 className="text-4xl font-bold text-center text-yellow-400 drop-shadow-lg tracking-widest">
      Adicionar Card - Yu-Gi-Oh!
    </h1>
          </header>
          <div className="d-flex w-full bg-red-900/30 p-8 rounded-lg shadow-lg adc">
 <form className="d-flex justify-center items-center w-3/4 max-w-lg mx-auto p-6 bg-gray-800 rounded-lg shadow-md space-y-4" >
  <Input   legenda="nome" onChange={e => setName(e.target.value)}/>
  <Input  legenda="Descrição" onChange={e=> setDescription(e.target.value)} />
  <Input  legenda="imagen(url)" onChange={e => setImage(e.target.value)} />
  <Input  legenda="tipo" onChange={e => setTipo(e.target.value)} />
  <Input  legenda="atk" onChange={e => setAtk(e.target.value)}/>
  <Input legenda="def" onChange={e => setDef(e.target.value)} />

  <Button onClick={handlerSubmit}>Adicionar</Button>
</form>
<div>
    <img className="card" src={img} alt="" />
</div>
</div>
            <div className="text-center mt-8">
                <p className="text-gray-400">Powered by Bruno Pedro</p>
            </div>

        </div>
    );
};

export default CardsAdd;