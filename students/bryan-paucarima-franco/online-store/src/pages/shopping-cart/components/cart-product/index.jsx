import './styles.css'

function CartProduct({ product, amount, onPlus, onMinus, onRemove }) {
    return (
        <div className="product-cart">
            <img src="" alt="" />
            <h1>{product.title}</h1>
            <div className='buttons'>
                <button onClick={onPlus}>+</button>
                <nav>{amount}</nav>
                <button onClick={onMinus}>-</button>
            </div>
            <div>
                <p>$ {product.price * amount}</p>
                <button onClick={onRemove}>Remove</button>
            </div>
        </div>
    )

}

export default CartProduct