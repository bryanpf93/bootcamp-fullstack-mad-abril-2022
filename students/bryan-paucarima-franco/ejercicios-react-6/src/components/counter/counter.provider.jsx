import { CounterContext } from "./counter.context";
import {useState} from 'react'

function CounterProvider({children}) {

    const counterState = useState(0)
    return (
        <CounterContext.Provider value={counterState}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterProvider;