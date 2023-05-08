import React, { useState } from "react";
import Title from "../home/Title";
import { FiSend } from "react-icons/fi";
import axios from "axios";
const Contact = () => {
  const [clientName, setClientName] = useState("");
  const [email, setEmail] = useState("");
  const [messages, setMessages] = useState("");

  const [errClientName, setErrClientName] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errMessages, setErrMessages] = useState(false);

  const [successMsg, setSuccessMsg] = useState("");

  const EmailValidation = (emai) => {
    return String(email)
      .toLowerCase()
      .match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
  };

  const handleName = (e) => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e) => {
    setMessages(e.target.value);
    setErrMessages(false);
  };
  const handleSend = (e) => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!messages) {
      setErrMessages(true);
    }

    if (clientName && EmailValidation(email) && email && messages) {
      axios.post("https://getform.io/f/7c058437-b835-4a59-b806-c75bb60fa545", {
        name: clientName,
        email: email,
        messages: messages,
      });
      setSuccessMsg(
        `Merhabalar. ${clientName}, Mesajınız başarıyla gönderilmiştir. Zaman ayırdığınız için teşekkürler.`
      );
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };
  return (
    <div>
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 flex justify-between gap-20">
        <div className="w-1/2 -mt-4">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Adress:
            </span>
            Samsun, Turkey
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Tel:
            </span>
            +90 532 012 95 12
          </p>
        </div>
        <div className="w-1/2 -mt-4">
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              Email:
            </span>
            dursunayydin@gmail.com
          </p>
          <p className="flex justify-between w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor text-gray-700 text-sm font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              İş Türü:
            </span>
            Müsait
          </p>
        </div>
      </div>
      <div className="w-full -mt-2">
        <Title title="Send" subTitle="Messages" />
        {successMsg ? (
          <p className="text-center text-base font-titleFont p-20 text-designColor">
            {successMsg}
          </p>
        ) : (
          <form
            id="form"
            action="https://getform.io/f/7c058437-b835-4a59-b806-c75bb60fa545"
            method="POST"
            className="p-6 flex flex-col gap-6"
          >
            <div className="w-full flex gap-10 justify-between -mt-2">
              <input
                onChange={handleName}
                value={clientName}
                className={`${
                  errClientName
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300`}
                type="text"
                placeholder="Full Name"
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300`}
                type="text"
                placeholder="Email Address"
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              className={`${
                errMessages
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } w-full bg-transparent border-2 px-4 py-0 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300 resize-none -mt-1`}
              placeholder="Your Messaga"
              cols="30"
              rows="4"
            ></textarea>
            <button
              onClick={handleSend}
              className="text-base w-44 flex items-center text-gray-200 hover:text-designColor duration-200"
            >
              Send Message{" "}
              <span className="-mt-2 text-designColor">
                <p> </p> {<FiSend />}
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
