import React from "react";
import { IoSendSharp } from "react-icons/io5";

const Form = ({ handleSubmit }) => {
  return (
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
  );
};

export default Form;
