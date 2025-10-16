import styles from "./productDetails.module.css";
import GalleryLight from "./lightGallery";
import { Container, Row, Col } from "react-bootstrap";

const ProductDetails = (props) => {
  const product = props?.product;

  return (
    <>
      <Container className={styles.productDetails}>
        <Row>
          <Col lg={8} xs={12}>
            <div data-aos="zoom-out-up">
              <GalleryLight ></GalleryLight>
            </div>
          </Col>
          <Col lg={4} xs={12}>
            <div className={styles.rightText}>
              <h5 data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="500">
                Article : ####
              </h5>
              <h5 data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="700">
                Name : ####
              </h5>
              <h5 data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="900">
                Type : ####
              </h5>
              <h5 data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1100">
                Sizes : ####
              </h5>
              <h5 data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1300">
                Colors : ####
              </h5>
              <h5 data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1500">
                Descriptions : ####
              </h5>
              <h5 data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1700">
                Price : ####
              </h5>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
