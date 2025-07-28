import { useState } from "react";

const Home = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    console.log(password)
  };

  const handleOnChangeName = (e) => {
    setName(e.target.value);
  };
  const handleOnChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleOnChangePassword = (e) => {
    setPassword(e.target.value)
  };

  return (
    <div className="flex justify-center  bg-gray-500 w-1/3 mx-auto mt-20 p-4">
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleOnChangeName}
          className="border-2 border-gray-300 p-1 my-2"
          type="text"
          name="name"
          id=""
        />
        <br />
        <input
          onChange={handleOnChangeEmail}
          className="border-2 border-gray-300 p-1 my-2"
          type="email"
          name="email"
          id=""
        />
        <br />
        <input
            onChange={handleOnChangePassword}
          className="border-2 border-gray-300 p-1 my-2"
          type="password"
          name="password"
          id=""
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Home;
