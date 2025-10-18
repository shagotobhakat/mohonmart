import Link from "next/link";
import Image from "next/legacy/image";
import { Container, Row, Col } from "react-bootstrap";

export default function CategoryItems() {
  return (
    <>
      <Container className="gallerycategory">
        <Row>
          <Col lg={12}>
            <div className="gal-head-one">
              <h2
                className="gal-head-text"
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000">
                Product Category
              </h2>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="gal-image" data-aos="zoom-in">
              <Link href="/products/men">
                <Image
                  src="/category1.png"
                  alt="image alt"
                  layout="responsive"
                  height={300}
                  width={400}
                />
              </Link>
            </div>
            <div>
              <h3 className="gal-text">Accessories</h3>
            </div>
          </Col>
          <Col lg={3} md={6}>
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
            <div>
              <h3 className="gal-text">Clothing</h3>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="gal-image" data-aos="zoom-in">
              <Link href="/products/boys">
                <Image
                  src="/category3.png"
                  alt="image alt"
                  layout="responsive"
                  height={300}
                  width={400}
                />
              </Link>
            </div>
            <div>
              <h3 className="gal-text">Cosmetics</h3>
            </div>
          </Col>
          <Col lg={3} md={6}>
            <div className="gal-image" data-aos="zoom-in">
              <Link href="/products/girls">
                <Image
                  src="/category1.png"
                  alt="image alt"
                  layout="responsive"
                  height={300}
                  width={400}
                />
              </Link>
            </div>
            <div>
              <h3 className="gal-text">Others</h3>
            </div>
          </Col>
        </Row>
        <Container style={{ marginTop: "30px" }} className="showContain">
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
