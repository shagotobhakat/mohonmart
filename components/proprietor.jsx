import { Container, Row, Col } from "react-bootstrap";
import Style from "./proprietor.module.css";
import Image from "next/image";

export default function Proprietor() {
  return (
    <Container fluid id="about" className={Style.main}>
      <Row>
        <Col lg={12}>
          <Row>
            <Col lg={4}>
              <div className={Style.left} data-aos="fade-right"></div>
            </Col>
            <Col lg={4}>
              <div data-aos="zoom-in" className={Style.one}>
                <div className="card shadow">
                  <Image
                    fill
                    priority
                    style={{ objectFit: "cover" }}
                    src="/proprietor.jpg"
                    alt="EHAN"
                  />
                  <div className="ribbon">
                    <div className="ribbon-stitches-top"></div>
                    <div className="ribbon-content">
                      <h2 className={Style.head}>MohonMart</h2>
                      <p className={Style.body}>Proprietor</p>
                    </div>
                    <div className="ribbon-stitches-bottom"></div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4}>
              <div className={Style.right} data-aos="fade-left"></div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
