import CartProduct from "./components/cart-product";
import './styles.css'
import { BagContext } from "../../components/bag/bag.context";
import {useContext} from 'react'

function ShoppingCart() {

    const [bag] = useContext(BagContext)

    const productSet = new Set()
    bag.forEach(p => productSet.add(p))
    productSet = Array.from(productSet)

    console.log(productSet)

    

    return (


        <section className="cart-container">
            <div className="header">
                <nav>Shopping Cart</nav>
                <nav>Remove All</nav>
            </div>
           {productSet.map(p => <CartProduct key={p.key} product={p} ></CartProduct>)} 
            <div className="sub-total">
                <div>
                    <div className="items">
                        <h3>Sub-total</h3>
                        <p> 2 items</p>
                    </div>
                    <div>$ Precio total</div>
                </div>
                <button>CHECKOUT</button>
            </div>
        </section>
    )

}

export default ShoppingCart;