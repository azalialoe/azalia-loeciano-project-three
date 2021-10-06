import { useState } from 'react'
import Popped from './Popped';


function Ball({userText}) {

    const [countValue, setCountValue] = useState(50)

    const handleClick = () => {
        if (countValue !== 0) {
        setCountValue(countValue - 1) 
        } else 
        {return (null)} 
    }
    
    return ( 
    <>
        

        { countValue !== 0
        ?  (<div className="ball" >
                <p>{userText}</p>
                <button onClick={handleClick}>{countValue} frustrated clicks left</button>
            </div>)  
        : (<Popped />)          
        }

        
    </> 
    )
}

export default Ball;

