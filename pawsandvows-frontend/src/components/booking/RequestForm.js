import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import { Form, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

class RequestForm extends Component {
  state = {
    name: '',
    email: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    this.form.reset();
  };

  render() {
    const { date } = this.props;
    return (
      <Container>
        <br></br>
        <div>
          <Form ref={(form) => (this.form = form)} onSubmit={this.handleSubmit}>
            <Row>
              <Col>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  onChange={this.handleChange}
                />
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  onChange={this.handleChange}
                />
                <Form.Control
                  type="text"
                  value={`Selected Date: ${date.toLocaleDateString()}`}
                  readOnly
                />
                <Button type="submit">Book</Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    );
  }
}

export default RequestForm;