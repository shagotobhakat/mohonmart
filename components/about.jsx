import { Container, Row, Col } from "react-bootstrap";
import Style from "./about.module.css";

export default function About() {
  return (
    <Container fluid className={Style.main} data-aos="fade-up">
      <Container>
        <Row>
          <Col lg={12}>
            <div className={Style.body}>
              <h1 className={Style.head}>About Us</h1>
              <p className={Style.text}>
                Welcome to MohonMart — your one-stop online destination for
                quality, convenience, and trust. We’re proud to offer a diverse
                collection of computer accessories, clothing, and cosmetics, all
                carefully selected to meet your everyday needs. At MohonMart, we
                believe shopping should be simple, secure, and satisfying.
                Whether you’re upgrading your tech setup, refreshing your
                wardrobe, or enhancing your beauty routine, we’re here to make
                your experience seamless and enjoyable. Founded with passion and
                integrity, MohonMart is committed to providing authentic
                products, fair prices, and exceptional customer service. Our
                mission is to connect you with the things you love — all in one
                smart marketplace built for today’s lifestyle.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
