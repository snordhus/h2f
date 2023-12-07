"use client";
import "./Footer.css";
import React from "react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";

const Footer = () => {
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
};

export default Footer;
