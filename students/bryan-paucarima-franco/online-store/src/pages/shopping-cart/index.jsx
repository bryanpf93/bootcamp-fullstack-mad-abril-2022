import CartProduct from "./components/cart-product";
import './styles.css'
import { BagContext } from "../../components/bag/bag.context";
import { useContext, useEffect, useState } from 'react'

function ShoppingCart() {
    const [bag, setBag] = useContext(BagContext)
    const [products, setProducts] = useState([])

    const getProductInBag = (productId) => {
        const products = bag.filter(p => p.id === productId)
        return products.length
    }

    const getTotalPrice = () => {
        return products.reduce((acc, v) => acc + (v.price * getProductInBag(v.id)), 0)
    }

    useEffect(() => {
        console.log('bag', bag);
        let productSet = new Set()
        bag.forEach(p => productSet.add(JSON.stringify(p)))
        productSet = Array.from(productSet).map(p => JSON.parse(p))
        setProducts(productSet)
    }, [bag])

    const handlePlus = (product) => {
        setBag(prevProduct => {
            const bagProducts = [...prevProduct,product]
            localStorage.setItem('bagProducts', JSON.stringify(bagProducts))
            return bagProducts
        })
    }

    const handleMinus = (product) => {
        setBag(prevProduct => {
            const index = prevProduct.findIndex(p => p.id === product.id)
            prevProduct.splice(index, 1)
            localStorage.setItem('bagProducts', JSON.stringify(prevProduct))
            return [...prevProduct]
        })
    }

    const handleRemove = (product) => {
        setBag(prevProduct => {
            const bagProducts = prevProduct.filter(p => p.id !== product.id)
            localStorage.setItem('bagProducts', JSON.stringify(bagProducts))
            return bagProducts
        })
    }

    const handleRemoveAll = () => {
        localStorage.setItem('bagProducts', JSON.stringify([]))
        setBag([])
    }

    if (products.length === 0) {
        return <div>Vacio</div>
    }

    return (
        <section className="cart-container">
            <div className="header">
                <nav>Shopping Cart</nav>
                <button onClick={handleRemoveAll} >Remove ALL</button>
            </div>

            {products.map(p =>
                <CartProduct 
                    key={p.id} 
                    product={p} 
                    amount={getProductInBag(p.id)}
                    onRemove={() => handleRemove(p)}
                    onPlus={() => handlePlus(p)}
                    onMinus={() => handleMinus(p)}></CartProduct>
            )}

            <div className="sub-total">
                <div>
                    <div className="items">
                        <h3>Sub-total</h3>
                        <p> {products.length} items</p>
                    </div>
                    <div>$ {getTotalPrice()}</div>
                </div>
                <button>CHECKOUT</button>
            </div>
        </section>
    )

}

export default ShoppingCart;