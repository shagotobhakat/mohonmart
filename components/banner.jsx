"use client";
import { useState } from "react";
import { Carousel, Container } from "react-bootstrap";
import Image from "next/image";
import styles from "@/components/banner.module.css";
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
        fade
        slide
        interval={5000}
        activeIndex={activeIndex}
        onSelect={handleSelect}
        nextIcon={false}
        prevIcon={false}
      >
        <Carousel.Item className={styles.bannerItem}>
          <div className={styles.imageWrapper}>
            <Image
              src={banner1}
              alt="Banner Slide 1"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.overlay}></div>

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

        <Carousel.Item className={styles.bannerItem}>
          <div className={styles.imageWrapper}>
            <Image
              src={banner2}
              alt="Banner Slide 2"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.overlay}></div>

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

        <Carousel.Item className={styles.bannerItem}>
          <div className={styles.imageWrapper}>
            <Image
              src={banner3}
              alt="Banner Slide 3"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className={styles.overlay}></div>

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
