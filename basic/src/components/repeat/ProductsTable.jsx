import './ProductsTable.css'
import React from "react";
import products from "../../data/products";

export default props => {
    const productsTableRows = products.map((product, i) => {
        return (
            <tr key={product.id} className={i % 2 === 0 ? 'Even' : ''}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>$ {product.price.toFixed(2)}</td>
            </tr>
        );

    });

    return (
        <div className="ProductsTable">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productsTableRows}
                </tbody>
            </table>
            
        </div>
    )
}