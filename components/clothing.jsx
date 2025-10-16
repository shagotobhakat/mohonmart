import Link from "next/link";
import Image from "next/legacy/image";
import { Container, Row, Col } from "react-bootstrap";
import style from "./card.module.css";
import Button from "react-bootstrap/Button";

export default function Clothing() {
  return (
    <>
      <Container className="galleryone">
        <Row>
          <Col lg={12}>
            <div className="gal-head-one">
              <h2
                className="gal-head-text"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                Clothing
              </h2>
            </div>
          </Col>

          <Col className={style.card} lg={3} md={6}>
            <div className="gal-image" data-aos="zoom-in">
              <Link href="/products/men">
                <Image
                  src="/category2.png"
                  alt="image alt"
                  layout="responsive"
                  height={300}
                  width={400}
                />
              </Link>
            </div>
            <div className={style.filter}>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h3 className={style.leftOne}>Clothing</h3>
                  <p className={style.leftTwo}>500 BDT</p>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <div className={style.right}>
                    <Button href="/details" variant="outline-dark">
                      Details
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className={style.card} lg={3} md={6}>
            <div className="gal-image" data-aos="zoom-in">
              <Link href="/products/women">
                <Image
                  src="/category2.png"
                  alt="image alt"
                  layout="responsive"
                  height={300}
                  width={400}
                />
              </Link>
            </div>
            <div className={style.filter}>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h3 className={style.leftOne}>Clothing</h3>
                  <p className={style.leftTwo}>500 BDT</p>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <div className={style.right}>
                    <Button href="/details" variant="outline-dark">
                      Details
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className={style.card} lg={3} md={6}>
            <div className="gal-image" data-aos="zoom-in">
              <Link href="/products/boys">
                <Image
                  src="/category2.png"
                  alt="image alt"
                  layout="responsive"
                  height={300}
                  width={400}
                />
              </Link>
            </div>
            <div className={style.filter}>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h3 className={style.leftOne}>Clothing</h3>
                  <p className={style.leftTwo}>500 BDT</p>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <div className={style.right}>
                    <Button href="/details" variant="outline-dark">
                      Details
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col className={style.card} lg={3} md={6}>
            <div className="gal-image" data-aos="zoom-in">
              <Link href="/products/girls">
                <Image
                  src="/category2.png"
                  alt="image alt"
                  layout="responsive"
                  height={300}
                  width={400}
                />
              </Link>
            </div>
            <div className={style.filter}>
              <Row>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <h3 className={style.leftOne}>Clothing</h3>
                  <p className={style.leftTwo}>500 BDT</p>
                </Col>
                <Col lg={6} md={6} sm={6} xs={6}>
                  <div className={style.right}>
                    <Button href="/details" variant="outline-dark">
                      Details
                    </Button>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Container style={{ marginTop: "40px" }} className="showContain">
          <Row>
            <Col lg={10} md={8} sm={6} xs={6}>
              <div
                style={{
                  marginTop: "15px",
                  height: "2px",
                  width: "100%",
                  backgroundColor: "#1B7434",
                }}></div>
            </Col>
            <Col lg={2} md={4} sm={6} xs={6}>
              <div className="galHeadTwo">
                <Link href="/gallery">
                  <p>Show More</p>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}
