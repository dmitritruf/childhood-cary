import React, { useState } from "react";
import Form from "./Form";
import ThankyouMessage from "./ThankyouMessage";

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(!sent);
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

      {!sent && <Form handleSubmit={handleSubmit} />}
      {sent && <ThankyouMessage />}
    </div>
  );
};

export default ContactPage;
