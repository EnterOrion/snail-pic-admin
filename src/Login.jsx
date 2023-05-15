/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";

const Login = ({ setUserAuth }) => {
  const { register, handleSubmit } = useForm();
  const [loginErr, setLoginErr] = useState(false);
  const onSubmit = async (data) => {
    // POST with login data inputted into the form
    const formData = JSON.stringify(data);
    try {
      const req = await fetch("https://snail-pic-api.onrender.com/api/login", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const myJson = await req.json();
      // If error, render error
      if (req.status !== 200) {
        setLoginErr(true);
        return;
      }
      // Otherwise, initiate session and store token
      localStorage.setItem("token", myJson.token);
      localStorage.setItem("userAuth", true);
      setUserAuth(true);
    } catch (err) {
      setLoginErr(true);
    }
  };

  return (
    <div className="page">
      <h1 className="page-heading">Snail Pic Admin</h1>
      <form>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          placeholder="Username"
          name="username"
          {...register("username", {
            required: "Required",
          })}
        />

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          {...register("password", {
            required: "Required",
          })}
        />

        <button
          className="form-button"
          type="submit"
          onClick={((e) => e.preventDefault(), handleSubmit(onSubmit))}
        >
          Login
        </button>
        {loginErr && <p>Username or password incorrect</p>}
      </form>
    </div>
  );
};

export default Login;
