import { useState } from 'react'
import "./contador.css"
import { blueGrey } from '@mui/material/colors';


const Contador = () => {

    let [Count, setCount] = useState(0)

    const removeProduct = () => { setCount(Count - 1) };
    const addProduct = () => { setCount(Count + 1) };
    const restart = () => { setCount(Count = 0) };
    Count <0 && (Count = 0);


    return (
        <div className='Counter'>
            <div className='CounterValue'>
                <button onClick={() => removeProduct()}>-</button>
                <p>{Count}</p>
                <button onClick={() => addProduct()}>+</button>
            </div>
            <div  className='BuyOrEmpty'>
                <button id='Empty' onClick={() => restart()}>Empty</button>
                <button id='Buy' onClick={() => restart()}>Buy</button>
            </div>
        </div>
        
    );
};

export default Contador
