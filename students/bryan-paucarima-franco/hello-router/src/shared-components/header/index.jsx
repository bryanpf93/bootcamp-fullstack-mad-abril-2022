import './styles.css'
import {Link} from 'react-router-dom'
function Header () {
    return (
        <header className='header_container'>
            <h1>My APP</h1>
            <nav className='nav-container'>
                <Link to="/todo">Todo</Link>
                <Link to="/quotes">Quotes</Link>
                <Link to="/pokemons">Pokemons</Link>
            </nav>
        </header>

    )
}

export default Header;