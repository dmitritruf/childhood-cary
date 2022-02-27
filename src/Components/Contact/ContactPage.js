import React, { useState } from "react";
// components
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
      <div className="w-2/3 md:w-1/2 flex flex-col items-center text-center">
        <h2 className="w-full text-xl md:text-3xl lg:text-4xl font-bold">
          Leave us a message
        </h2>
        <p className="w-full text-md md:text-lg font-medium text-slate-500 py-2">
          Lets create something better together! ✨🙌
        </p>
        <img
          src="https://thumbs.dreamstime.com/b/d-render-happy-doctor-african-cartoon-character-shows-smart-phone-device-blank-screen-clip-art-isolated-yellow-background-225530806.jpg"
          alt="contact"
          className="h-2/3 w-2/3 object-contain rounded-md"
        />
      </div>
      {/* Render the form component only if !sent */}
      {!sent && <Form handleSubmit={handleSubmit} />}
      {/* Render thankyou message only if sent */}
      {sent && <ThankyouMessage />}
    </div>
  );
};

export default ContactPage;
