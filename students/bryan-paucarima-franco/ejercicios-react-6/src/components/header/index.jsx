import './styles.css'
import { CounterContext } from '../counter/counter.context';
import {useContext} from 'react'

function Header() {

    const [counter] = useContext(CounterContext)
    return(
        <>
            <header>
                <h1>HelloWorld</h1>
                <div className='circle'>{counter}</div>
            </header>

        </>
    )
    
}

export default Header;