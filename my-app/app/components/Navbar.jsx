"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserAuth } from "./context/AuthContext";
import { InputGroup, Input, InputLeftElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { Text } from "@chakra-ui/react";
import loader from "./h2f_logo.png";
import "./Navbar.css";

const Navbar = () => {
  let { user, googleSignIn, logOut } = UserAuth();
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
    <div className="parent">
      <div className="background">
        <div className="grid-parent">
          <div className="left">
            <Link href="/home">
              <Text fontSize="md" color="white" className="text">
                Home
              </Text>
            </Link>
            <Link href="/about">
              <Text fontSize="md" color="white" className="text">
                About
              </Text>
            </Link>
          </div>
          <div className="middle">
            <Link href="/physical">
              <Text fontSize="md" color="white" className="text">
                Physical
              </Text>
            </Link>
            <Link href="/mental">
              <Text fontSize="md" color="white" className="text">
                Mental
              </Text>
            </Link>
            <Link href="/nutrition">
              <Text fontSize="md" color="white" className="text">
                Nutrition
              </Text>
            </Link>
            <Link href="/sleep">
              <Text fontSize="md" color="white" className="text">
                Sleep
              </Text>
            </Link>
            <Link href="/spirtual">
              <Text fontSize="md" color="white" className="text">
                Spirtual
              </Text>
            </Link>
          </div>
          <div className="right">
            <InputGroup className="input">
              <InputLeftElement pointerEvents="none">
                <SearchIcon color="white" />
              </InputLeftElement>
              <Input
                placeholder="Search"
                size="md"
                _placeholder={{ color: "white" }}
                focusBorderColor="black"
                width="200px"
              />
            </InputGroup>
            <Text fontSize="md" color="white" className="text">
              Test
            </Text>
            <Text fontSize="md" color="white" className="text">
              Test
            </Text>
          </div>
        </div>
      </div>
    </div>
    // <div className="h-20 w-full border-b-2 flex items-center justify-between p-2 px-2 pt-4">
    //   <ul className="flex align-vert">
    //     <li className="p-2 cursor-pointer">
    //       <img
    //         src="https://www.nationalguard.mil/Portals/31/Images/ng-seal-100px.png?ver=-moB4lJJKI-S1cDnzaUlfw%3d%3d"
    //         alt="national guard logo"
    //         class="h-16"
    //       ></img>
    //     </li>
    //     <li className="p-2 cursor-pointer">
    //       <Image src={loader} alt="h2f logo" height={75}></Image>
    //     </li>
    //     <li className="p-2 cursor-pointer">
    //       <Link href="/">
    //         <Text fontSize="md">Home</Text>
    //       </Link>
    //     </li>
    //     <li className="p-2 cursor-pointer">
    //       <Link href="/about">About</Link>
    //     </li>

    //     {!user ? null : (
    //       <li className="p-2 cursor-pointer">
    //         <Link href="/profile">ADD DOCUMENTS</Link>
    //       </li>
    //     )}
    //     <li className="p-2 pl-16 pt-8 cursor-pointer">
    //       <Link href="/physical">Physical</Link>
    //     </li>
    //     <li className="p-2 pt-8 cursor-pointer">
    //       <Link href="/mental">Mental</Link>
    //     </li>
    //     <li className="p-2 pt-8 cursor-pointer">
    //       <Link href="/nutrition">Nutrition</Link>
    //     </li>
    //     <li className="p-2 pt-8 cursor-pointer">
    //       <Link href="/sleep">Sleep</Link>
    //     </li>
    //     <li className="p-2 pt-8 cursor-pointer">
    //       <Link href="/spiritual">Spritual</Link>
    //     </li>

    //     <li>
    //       <Input placeholder="Search" size="md" />
    //     </li>
    //   </ul>

    //   {loading ? null : !user ? (
    //     <ul className="flex">
    //       <li onClick={handleSignIn} className="p-2 cursor-pointer">
    //         Login
    //       </li>
    //       <li onClick={handleSignIn} className="p-2 cursor-pointer">
    //         Sign up
    //       </li>
    //     </ul>
    //   ) : (
    //     <div className="flex items-center justify-between">
    //       <p className="p-2 cursor-pointer">
    //         <Link href="/profile">
    //           <img src={user.photoURL} alt="user logo" class="h-12"></img>
    //         </Link>
    //       </p>
    //       <p className="pl-2">User: {user.displayName}</p>
    //       <p className="pl-8 cursor-pointer" onClick={handleSignOut}>
    //         Sign out
    //       </p>
    //     </div>
    //   )}
    // </div>
  );
};

export default Navbar;
