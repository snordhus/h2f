"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "./context/AuthContext";

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
      <ul className="flex">
      
      <li className="p-2 cursor-pointer">
        <img src="https://www.nationalguard.mil/Portals/31/Images/ng-seal-100px.png?ver=-moB4lJJKI-S1cDnzaUlfw%3d%3d" 
        alt="national guard logo" class="h-16"></img>
        </li>
      <li className="p-2 cursor-pointer">
        <img src="https://www.hprc-online.org/themes/custom/hprc/images/logos/HPRC_Website_Logo.png" 
        alt="hprc logo" class="h-16"></img>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 cursor-pointer">
          <Link href="/about">About</Link>
        </li>

        {!user ? null : (
          <li className="p-2 cursor-pointer">
            <Link href="/profile">Profile</Link>
        </li>
        )}
        
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