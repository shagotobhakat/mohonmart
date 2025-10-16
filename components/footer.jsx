import { Container, Row, Col } from "react-bootstrap";
import Style from "./footer.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <Container fluid id="contact">
      <div className={Style.main}>
        <Container>
          <Row>
            <Col lg={12}>
              <div className={Style.body} data-aos="zoom-in">
                <p className={Style.text}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.
                </p>
                <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                  <p className={Style.textName}>Developed By</p>
                  <Link
                    href="https://shagoto-bhakat.vercel.app/"
                    target={"_blank"}
                    rel="noreferrer">
                    <h5 className={Style.textName}>Shagoto Bhakat</h5>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Container>
  );
}
