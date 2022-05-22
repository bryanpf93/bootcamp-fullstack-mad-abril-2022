import './styles.css'
import { useContext } from 'react'
import { BagContext } from '../bag/bag.context'
import { useNavigate } from 'react-router-dom'

function Header (){
    const navigate = useNavigate()
    const [bag] = useContext(BagContext)

    return(
        <header>
            <h1>STORE</h1>
            <div onClick={() => navigate('/checkout')} className='shopping-cart'>{bag.length}</div>
        </header>
    )
}

export default Header