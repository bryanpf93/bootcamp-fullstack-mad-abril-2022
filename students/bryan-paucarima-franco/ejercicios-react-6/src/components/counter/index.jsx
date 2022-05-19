import {useState,useContext} from 'react'
import { CounterContext } from './counter.context'


function Counter() {

    const [counter,setCounter] = useContext(CounterContext)
    // const[number,setNumber]= useState(0)
    const handleButtonAdd = () => {
        const buttonAdd  = counter + 1
        // setNumber(buttonAdd)
        setCounter(buttonAdd)
    }
    
    const handleButtonSubtract = () => {
        const buttonSubtract = counter -1
        // setNumber(buttonSubtract)
        setCounter(buttonSubtract)
    }


    return(
        <>
            <button onClick={handleButtonAdd}> ADD+</button>
            <p>{counter}</p>
            <button onClick={handleButtonSubtract}> SUBTRACT-</button>
        </>
    )
}

export default Counter;