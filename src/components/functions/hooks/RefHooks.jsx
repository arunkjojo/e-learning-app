import React, { useState, useEffect, useRef } from 'react'

const RefHooks = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
    };

    useEffect(() => {
        count.current = count.current + 1;
    },[count.current]);

    return (
        <>
            <button onClick={focusInput}>Focus Input</button>
            
            <h1>Render Count: {count.current}</h1>
            
            <input
                ref={inputElement}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </>
    );
}

export default RefHooks