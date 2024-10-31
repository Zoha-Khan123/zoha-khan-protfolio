"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ContactUser, Email } from "../components/svgs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const ContactUs = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(fullname);
    console.log(email);
    console.log(message);

    const res = await fetch("api/contact", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        fullname,
        email,
        message,
      }),
    });
    const { msg } = await res.json();
    setError(msg);
    console.log(error);
  };
  return (
    <div>
      <section className="px-4">
        <div className="flex justify-center">
          <h1 className="my-8 text-3xl font-bold border border-[#1788ae] text-[#1788ae] p-2 rounded-lg">{`Let's Connect`}</h1>
        </div>

        {/* Left-Side */}
        <div className="md:flex items-center">
          <div className="w-full md:w-[50%]">
            <Image
              className=" min-w-40 w-full"
              src={`/contact-me.svg`}
              width={600}
              height={600}
              alt="contact-image"
            ></Image>
          </div>

          {/* Right-Side */}
          <div className="w-full md:w-[50%]">
            <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium  dark:text-white"
              >
                Name
              </label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <ContactUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  onChange={(e) => setFullname(e.target.value)}
                  value={fullname}
                  type="text"
                  id="name"
                  name="name"
                  className="bg-gray-700 border-2 outline-none border-gray-500 text-white text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#1788ae] dark:focus:border-[#1788ae]"
                  placeholder="Enter your name"
                />
              </div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Your Email
              </label>
              <div className="relative mb-4">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                  <Email className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="text"
                  id="email"
                  name="email"
                  className="bg-gray-700 border-2 outline-none border-gray-500 text-white text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#1788ae] dark:focus:border-[#1788ae]"
                  placeholder="name@flowbite.com"
                />
              </div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium dark:text-white"
              >
                Message
              </label>
              <div className="relative mb-4">
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  rows={8}
                  id="message"
                  name="message"
                  className="bg-gray-700 border-2 outline-none border-gray-500 text-white text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#1788ae] dark:focus:border-[#1788ae]"
                  placeholder="Type your message here"
                />
              </div>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <button
                    type="submit"
                    className="text-white bg-[#1788ae] hover:bg-[#1788aeb7] focus:ring-4 focus:ring-[#1788ae] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full focus:outline-none"
                  >
                    Send
                  </button>
                </AlertDialogTrigger>

                <AlertDialogContent className="flex flex-col justify-end w-[300px] sm:w-[400px] max-h-[200px] border rounded-lg">
                  {error?.length > 0 &&
                    error.map((e, index) => (
                      <div
                        key={index}
                        className="text-red-600 py-2 bg-transparent"
                      >
                        {e}
                      </div>
                    ))}

                  <AlertDialogFooter>
                    <AlertDialogCancel className="bg-black text-white">
                      Cancel
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;


