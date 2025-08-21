import React from 'react';

const Input = ({ value, onChange, placeholder, type = 'text', ...props }) => {
    return (
                 <input  placeholder={props.legenda}  onChange={onChange} id="first-name" type="text" name="first-name" autocomplete="given-name" className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />

    );
};

export default Input;