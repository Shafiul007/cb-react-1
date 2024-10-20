import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';

const Cart = () => {
    const [carts,setCarts]=useState([]);
    

    useEffect(()=>{
        axios.get('http://localhost:3000/products')
        .then(data=>{
            setCarts(data.data);
        })
    },[])

    const handleDelete=id=>{
        console.log('delete id is ',id);
        
        axios.delete(`http://localhost:3000/products/${id}`)
        .then(data=>{
            console.log(data.data);
            if(data.data.deletedCount>0){
                const remaining=carts.filter(cart=>cart._id !== id);
                setCarts(remaining);
                alert('deleted successfully');
            }

        })
    }


    console.log(carts);

    return (
        <div>
            {
                carts.length ==0 ?<h1>No Products</h1>:<h1>My Cart : {carts.length}</h1>
            }
            
            <div className='grid grid-cols-1 md:grid-cols-2 space-x-2 space-y-2 lg:grid-cols-3'>
            {
                carts.map(cart=><CartItem handleDelete={handleDelete} key={cart._id} cart={cart}></CartItem>)
            }
            </div>
           
        </div>
    );
};

export default Cart;