"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import hero from "./images/hero2.webp";
import mental from "./images/mental.jpg";
import spiritual from "./images/spirtitual.webp";
import all from "./images/All.jpeg";
import physical from "./images/physical.jpg";
import nutrition from "./images/Nutrition.jpg";
import sleep from "./images/sleep.jpeg";
import { Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRef } from "react";
import "./home.css";

let currentImage = all;
let images = [mental, spiritual, all, physical, nutrition, sleep];

function Home() {
  const imageRef = useRef();
  const router = useRouter();

  return (
    <div className="home-parent">
      {getHero()}
      {getSectors(router)}
      {getDescription()}
      {getImages(imageRef)}
      {/* {getFooter()} */}
    </div>
  );
}

function getHero() {
  return (
    <div className="hero">
      <Text className="hero-text" fontSize="x-large">
        Holistic health and Fitness
      </Text>
      <Image src={hero} alt="national-guard" className="hero-image"></Image>
    </div>
  );
}

function getSectors(router) {
  return (
    <div className="sectors">
      <div className="sectors-header">
        <Text fontSize="xxx-large" className="sectors-header">
          Pillars of H2F
        </Text>
      </div>
      <div className="sectors-grid-parent">
        <div className="sectors-grid">
          <div className="item1 item">
            <div
              className="sectors-placeholder-image"
              onClick={() => {
                router.push("./physical", { scroll: false });
              }}
            >
              <Image
                src={physical}
                alt="national-guard"
                className="sector-image"
              ></Image>
            </div>
            <Text fontSize="x-large" className="sectors-text">
              Physical
            </Text>
          </div>
          <div className="item2 item">
            <div
              className="sectors-placeholder-image"
              onClick={() => {
                router.push("./mental", { scroll: false });
              }}
            >
              <Image
                src={mental}
                alt="national-guard"
                className="sector-image"
              ></Image>
            </div>
            <Text fontSize="x-large" className="sectors-text">
              Mental
            </Text>
          </div>
          <div className="item3 item">
            <div
              className="sectors-placeholder-image"
              onClick={() => {
                router.push("./nutrition", { scroll: false });
              }}
            >
              <Image
                src={nutrition}
                alt="national-guard"
                className="sector-image"
              ></Image>
            </div>
            <Text fontSize="x-large" className="sectors-text">
              Nutrition
            </Text>
          </div>
          <div className="item4 item">
            <div
              className="sectors-placeholder-image"
              onClick={() => {
                router.push("./sleep", { scroll: false });
              }}
            >
              <Image
                src={sleep}
                alt="national-guard"
                className="sector-image"
              ></Image>
            </div>
            <Text fontSize="x-large" className="sectors-text">
              Sleep
            </Text>
          </div>
          <div className="item5 item">
            <div
              className="sectors-placeholder-image"
              onClick={() => {
                router.push("./spiritual", { scroll: false });
              }}
            >
              <Image
                src={spiritual}
                alt="national-guard"
                className="sector-image"
              ></Image>
            </div>
            <Text fontSize="x-large" className="sectors-text">
              Spiritual
            </Text>
          </div>
          <div className="item6 item">
            <div
              className="sectors-placeholder-image"
              onClick={() => {
                router.push("./all", { scroll: false });
              }}
            >
              <Image
                src={all}
                alt="national-guard"
                className="sector-image"
              ></Image>
            </div>
            <Text fontSize="x-large" className="sectors-text">
              All
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}

function getDescription() {
  return (
    <div className="description">
      <div className="description-parent">
        <div className="description-header">
          <Text fontSize="xxx-large" className="description-header">
            What is H2F
          </Text>
        </div>
        <div className="description-sub-header">
          <Text fontSize="xx-large" className="description-sub-header">
            H2F stands for Holistic Health and Fitness
          </Text>
        </div>
        <div className="description-paragraph">
          <Text fontSize="medium" className="description-paragraph">
            The Holistic Health and Fitness (H2F) System is the Army’s primary
            investment in Soldier readiness and lethality, optimal physical and
            non-physical performance, reduced injury rates, improved
            rehabilitation after injury, and increased overall effectiveness of
            the Total Army. The system empowers and equips Soldiers to take
            charge of their health, fitness, and well-being in order to optimize
            individual performance, while preventing injury and disease.
          </Text>
        </div>
      </div>
    </div>
  );
}

function getImages(imageRef) {
  function leftImage() {
    event.preventDefault();
    let index = images.indexOf(currentImage);
    if (index == 0) {
      currentImage = images[images.length - 1];
      imageRef.current.src = currentImage.src;
    } else {
      currentImage = images[index - 1];
      imageRef.current.src = currentImage.src;
    }
  }

  function rightImage() {
    event.preventDefault();
    let index = images.indexOf(currentImage);
    if (index == images.length - 1) {
      currentImage = images[0];
      imageRef.current.src = currentImage.src;
    } else {
      currentImage = images[index + 1];
      imageRef.current.src = currentImage.src;
    }
  }

  return (
    <div className="images">
      <div className="images-parent">
        <div className="left-arrow-parent">
          <div className="left-arrow">
            <ChevronLeftIcon boxSize={40} onClick={leftImage} />
          </div>
        </div>
        <div className="image-holder">
          <img
            src={all.src}
            alt="national-guard"
            className="image-carousel"
            ref={imageRef}
          ></img>
        </div>
        <div className="right-arrow-parent">
          <div className="right-arrow">
            <ChevronRightIcon boxSize={40} onClick={rightImage} />
          </div>
        </div>
      </div>
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

export default Home;
