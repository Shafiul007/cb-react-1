import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthProvider';

const Home = () => {
    const {user}=useContext(AuthContext);
    console.log(user);
    return (
      <>
      
      {
        user ?
        <div className="card text-black font-bold max-w-3xl mx-auto bg-white shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={user?.photoUrl}
      alt={user?.displayName}
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{user?.displayName}</h2>
    <h2 className="card-title">{user?.email}</h2>
    <h2 className="card-title">Last SignIn Time : {user?.metadata?.lastSignInTime}</h2>
    <h2 className="card-title">Created Time : {user?.metadata?.creationTime}</h2>
    
    
  </div>
</div>
  :
  <h1>No User Logged in</h1>
      }
      
      
      
      
      </>
        
    );
};

export default Home;