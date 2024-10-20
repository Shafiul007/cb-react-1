import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const Products=useLoaderData();
    const products=Products.products;
    console.log(Products);
    return (
        <div>
            <h1 className='text-2xl'>products : {products.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 space-x-2 space-y-2 lg:grid-cols-3'>
                {
                    products.map(product =><Product key={product.id} product={product}></Product>)
                }
            </div>
            
        </div>
    );
};

export default Products;