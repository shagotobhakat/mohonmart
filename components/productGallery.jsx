"use client";
import { Container, Row, Col } from "react-bootstrap";
import Style from "./productGallery.module.css";
import Image from "next/image";
import Link from "next/link";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { Cosmetics } from '@/components/cosmetics';

export default function ProductGallery() {
  return (
    <Container className={Style.main}>
      <Row>
        <Col lg={12}>
          <div className={Style.bar}>
            <div className="d-flex justify-content-center h-100">
              <div className={Style.search}>
                <input
                  type="text"
                  className={Style.searchInput}
                  placeholder="search..."
                  name=""
                />
                <Link href="#">
                  <div className={Style.searchIcon}>
                    <i className="bi bi-search"></i>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={12}>
          <div className={Style.accordion}>
            <Row>
              <Col lg={3} md={4} sm={12} xs={12}>
                <div className={Style.filterOne}>
                  <Row>
                    <Col lg={6} md={6} sm={6} xs={6}>
                      <p className={Style.left}>Filter</p>
                    </Col>
                    <Col lg={6} md={6} sm={6} xs={6}>
                      <p className={Style.rightOne}>Reset</p>
                    </Col>
                  </Row>
                </div>
                <Accordion defaultActiveKey="0" flush>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Category</Accordion.Header>
                    <Accordion.Body>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">Keyboard</span>
                      </label>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">Mouse</span>
                      </label>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">Monitor</span>
                      </label>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">RAM</span>
                      </label>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Brand</Accordion.Header>
                    <Accordion.Body>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">ASUS</span>
                      </label>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">HP</span>
                      </label>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">Dell</span>
                      </label>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">Lenevo</span>
                      </label>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Price Range</Accordion.Header>
                    <Accordion.Body>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">1000-2000</span>
                      </label>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">2000-3000</span>
                      </label>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">3000-4000</span>
                      </label>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">4000-5000</span>
                      </label>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Storage</Accordion.Header>
                    <Accordion.Body>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">512</span>
                      </label>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">1T</span>
                      </label>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">2T</span>
                      </label>
                      <label className="checkbox-wrapper">
                        <input type="checkbox" />
                        <div className="checkmark">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor">
                            <path
                              d="M20 6L9 17L4 12"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <span className="label">3T</span>
                      </label>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col lg={9} md={8} sm={12} xs={12}>
                <Row>
                  <Col className={Style.card} lg={4} md={6}>
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
                    <div className={Style.filter}>
                      <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <h3 className={Style.leftOne}>Accessories</h3>
                          <p className={Style.leftTwo}>500 BDT</p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <div className={Style.right}>
                            <Button href="/details" variant="outline-dark">
                              Details
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col className={Style.card} lg={4} md={6}>
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
                    <div className={Style.filter}>
                      <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <h3 className={Style.leftOne}>Accessories</h3>
                          <p className={Style.leftTwo}>500 BDT</p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <div className={Style.right}>
                            <Button href="/details" variant="outline-dark">
                              Details
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col className={Style.card} lg={4} md={6}>
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
                    <div className={Style.filter}>
                      <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <h3 className={Style.leftOne}>Accessories</h3>
                          <p className={Style.leftTwo}>500 BDT</p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <div className={Style.right}>
                            <Button href="/details" variant="outline-dark">
                              Details
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col className={Style.card} lg={4} md={6}>
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
                    <div className={Style.filter}>
                      <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <h3 className={Style.leftOne}>Clothing</h3>
                          <p className={Style.leftTwo}>500 BDT</p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <div className={Style.right}>
                            <Button href="/details" variant="outline-dark">
                              Details
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col className={Style.card} lg={4} md={6}>
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
                    <div className={Style.filter}>
                      <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <h3 className={Style.leftOne}>Clothing</h3>
                          <p className={Style.leftTwo}>500 BDT</p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <div className={Style.right}>
                            <Button href="/details" variant="outline-dark">
                              Details
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col className={Style.card} lg={4} md={6}>
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
                    <div className={Style.filter}>
                      <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <h3 className={Style.leftOne}>Clothing</h3>
                          <p className={Style.leftTwo}>500 BDT</p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <div className={Style.right}>
                            <Button href="/details" variant="outline-dark">
                              Details
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col className={Style.card} lg={4} md={6}>
                    <div className="gal-image" data-aos="zoom-in">
                      <Link href="/products/men">
                        <Image
                          src="/category3.png"
                          alt="image alt"
                          layout="responsive"
                          height={300}
                          width={400}
                        />
                      </Link>
                    </div>
                    <div className={Style.filter}>
                      <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <h3 className={Style.leftOne}>Cosmetics</h3>
                          <p className={Style.leftTwo}>500 BDT</p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <div className={Style.right}>
                            <Button href="/details" variant="outline-dark">
                              Details
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col className={Style.card} lg={4} md={6}>
                    <div className="gal-image" data-aos="zoom-in">
                      <Link href="/products/men">
                        <Image
                          src="/category3.png"
                          alt="image alt"
                          layout="responsive"
                          height={300}
                          width={400}
                        />
                      </Link>
                    </div>
                    <div className={Style.filter}>
                      <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <h3 className={Style.leftOne}>Cosmetics</h3>
                          <p className={Style.leftTwo}>500 BDT</p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <div className={Style.right}>
                            <Button href="/details" variant="outline-dark">
                              Details
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                  <Col className={Style.card} lg={4} md={6}>
                    <div className="gal-image" data-aos="zoom-in">
                      <Link href="/products/men">
                        <Image
                          src="/category3.png"
                          alt="image alt"
                          layout="responsive"
                          height={300}
                          width={400}
                        />
                      </Link>
                    </div>
                    <div className={Style.filter}>
                      <Row>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <h3 className={Style.leftOne}>Cosmetics</h3>
                          <p className={Style.leftTwo}>500 BDT</p>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                          <div className={Style.right}>
                            <Button href="/details" variant="outline-dark">
                              Details
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
