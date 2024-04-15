import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "@material-ui/core/Button";

// Styling
const link = {
  padding: "10px",
};

const Navbar = (props) => {
  return (
    <div className="navBar">
      <div>
        <Container>
          <Row>
            <Col md={4}>
              <div className="logoBox">
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <React.Fragment>
            <div className="box">
              <Nav>
                <Button
                  id="navBarButtons"
                  class="btn btn-primary active"
                  href="/"
                  role="button"
                  size="lg"
                >
                  Home
                </Button>
                <Nav.Item>
                  <Nav.Link style={link}></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Button
                    id="navBarButtons"
                    class="btn btn-primary active"
                    href="/about"
                    role="button"
                    size="lg"
                  >
                    About
                  </Button>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link style={link}></Nav.Link>
                </Nav.Item>
                <Nav.Item id="navBarButtons">
                  <Button
                    id="navBarButtons"
                    class="btn btn-primary active"
                    href="/booking"
                    role="button"
                    size="lg"
                  >
                    Request a Booking
                  </Button>
                </Nav.Item>
              </Nav>
            </div>
          </React.Fragment>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
