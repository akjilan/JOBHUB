import React from "react";

const Signup = () => {
  const handleSubmit = (event) => {
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password);
  };

  const handleEmail = (event) => {
    console.log("the email i gave : ", event.target.value);
  };
  const handlePassword = (event) => {
    console.log("the password i gave : ", event.target.value);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      className="bg-teal-200 flex flex-col items-center gap-4 py-4 md:py-12 "
    >
      <h2 className="font-bold tracking-wide uppercase text-teal-950 ">
        Please Sign Up{" "}
      </h2>
      <input
        onBlur={handleEmail}
        className="p-3"
        type="email"
        name="email"
        id="email"
        placeholder="Your email"
      />
      <input
        onBlur={handlePassword}
        className="p-3"
        type="password"
        name="password"
        id="password"
        placeholder=" Your password"
      />

      <div>
        <button
          type="submit"
          className="ms-2 bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {" "}
          Submit
        </button>
      </div>
    </Form>
  );
};

export default Signup;
