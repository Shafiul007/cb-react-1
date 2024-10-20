import React, { useContext } from 'react';
import { useLoaderData, Link } from 'react-router-dom';
import { AuthContext } from './../Context/AuthProvider';
import axios from 'axios';

const ProductDetails = () => {
    const {user}=useContext(AuthContext);
    const email=user.email;
    const product=useLoaderData();
    console.log(product);
    const {brand,description,title,images,price,rating} = product;
    const info={brand,description,title,images,price,rating,email};

    const handlePost=()=>{
        axios.post('http://localhost:3000/products',info)
        .then(data=>{
          const mainData=data.data;
          console.log(mainData);
          if(mainData.insertedId){
            alert('Add To Cart Successfully');
          }
        })
    }

    return (
        <div className='max-w-6xl mx-auto flex justify-center items-center'>

            <div className="max-w-5xl mx-auto p-6 rounded-md shadow-md bg-gray-900 dark:bg-gray-50 text-gray-50 dark:text-gray-900">
	<img src={images[0]} alt="" className="object-cover object-center mx-auto md:w-96 rounded-md w-90 h-90 md:h-96 bg-gray-500 dark:bg-gray-500" />
	<div className="mt-6 mb-2">
		<span className="block text-xs font-medium tracking-widest uppercase text-violet-400 dark:text-violet-600">$ {price}</span>
		<h2 className="text-xl font-semibold tracking-wide">{brand}</h2>
		<h2 className="text-xl font-semibold tracking-wide">Rating : {rating}</h2>
	</div>
	<p className="text-gray-100 dark:text-gray-800">{description}</p>
	<Link to={-1}><button className='btn btn-primary m-2'>Back</button></Link>
  <button onClick={handlePost} className='btn btn-primary'>Add To Cart</button>
          </div>

        </div>
    );
};

export default ProductDetails;