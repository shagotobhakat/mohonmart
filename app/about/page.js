import { Container, Row, Col } from "react-bootstrap";
import Proprietor from "@/components/proprietor";
import About from "@/components/about";

export default function Page() {
  return (
    <>
      <div style={{marginTop:"150px", marginBottom:"100px"}}>
        <Proprietor />
        <Container>
          <Row>
            <Col lg={12}>
              <About />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}