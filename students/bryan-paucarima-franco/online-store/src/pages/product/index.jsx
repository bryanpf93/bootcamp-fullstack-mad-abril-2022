import './styles.css'
import {useContext} from 'react'
import { BagContext } from '../../components/bag/bag.context';


function Product ({product}) {
    const [,setBag] = useContext(BagContext)


    const handleAddProduct = () => {
        setBag(prevProduct => [...prevProduct,product])
    }

    return(
        <div className="product-container">
            <div className="tittle-price">
                <h1>{product.title}</h1>
                <p>{product.price}$</p>
                <p>{product.rating}</p>
            </div>
            <div className="product-images">
                <img className='image-one' src={product.images[0]} alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div className="descrip-add">
                <p>{product.description}</p>
                <p>QTY     1</p>
                <button onClick={handleAddProduct} className="button-add">+  ADD TO BAG</button>
                
            </div>
        </div>
    )
}

export default Product;
