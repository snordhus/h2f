import React from "react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
import "./home.css";

function Home() {
  return (
    <div className="home-parent">
      {getHero()}
      {getSectors()}
      {getDescription()}
      {getImages()}
      {getFooter()}
    </div>
  );
}

function getHero() {
  return <div className="hero">Hero Image</div>;
}

function getSectors() {
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
            <div className="sectors-placeholder-image"></div>
            <Text fontSize="x-large" className="sectors-text">
              Physical
            </Text>
          </div>
          <div className="item2 item">
            <div className="sectors-placeholder-image"></div>
            <Text fontSize="x-large" className="sectors-text">
              Mental
            </Text>
          </div>
          <div className="item3 item">
            <div className="sectors-placeholder-image"></div>
            <Text fontSize="x-large" className="sectors-text">
              Nutrition
            </Text>
          </div>
          <div className="item4 item">
            <div className="sectors-placeholder-image"></div>
            <Text fontSize="x-large" className="sectors-text">
              Sleep
            </Text>
          </div>
          <div className="item5 item">
            <div className="sectors-placeholder-image"></div>
            <Text fontSize="x-large" className="sectors-text">
              Spiritual
            </Text>
          </div>
          <div className="item6 item">
            <div className="sectors-placeholder-image"></div>
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
            All about H2F
          </Text>
        </div>
        <div className="description-sub-header">
          <Text fontSize="xx-large" className="description-sub-header">
            H2F stands for Holistic Health and Fitness
          </Text>
        </div>
        <div className="description-paragraph">
          <Text fontSize="medium" className="description-paragraph">
            Filler Text Filler Text Filler Text Filler Text Filler Text Filler
            Text Filler Text Filler Text Filler Text Filler Text Filler Text
            Filler Text Filler Text Filler Text Filler Text Filler Text Filler
            Text Filler Text Filler Text Filler Text Filler Text Filler Text
            Filler Text Filler Text
          </Text>
        </div>
      </div>
    </div>
  );
}

function getImages() {
  return (
    <div className="images">
      <div className="images-parent">
        <div className="left-arrow-parent">
          <div className="left-arrow"></div>
        </div>
        <div className="image-holder"></div>
        <div className="right-arrow-parent">
          <div className="right-arrow"></div>
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
          <Text
            fontSize="large"
            fontWeight="bold"
            className="description-header"
          >
            Header1
          </Text>
          <Text fontSize="large" className="description-header">
            Text
          </Text>
          <Text fontSize="large" className="description-header">
            Text2
          </Text>
          <Text fontSize="large" className="description-header">
            Text3
          </Text>
        </div>
        <div className="footer2 footer-item">
          <Text
            fontSize="large"
            fontWeight="bold"
            className="description-header"
          >
            Header2
          </Text>
          <Text fontSize="large" className="description-header">
            Text
          </Text>
          <Text fontSize="large" className="description-header">
            Text2
          </Text>
          <Text fontSize="large" className="description-header">
            Text3
          </Text>
        </div>
        <div className="footer3 footer-item">
          <Text
            fontSize="large"
            fontWeight="bold"
            className="description-header"
          >
            Header3
          </Text>
          <Text fontSize="large" className="description-header">
            Text
          </Text>
          <Text fontSize="large" className="description-header">
            Text2
          </Text>
          <Text fontSize="large" className="description-header">
            Text3
          </Text>
        </div>
      </div>
    </div>
  );
}

export default Home;
