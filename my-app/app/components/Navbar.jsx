"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "./context/AuthContext";

import Image from 'next/image'
import loader from "./h2f_logo.png";
 


const Navbar = () => {
  let {user, googleSignIn, logOut} = UserAuth();
  //user = "testuser";
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="h-20 w-full border-b-2 flex items-center justify-between p-2 px-2 pt-4">
      <ul className="flex ">
      
      <li className="p-2 cursor-pointer">
        <img src="https://www.nationalguard.mil/Portals/31/Images/ng-seal-100px.png?ver=-moB4lJJKI-S1cDnzaUlfw%3d%3d" 
        alt="national guard logo" class="h-16"></img>
        </li>
      <li className="p-2 cursor-pointer">
        <Image src={loader} 
        alt="h2f logo" height={75}></Image>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
        </li>

        {!user ? null : (
          <li className="p-2 cursor-pointer">
            <Link href="/profile">ADD DOCUMENTS</Link>
        </li>
        )}
        <li className="p-2 pl-16 pt-8 cursor-pointer">
          <Link href="/physical">Physical</Link>
        </li>
        <li className="p-2 pt-8 cursor-pointer">
          <Link href="/mental">Mental</Link>
        </li>
        <li className="p-2 pt-8 cursor-pointer">
          <Link href="/nutrition">Nutrition</Link>
        </li>
        <li className="p-2 pt-8 cursor-pointer">
          <Link href="/sleep">Sleep</Link>
        </li>
        <li className="p-2 pt-8 cursor-pointer">
          <Link href="/spiritual">Spritual</Link>
        </li>
        <li>
        <form className="p-2 pt-4">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search keywords..." required></input>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>
        </li>
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Sign up
          </li>
        </ul>
      ) : (
        <div className="flex items-center justify-between">
            <p className="p-2 cursor-pointer">
            <Link href="/profile"><img src={user.photoURL} 
      alt="user logo" class="h-12"></img></Link>
          
        </p>
          <p className="pl-2">User: {user.displayName}</p>
          <p className="pl-8 cursor-pointer" onClick={handleSignOut}>
            Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;