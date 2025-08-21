import React from 'react';

const Button = ({props, children, onClick, type = 'button', disabled = false, className = '' }) => (
  <button onClick={onClick} type="submit" class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's talk</button>
);

export default Button;