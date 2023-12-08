"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import hero from "../images/hero2.webp";
import mental from "../images/mental.jpg";
import spiritual from "../images/spirtitual.webp";
import all from "../images/All.jpeg";
import physical from "../images/physical.jpg";
import nutrition from "../images/Nutrition.jpg";
import sleep from "../images/sleep.jpeg";
import { Text } from "@chakra-ui/react";
import { db } from "../firebase.js";
import { getDocs, collection } from "firebase/firestore";
import Documents from "../components/Documents";
import { useState } from "react";
import "../domain.css";

// let currentImage = all;
// let images = [mental, spiritual, all, physical, nutrition, sleep];

const Nutrition = async () => {
  // const [documents, setDocuments] = useState(["bruh", "pow"]);
  // const docs = [];
  // const querySnapshot = await getDocs(collection(db, "documents"));
  // querySnapshot.forEach((doc) => {
  //   docs.push(doc);
  // });

  return (
    <>
    <div className="subnav-parent">
      <div className="background2">
        <div className="grid-parent2">
         
          <div className="middle">
            <Link href="/foundational_nutrition">
              <Text fontSize="md" color="white" className="text">
                Foundational Nutrition
              </Text>
            </Link>
            <Link href="/mental">
              <Text fontSize="md" color="white" className="text">
                Operational Nutrition
              </Text>
            </Link>
            <Link href="/nutrition">
              <Text fontSize="md" color="white" className="text">
                Therapeutic Nutrition
              </Text>
            </Link>
            <Link href="/sleep">
              <Text fontSize="md" color="white" className="text">
              Army Body Composition Program (ABCP)
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div className="domain-parent">
        {getHero()}
        {getDescription()}
        <Documents domain={"nutrition"} />
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
      </div></>
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
          <div className="sub-header-image">
            <Image
              src={nutrition}
              alt="national-guard"
              className="sub-header-image-actual"
            ></Image>
          </div>
          <div className="sub-header-text">
            <Text fontSize="x-large" className="sub-header-heading">
              Nutrition
            </Text>
            <Text fontSize="large" className="sub-header-description">
              Nutritional readiness is the ability to recognize, select, and
              consume the requisite food and drink to meet the physical and
              nonphysical demands of any duty or combat position, accomplish the
              mission and come home healthy.
            </Text>
            <br></br>
            <Text fontSize="large" className="sub-header-description">
              Nutritional readiness has evolved over the past four decades from
              a series of disjointed ideas and onesize-fits-all guidelines into
              an evidence-based science promoting integrated and personalized
              practices. Whereas earlier efforts were based on static
              recommendations focused on the fuel needs for endurance sports,
              contemporary performance dietary guidelines are mission- and
              individual-driven and periodized to enhance readiness.
            </Text>
          </div>
        </div>
      </div>
      <div className="sub-header-image-parent">
        <div className="sub-header-images">
          <div className="sub-header-images-image">
            <Image
              src={physical}
              alt="national-guard"
              className="sector-image"
            ></Image>
          </div>
          <div className="sub-header-images-image">
            <Image
              src={nutrition}
              alt="national-guard"
              className="sector-image"
            ></Image>
          </div>
          <div className="sub-header-images-image">
            <Image
              src={sleep}
              alt="national-guard"
              className="sector-image"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

function getHero() {
  return (
    <div className="hero">
      <Text className="hero-text" fontSize="x-large">
        Nutrition
      </Text>
      <Text className="hero-text-description" fontSize="x-large">
        The Nutrition domain of H2F
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

export default Nutrition;
