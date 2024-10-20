import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Login = () => {
    const navigate=useNavigate();
    const {loginUser}=useContext(AuthContext);
    const handleLogin=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const user={email, password};
        console.log(user);
        loginUser(email,password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            navigate('/');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          });
    }
    return (
        <div>

          <h1 className='text-xl md:text-2xl my-2 font-bold text-center'>Login</h1>

            <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                  
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
                <p>New to website? Go To <Link to={"/register"}><span className='text-red-700 underline font-bold'>Register</span></Link> </p>
            </form>

        </div>
    );
};

export default Login;