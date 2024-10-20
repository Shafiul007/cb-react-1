import axios from 'axios';
import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateCart = () => {
    const product=useLoaderData();
    const {_id,title,description} = product;
    const navigate=useNavigate();

    const handleUpdate=(e)=>{
        e.preventDefault();
        const form=e.target;
        const title=form.title.value;
        const description=form.description.value;
        const updateInfo={title,description};
        console.log(updateInfo);
        axios.put(`http://localhost:3000/products/${_id}`, updateInfo)
        .then(data => {
          console.log(data.data);
          if(data.data.modifiedCount>0){
            alert('Data updated successfully');
            //1 step back e jawar jonno navigate er vitor -1 dewa.
            navigate(-1);
          }
          if(data.data.modifiedCount==0){
            alert('No Changes were made');
            navigate(-1);
        }
        })
        .catch(error => {
          console.error('Error updating data:', error);
        });
    }


    return (
        <div>
            <h1 className='text-xl md:text-2xl font-bold'>Update data of {title}</h1>
            <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input type="text" name='title' placeholder="Title" defaultValue={title} className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <input type="text" name='description' placeholder="Description" defaultValue={description} className="input input-bordered" required />
                </div>
               
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Update Data</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCart;