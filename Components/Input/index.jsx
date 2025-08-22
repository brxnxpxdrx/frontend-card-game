import React from 'react';

const Input = ({ value, onChange, placeholder, type = 'text', ...props }) => {
    return (
                 <input   placeholder={props.legenda}  onChange={onChange} id="first-name" type="text" name="first-name" autocomplete="given-name" className="w-full p-3 rounded-lg bg-black/70 border border-gray-700 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 outline-none text-white placeholder-gray-400" />

    );
};

export default Input;