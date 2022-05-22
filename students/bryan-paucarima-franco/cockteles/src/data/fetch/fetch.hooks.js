import { useEffect, useState } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setLoading(false)
                setData(data)
            })
            .catch(error => {
                setLoading(false)
                setError(error)
            })
    }, [url])

    return { data, error, loading }
}
