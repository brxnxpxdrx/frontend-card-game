import React from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

const CardsAdd = () => {
    return (
        <div className="bg-sky-500/50 h-96">
            
            {/* Add your form or card creation UI here */}
            <h1 className="text-3xl text-red-100 font-bold underline">
Adicionar cards
   
  </h1>
  <Input />
  <Input />
  <Input />
  <Input />
  <Input />
  <Button />
        </div>
    );
};

export default CardsAdd;