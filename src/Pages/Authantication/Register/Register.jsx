import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthContext";
import SocialLogin from "../SocialLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    createUser( data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset className="fieldset">
          {/* Username */}
          <label className="label">Username</label>
          <input
            type="text"
            {...register("username", { required: "Username is required" })}
            className="input w-full"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}

          {/* Email */}
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required"
            })}
            className="input w-full"
            placeholder="Email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          {/* Password */}
          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </fieldset>

        <button type="submit" className="btn btn-neutral mt-4 w-full">
          Register
        </button>
      </form>
      <SocialLogin/>
      {/* login Link */}
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>

    </div>
  );
};

export default Register;
