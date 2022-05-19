import {useEffect,useState} from 'react'

function Quotes (){

    const [quotes,setQuotes] = useState({})

    useEffect (() => {
        fetch('https://dummyjson.com/quotes/random')
        .then(res => res.json())
        .then(q => setQuotes(q))
    }, [])

    return(
        <main>
            <p>{quotes.quote}</p>
            <p>{quotes.author}</p>
        </main>
    )

}
export default Quotes