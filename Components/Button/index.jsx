import React from 'react';

const Button = ({props, children, onClick, type = 'button', disabled = false, className = '' }) => (
  <button onClick={onClick} type="submit" className="w-full py-3 rounded-lg bg-yellow-500 hover:bg-yellow-400 text-black font-bold tracking-wider transition-transform transform hover:scale-105 shadow-lg">Salvar no Banco</button>
);

export default Button;