import Recat, { useState } from 'react';
import reactDom from 'react-dom';

const Counter1=()=>{
    const [num,setNum]=useState(0);
    
    const Increment=()=>{
        setNum(num+1);
    }

    const decriment=()=>{
        setNum(num-1);
    }
    const reset=()=>{
        setNum(0);
    }
    
    return(
        <>
        <div className='main'>
            <div className='mainclass'>
                <div className='centerclass'>
                        <div className='head'>
                        <h1>BY FUNCTIONAL COMPONENT</h1>
                            <h1>{num}</h1>

                        </div>
                        <div className='btn_div'>
                            <button className='btn1' onClick={Increment}>+</button>
                            <button className='btn2' onClick={decriment}>-</button>
                            <br/>
                            <br/>
                            <button className='reset' onClick={reset}>RESET</button>
                            
                        </div>
                        
            </div>
        </div>
        </div>
        </>
    );
}
export default Counter1;