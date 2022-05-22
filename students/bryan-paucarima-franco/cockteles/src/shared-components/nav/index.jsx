import { useContext } from 'react'
import { CocktelContext } from '../cocktel/cocktel.context';
import './styles.css'

function Nav() {
    const [, setTheme] = useContext(CocktelContext)
    

    const handleChange = (e) => {
        const checked = e.target.checked;
        const theme = checked ? 'dark' : 'light'
        setTheme(theme)
    }

    return (
        <header>

            <h1>MINIBAR</h1>
            <div>
                <label className='switch'>
                    <input onChange={handleChange} type="checkbox"></input>
                    <span className='slider round'></span>
                </label>
            </div>

        </header>
    )
}

export default Nav;