import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";



const UseLocalstorage = () => {

    const [value, setValue] = useState('');
    const { setItem, getItem, removeItem } = useLocalStorage('key');

    return (
        <>
            <div className="hero-header mb-s">UseLocalstorage Hook</div>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => setItem(value)} className="btn-pill ml-1">Set</button>
            <button onClick={() => getItem()} className="btn-pill ml-1">Get</button>
            <button onClick={() => removeItem()} className="btn-pill ml-1">Remove</button>
            <h1>{getItem()}</h1>
        </>
    )
}

export default UseLocalstorage;