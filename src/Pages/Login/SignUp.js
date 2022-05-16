import React from 'react';
import {  useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
    const {
      register,
      formState: { errors },
      handleSubmit,
    } = useForm();
    
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
  
      const [updateProfile, updating, updateError] = useUpdateProfile(auth);
      const navigate = useNavigate();

      const [token] = useToken(user || Guser);

    if(loading || Gloading || updating){
      return <div className="flex items-center justify-center ">
                <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
             </div>
      
    };
  
    let signInError;
    if(error || Gerror || updateError){
      signInError = <p className="text-red-500"><small>{error?.message || Gerror?.message || updateError?.message}</small></p>
    };
  
    if (token) {
      navigate('/appointment');
    }
  
    const onSubmit = async(data) => {
      await createUserWithEmailAndPassword(data.email, data.password);
      await updateProfile({ displayName: data.name});
    }
    return (
        <div className="flex h-screen justify-center items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl text-accent font-bold">SignUp</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                    required:{
                        value:true,
                        message:'Name is Required'
                    }
                  })}
              />
              <label className="label">
                {errors.name?.type === "required" && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
              </label>
            </div>   
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full max-w-xs"
                {...register("email", {
                    required:{
                        value:true,
                        message:'Email is Required'
                    },
                    pattern: {
                        value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                        message:'Provide a Valid Email'
                    }
                  })}
              />
              <label className="label">
                {errors.email?.type === "required" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                {errors.email?.type === "pattern" && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>   
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your Password"
                className="input input-bordered w-full max-w-xs"
                {...register("password", {
                    required:{
                        value:true,
                        message:'Password is Required'
                    },
                    minLength: {
                        value:6,
                        message:'Must be 6 Characters or longer'
                    }
                  })}
              />
              <label className="label">
                {errors.password?.type === "required" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                {errors.password?.type === "minLength" && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
                  {signInError}
            <input className="btn w-full btn-accent" type="submit" value={'SignUp'} />
          </form>
          <p className="text-center"><small>Already Have an Account? <Link className="text-secondary" to={'/login'}>Please Login</Link></small></p>
          <div className="divider">OR</div>
          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-accent"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
    );
};

export default SignUp;