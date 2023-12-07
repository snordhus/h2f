"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import hero from "./images/hero2.webp";
import { Text } from "@chakra-ui/react";
import { db } from "../firebase.js";
import { getDocs, collection } from "firebase/firestore";
import Documents from "../components/Documents";
import { useState } from "react";
import "./sleep.css";

// let currentImage = all;
// let images = [mental, spiritual, all, physical, nutrition, sleep];

const Sleep = async () => {
  // const [documents, setDocuments] = useState(["bruh", "pow"]);
  // const docs = [];
  // const querySnapshot = await getDocs(collection(db, "documents"));
  // querySnapshot.forEach((doc) => {
  //   docs.push(doc);
  // });

  return (
    <div className="sleep-parent">
      {getHero()}
      {getDescription()}
      <Documents domain={"sleep"} />
      {/* <div className="documents-parent">
        <div className="documents">
          <div className="documents-item"></div>
          <div className="documents-item"></div>
          <div className="documents-item"></div>
          {docs.map((doc) => {
            return (
              <div key={doc.id} className="documents-item">
                {"bruh"}
              </div>
            );
          })}
        </div>
      </div> */}
    </div>
  );
};

// function getDocuments(documents) {
//   console.log(documents);

//   return (

//   );
// }

function getDescription() {
  return (
    <div className="description">
      <div className="sub-header">
        <div className="sub-header-image-text">
          <div className="sub-header-image"></div>
          <div className="sub-header-text">
            <Text fontSize="x-large" className="sub-header-heading">
              Sleep
            </Text>
            <Text fontSize="large" className="sub-header-description">
              Sleep is the critical requirement for brain health and function.
              Sleep readiness is the ability to recognize and implement the
              requisite sleep principles and behaviors to support optimal brain
              function. In turn, sleep readiness underpins a Soldier’s ability
              to meet the physical and nonphysical demands of any duty or combat
              position, accomplish the mission, and continue to fight and win.
            </Text>
            <br></br>
            <Text fontSize="large" className="sub-header-description">
              To achieve optimal readiness, Soldiers must have sleep and the
              more sleep obtained the better. Inadequate sleep weakens Soldier
              performance and jeopardizes the mission. Sleep readiness consists
              of three components: Duration, Timing, and Continuity
            </Text>
          </div>
        </div>
      </div>
      <div className="sub-header-image-parent">
        <div className="sub-header-images">
          <div className="sub-header-images-image"></div>
          <div className="sub-header-images-image"></div>
          <div className="sub-header-images-image"></div>
        </div>
      </div>
    </div>
  );
}

function getHero() {
  return (
    <div className="hero">
      <Text className="hero-text" fontSize="x-large">
        Sleep
      </Text>
      <Text className="hero-text-description" fontSize="x-large">
        The Sleep domain of Holistic Health and Fitness
      </Text>
      <Image src={hero} alt="national-guard" className="hero-image"></Image>
    </div>
  );
}

function getFooter() {
  return (
    <div className="footer">
      <div className="footer-parent">
        <div className="footer1 footer-item">
          <Text fontSize="large" fontWeight="bold" className="footer-header">
            About
          </Text>
          <Link href="./home">
            <Text fontSize="large" className="footer-text">
              Home
            </Text>
          </Link>
          <Link
            href="https://www.nationalguard.mil/Contact-Us/"
            target="_blank"
          >
            <Text fontSize="large" className="footer-text">
              Contact Us
            </Text>
          </Link>
        </div>
        <div className="footer2 footer-item">
          <Text fontSize="large" fontWeight="bold" className="footer-header">
            Careers
          </Text>
          <Link href="https://www.nationalguard.com/careers" target="_blank">
            <Text fontSize="large" className="footer-text">
              Army Guard Careers
            </Text>
          </Link>
          <Link href="https://www.goang.com/careers.html" target="_blank">
            <Text fontSize="large" className="footer-text">
              Air Guard Careers
            </Text>
          </Link>
          <Link href="https://www.usa.gov/" target="_blank">
            <Text fontSize="large" className="footer-text">
              USA.gov
            </Text>
          </Link>
        </div>
        <div className="footer3 footer-item">
          <Text fontSize="large" fontWeight="bold" className="footer-header">
            Socials
          </Text>
          <Link href="https://twitter.com/USNationalGuard" target="_blank">
            <Text fontSize="large" className="footer-text">
              X
            </Text>
          </Link>
          <Link
            href="https://www.instagram.com/us.nationalguard/"
            target="_blank"
          >
            <Text fontSize="large" className="footer-text">
              Instagram
            </Text>
          </Link>
          <Link
            href="https://www.facebook.com/TheNationalGuard"
            target="_blank"
          >
            <Text fontSize="large" className="footer-text">
              Facebook
            </Text>
          </Link>
          <Link href="https://www.youtube.com/TheNationalGuard" target="_blank">
            <Text fontSize="large" className="footer-text">
              Youtube
            </Text>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sleep;
