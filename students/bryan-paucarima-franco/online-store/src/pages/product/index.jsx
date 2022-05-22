import './styles.css'
import {useContext} from 'react'
import { BagContext } from '../../components/bag/bag.context';
 
function Product ({product}) {
    const [bag,setBag] = useContext(BagContext)

    const getProductInBag = () => {
        const products = bag.filter(p => p.id === product.id)
        return products.length
    }

    const handleAddProduct = () => {
        setBag(prevProduct => {
            const products = [...prevProduct,product]
            localStorage.setItem('bagProducts', JSON.stringify(products))
            return products
        })
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
                <p>QTY     {getProductInBag()}</p>
                <button onClick={handleAddProduct} className="button-add">+  ADD TO BAG</button>
                
            </div>
        </div>
    )
}

export default Product;
