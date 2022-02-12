import React, { useState } from "react";
import { IoSendSharp } from "react-icons/io5";
import ThankyouMessage from "./ThankyouMessage";
import { db } from "../firebase";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(!sent);

    db.collection("contacts")
      .add({
        name,
        email,
        message,
      })
      .then(() => {
        console.log("message has been submitted");
      })
      .catch((err) => {
        console.log(err.message);
      });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="w-full flex flex-col md:flex-row items-center py-10 md:py-20 bg-slate-50">
      <div className="w-2/3 md:w-1/2 text-center">
        <h2 className="w-full text-xl md:text-3xl font-bold">
          Leave us a message
        </h2>
        <p className="w-full text-md md:text-lg font-medium text-slate-500">
          Lets create something better together! ✨🙌
        </p>
      </div>

      {!sent && (
        <div className="w-full md:w-1/2 flex items-center justify-center pt-10 md:pt-0">
          <div className="w-5/6 md:w-4/5 bg-white py-6 px-6 md:py-6 md:px-8 rounded-md">
            <div className="text-3xl text-yellow-400 hover:text-yellow-300">
              <IoSendSharp />
            </div>
            <form autocomplete="off" onSubmit={handleSubmit}>
              {/* Input field for Name */}
              <div className="flex flex-col py-2 md:py-4">
                <label
                  for="name"
                  className="text-md font-semibold text-slate-700 py-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  autocomplete="off"
                  className="bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Input field for email */}
              <div className="flex flex-col py-2 md:py-4">
                <label
                  for="email"
                  className="text-md font-semibold text-slate-700 py-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  autocomplete="off"
                  className="bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Input field for message */}
              <div className="flex flex-col py-2 md:py-4">
                <label
                  for="help-text-area"
                  className="text-md font-semibold text-slate-700 py-1"
                >
                  How can we help you?
                </label>
                <textarea
                  className="bg-slate-100 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              {/* Submit button */}
              <div className="mt-2 md:mt-3">
                <button
                  type="submit"
                  className="bg-yellow-400 hover:bg-yellow-300 py-2 px-4 w-full text-center text-white"
                >
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {sent && <ThankyouMessage />}
    </div>
  );
};

export default ContactPage;
