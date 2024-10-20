import React from 'react';

const Product = ({product}) => {
    const {brand,description,images,price,rating} = product;
    return (
      
            <div className="max-w-xs p-6 rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">
	<img src={images[0]} alt="" className="object-cover object-center w-full rounded-md h-72 bg-gray-500 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">$ {price}</span>
		<h2 className="text-xl font-semibold tracking-wide">{brand}</h2>
		<h2 className="text-xl font-semibold tracking-wide">Rating : {rating}</h2>
	</div>
	<p className="text-gray-100 dark:text-gray-800">{description}</p>
    <button className='btn btn-primary'>Add To Cart</button>
</div>
      
    );
};

export default Product;