import React, { useState } from "react";
import book from "../Asset/book.png";
import hero from "../Asset/hero.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  
  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)

    const data={
      email : email,
      password: password,
    };

    try{
      await axios.post("http://localhost:8000/api/auth/login", data)
      .then((res) =>{
         console.log(res.data)
         navigate("/");
        setLoading(false);
         alert('Login successfully!!')
      })
    } catch (err) {
        console.log(err);
       setLoading(false);
      }
  };

  return (
    <div className="w-full h-screen flex justify-center bg-[#E5E5E5]">
      <main className="w-[500px] bg-white px-6">
        <header className="flex items-center gap-4 mt-12">
          <img src={book} alt="book" />
          <p className="text-lg roboto">DevNote</p>
        </header>

        <div className="mt-12">
          <img src={hero} alt="" className="w-full" />
          <p className="text-lg roboto text-center">Log in</p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-4 mt-12">
          <input
            type="email"
            value={email}
            placeholder="Email address"
            onChange={onChangeEmail}
            className="h-14 border border-[#FB6900] rounded-[5px] outline-none px-6"
          />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={onChangePassword}
            className="h-14 border border-[#FB6900] rounded-[5px] outline-none px-6"
          />
          <button className="bg-[#FB6900] text-white text-lg h-14 rounded-[5px] roboto">
            Log in
          </button>
        </form>
        <a
          href="/signup"
          className="roboto text-[#FB6900] flex justify-center mt-4"
        >
          Not registered? Sign up here
        </a>
      </main>
    </div>
  );
}