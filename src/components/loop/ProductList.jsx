import React from 'react'

const ProductList = () => {
    const products = [
        {id:1, name: "phone", price: "$699"},
        {id:2, name: "laptop", price: "$199"},
        {id:3, name: "headphone", price: "$399"},
    ]
    return (
        <div>
            { products.map(product => (
                <div key={product.id}>
                    <h1>Name: {product.name}</h1>
                    <h1>Price: {product.price}</h1>
                </div>
            ))}
        </div>
    )
}
export default ProductList
