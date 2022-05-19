import './styles.css'

function CartProduct() {
    return (
        <div className="product-cart">
            <img src="" alt="" />
            <h1>name</h1>
            <div className='buttons'>
                <button>+</button>
                <nav>2</nav>
                <button>-</button>
            </div>
            <div>
                <p>$ precio</p>
                <p>Remove</p>
            </div>
        </div>
    )

}

export default CartProduct