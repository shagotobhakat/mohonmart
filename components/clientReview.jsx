"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { EffectCube, Pagination, Autoplay } from "swiper/modules";
import style from "./clientReview.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./clientReview.module.css";

export default function ClientReview() {
  const reviews = [
    {
      text: "Excellent experience! I ordered computer accessories and clothing — both arrived on time and in perfect condition. MohonMart is now my go-to shopping site!",
      author: "— Rafiul H.",
    },
    {
      text: "Great variety of products and super easy checkout process. Love how everything is neatly categorized — makes shopping fun and fast!",
      author: "— Sumaiya N.",
    },
    {
      text: "I was surprised by how affordable the prices were compared to other sites. Plus, customer support was really friendly and responsive.",
      author: "— Hasib R.",
    },
    {
      text: "Got my cosmetics delivered within two days — nicely packed and genuine products. 100% recommended!",
      author: "— Nusrat J.",
    },
  ];

  return (
    <Container fluid>
      <div className={Style.main}>
        <Row className="justify-content-center">
          <Col lg={3}>
            <div className={Style.left} data-aos="fade-right"></div>
          </Col>
          <Col lg={6}>
            <div className="text-center">
              <h2
                className={style.head}
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                What Our Clients Say
              </h2>

              <div className={style.swiperWrapper}>
                <Swiper
                  effect="cube"
                  grabCursor={true}
                  loop={true}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  cubeEffect={{
                    shadow: true,
                    slideShadows: true,
                    shadowOffset: 20,
                    shadowScale: 0.94,
                  }}
                  pagination={{ clickable: true }}
                  modules={[EffectCube, Pagination, Autoplay]}
                  className={style.mySwiper}>
                  {reviews.map((review, index) => (
                    <SwiperSlide key={index}>
                      <div className={style.cardBox}>
                        <div className="card-body">
                          <p className={style.text}>“{review.text}”</p>
                          <p className={`${style.text} fw-semibold mt-3`}>
                            {review.author}
                          </p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </Col>
          <Col lg={3}>
            <div className={Style.right} data-aos="fade-left"></div>
          </Col>
        </Row>
      </div>
    </Container>
  );
}
