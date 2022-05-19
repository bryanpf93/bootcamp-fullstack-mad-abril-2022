import './styles.css'
import {useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';

function TodoPage () {

    const [todo, setTodo] = useState ({})
    const navigate = useNavigate()

    useEffect (() => {
        fetch('https://dummyjson.com/todos/random')
        .then(res => res.json())
        .then(t => setTodo(t))
    }, []);

    return (
        
        <main>
            <p>{todo.todo}</p>
            <input type="checkbox" onChange={() => navigate('/quotes')} defaultChecked={todo.completed} />
            <button onClick={() => navigate('/quotes')}>Ir a quotes</button>

        </main>
    )

}

export default TodoPage;