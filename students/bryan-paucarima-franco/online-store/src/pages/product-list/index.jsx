import {useEffect,useState} from 'react'
import Product from '../product'
import './styles.css'

function ProductList () {

    let [productList,setProductList] = useState([])

    useEffect (() => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(p => setProductList(p))
    },[])

    console.log(productList)
    return(
        <>  
            <section className='all-products'>
            {productList?.products?.map(p => <Product key={p.id} product={p}></Product>)}
            </section>
        </>
    )

}

export default ProductList;