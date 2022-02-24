import React from "react";

const ThankyouMessage = () => {
  return (
    <div className="w-full md:w-1/2 flex items-center justify-center pt-10 md:pt-0">
      <div className="w-5/6 md:w-4/5 bg-white py-12 px-6 md:py-18 lg:py-24 md:px-8 rounded-md">
        <h2 className="text-xl md:text-2xl lg:text-3xl pb-2 md:pb-4 lg:pb-10">
          Thankyou for submitting the form👏
        </h2>
        <img
          src="https://static.vecteezy.com/system/resources/previews/004/896/065/non_2x/your-email-or-message-has-been-read-opened-already-received-concept-illustration-flat-design-eps10-vector.jpg"
          alt=" message received "
          className="h-1/2 w-1/3 object-contain"
        />
        <p className="text-md md:text-lg lg:text-xl">
          We will get back to you soon!!🙌
        </p>
      </div>
    </div>
  );
};

export default ThankyouMessage;
