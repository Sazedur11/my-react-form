import { useEffect, useRef } from "react";
import Navbar from "../Navbar/Navbar";

const RefForm = () => {

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    useEffect(()=>{
        nameRef.current.focus();
    },[])

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value)
    }

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="flex justify-center  bg-blue-500 w-1/3 mx-auto mt-20 p-4">
        <form onSubmit={handleSubmit}>
          <input
            ref={nameRef}
            className="border-2 border-gray-300 p-1 my-2"
            type="text"
            name="name"
            id=""
          />
          <br />
          <input
            ref={emailRef}
            className="border-2 border-gray-300 p-1 my-2"
            type="email"
            name="email"
            id=""
          />
          <br />
          <input
            ref={passwordRef}
            className="border-2 border-gray-300 p-1 my-2"
            type="password"
            name="password"
            id=""
          />
          <br />
          <input className="btn btn-soft btn-success" type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default RefForm;
