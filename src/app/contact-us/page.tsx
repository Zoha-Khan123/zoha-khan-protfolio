import React from "react";
import Image from "next/image";
import { ContactUser, Email } from "../components/svgs";

const ContactUs = () => {
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
              src={`/cont.png`}
              width={600}
              height={600}
              alt="contact-image"
            ></Image>
          </div>

          {/* Right-Side */}
          <div className="w-full md:w-[50%]">
            <form className=" max-w-lg mx-auto">
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
                  type="text"
                  id="name"
                  name="name"
                  className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#1788ae] dark:focus:border-[#1788ae]"
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
                  type="text"
                  id="email"
                  name="email"
                  className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#1788ae] dark:focus:border-[#1788ae]"
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
                  rows={8}
                  id="message"
                  name="message"
                  className="bg-gray-50 border-2 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#1788ae] focus:border-[#1788ae] block w-full ps-2 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-[#1788ae] dark:focus:border-[#1788ae]"
                  placeholder="Type your message here"
                />
              </div>
              <button
                type="submit"
                className="text-white bg-[#1788ae] hover:bg-[#1788aeb7] focus:ring-4 focus:ring-[#1788ae] font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 w-full focus:outline-none"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
