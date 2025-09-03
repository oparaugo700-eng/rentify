import React from 'react';
import { GoHome } from "react-icons/go";
import { IoMdCard } from "react-icons/io";
import { MdOutlineContactSupport } from "react-icons/md";


export default function Home() {
  return (
    <main>
      <div
        className="bg-gray-800 bg-[url('/images/house.jpg')] bg-cover bg-no-repeat  h-[55vh]  sm:h-[90vh]  md:h-[80vh] lg:h-[120vh] "
      >
        <div className="flex ml-8 py-5 gap-1">
          <GoHome className='text-white text-4xl' />
          <p className="text-2xl text-white">Rent Payment</p>
        </div>

        <div
          className="hidden lg:block bg-black w-[19em] px-6 lg:py-10 rounded-2xl ml-9 lg:mt-[10em]"
        >
          <p className="lg: text-2xl text-white font-medium pb-2">
            TRACKING TENANT PAYMENTS
          </p>
          <button
            className="lg:block w-[9em] text-white bg-emerald-500 h-[2em] hover:bg-emerald-400 cursor-pointer"
          >
            Payments
          </button>
        </div>
        <button
          className="bg-emerald-500 h-[2em] w-[9em] text-white mt-[3em] lg:hidden"
        >
          Payments
        </button>
      </div>
      <div
        className="bg-black text-white text-center py-1 h=[19em] md:py-7 md:h-[13em]"
      >
        <p className="font-bold text-2xl md:text-3xl">Welcome to payment overview</p>
        <p className="font-bold text-2xl md:text-3xl pb-3">
          Increase of your Luxury Home
        </p>
        <p>
          On the other hand, we denounce with righteous indignation and dislike
          men who are so
        </p>
        <p>
          beguiled and demoralized by the charms of pleasure of the desire trouble
        </p>
      </div>

      <div
        className="flex flex-col mt-[2em] sm:justify-center items-center md:flex-row gap-1 lg:gap-7"
      >
        <img
          src="/images/grgur-vuckov-Ujn77KM2AGc-unsplash.jpg"
          alt="house"
          className="w-[400px] rounded-2xl"
        />
        <div className="text-center md:w-[400px]">
          <p className="font-bold text-2xl mb-5 ml-1 md:text-4xl">
            THE BEST PLACES TO LIVE IN YOUR CITY, ACCORDING TO REAL ESTATE AGENTS
          </p>
          <p className="ml-1">
            it's one of the most exciting moments in your life-but it can also be
            overwhelming. As you start house hunting, there are few easy things
            you should look out for to make sure you'll be happy i your next home
          </p>
        </div>
      </div>

      <div
        className="bg-black mt-[3em] text-white grid grid-cols-1 h-[16em] md:grid-cols-3 gap-8 pl-5 md:h-[7em] lg:pt-3 lg:pl-7"
      >
        <div className="flex flex-col items-center md:w-[250px] lg:w-[350px]">
          <GoHome className='text-white text-4xl' />
          <p>10 years of experience in furniture business</p>
        </div>

        <div className="flex flex-col items-center md:w-[250px] lg:w-[300px]">
          <IoMdCard className='text-white text-4xl' />
          <p>Affordable price with world class quality</p>
        </div>

        <div className="flex flex-col items-center md:w-[250px] lg:w-[300px]">
          <MdOutlineContactSupport className='text-white text-4xl' />
          <p>Free Support</p>
        </div>
      </div>

    </main>
  );
}
