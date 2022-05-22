import './styles.css'
import { useParams } from 'react-router-dom';
import { useGetProductInfoByName } from '../../data/cockteles/cockteles.hooks';

function CocktelesInfo () {
    const { name } = useParams()

    const cocktel = useGetProductInfoByName(name)

    return (
        <h1>Este es la info: {name}</h1>
    )
}

export default CocktelesInfo;