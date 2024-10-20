import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const Register = () => {
    const navigate=useNavigate();
    const {createUser,googleLogin}=useContext(AuthContext);

    const handleGoogleLogin=()=>{
        googleLogin()
        .then((result) => {
            const user = result.user;
            navigate('/');
          }).catch((error) => {
            const errorMessage = error.message;
          });
    }

    const handleRegister=(e)=>{
        e.preventDefault();
        const form=e.target;
        const email=form.email.value;
        const password=form.password.value;
        const user={email, password};
        console.log(user);
        createUser(email,password)
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

            <form onSubmit={handleRegister} className="card-body">
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
                  <button className="btn btn-primary">Register</button>
                </div>
                <p>Already have an Account? Go To <Link to={"/login"}><span className='text-red-700 font-bold underline'>Login</span></Link> </p>
            </form>
            <button onClick={handleGoogleLogin} className='btn bg-amber-200 text-red-600'>Sign In With Google</button>

        </div>
    );
};

export default Register;