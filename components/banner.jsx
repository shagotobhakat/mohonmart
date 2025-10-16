"use client";
import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import styles from "@/components/banner.module.css";
import Image from "next/legacy/image";
import banner1 from "@/public/banner1.jpg";
import banner2 from "@/public/banner2.jpg";
import banner3 from "@/public/banner3.jpg";

import BannerTextOne from "./bannerTextOne";
import BannerTextTwo from "./bannerTextTwo";
import BannerTextThree from "./bannerTextThree";
import AnimatedParagraph from "./aniParagraph";

export default function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Container className={styles.banner} fluid>
      <Carousel
        nextIcon={false}
        prevIcon={false}
        fade={true}
        slide={true}
        interval={5000}
        onSelect={handleSelect}
        activeIndex={activeIndex}>
        <Carousel.Item className={styles.bannerPic}>
          <Image
            src={banner1}
            layout="responsive"
            height={0.95}
            width={2}
            alt="slider"
            priority
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <div className={styles.bannerText}>
              <BannerTextOne triggerKey={activeIndex === 0 ? "slide1" : ""} />
              <AnimatedParagraph
                triggerKey={activeIndex === 0 ? "slide1" : ""}
                text="Style. Tech. Beauty. All in One Place."
              />
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={styles.bannerPic}>
          <Image
            src={banner2}
            layout="responsive"
            height={0.95}
            width={2}
            alt="slider"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <div className={styles.bannerText}>
              {activeIndex === 1 && <BannerTextTwo triggerKey={activeIndex} />}
              {activeIndex === 1 && (
                <AnimatedParagraph
                  triggerKey={activeIndex}
                  text="Style. Tech. Beauty. All in One Place."
                />
              )}
            </div>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className={styles.bannerPic}>
          <Image
            src={banner3}
            layout="responsive"
            height={0.95}
            width={2}
            alt="slider"
          />
          <Carousel.Caption className={styles.carouselCaption}>
            <div className={styles.bannerText}>
              {activeIndex === 2 && (
                <BannerTextThree triggerKey={activeIndex} />
              )}
              {activeIndex === 2 && (
                <AnimatedParagraph
                  triggerKey={activeIndex}
                  text="Style. Tech. Beauty. All in One Place."
                />
              )}
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}
