import React from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Form,
  Navbar,
  Nav,
  Container,
  Row,
  Col,
} from "react-bootstrap";
function AuditObservation() {
  return (
    <>
      <Container fluid
      style={{
        display: 'flex',
        width: '100%'
      }}>
        <Row
        style={{
          width: '100%',
          justifyContent: 'center'
        }}>
          <Col md="8">
            <Card
            style={{
              display: "flex",
              width:'100%',
              justifyContent:'center'
            }}
            >
              <Card.Header>
                <Card.Title as="h4">Assign Audit</Card.Title>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <Form.Group>
                        <label>Company (disabled)</label>
                        <Form.Control
                          defaultValue="Al-Meezan Group"
                          disabled
                          placeholder="Company"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="px-1" md="3">
                      <Form.Group>
                        <label>Department</label>
                        <Form.Control
                          defaultValue="dept"
                          placeholder="Department"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <h4>Auditor</h4>
                  <Row>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Auditor ID</label>
                        <Form.Control
                          defaultValue="1054"
                          placeholder="Auditor ID"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="pr-1" md="6">
                      <Form.Group>
                        <label>Full Name</label>
                        <Form.Control
                          defaultValue="Andrew Birch"
                          placeholder="full name"
                          type="text"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  <h4>Audit</h4>
                  <Row>
                    <Col  className="pr-1" md="6">
                      {/* <ReactDatePicker></ReactDatePicker> */}
                      <Form.Group>
                        <label>Start Date</label>
                        <Form.Control
                          defaultValue="00-00-00"
                          placeholder="start date"
                          type="date"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                    <Col  className="pr-1" md="6">
                      {/* <ReactDatePicker></ReactDatePicker> */}
                      <Form.Group>
                        <label>End Date</label>
                        <Form.Control
                          defaultValue="00-00-00"
                          placeholder="end date"
                          type="date"
                        ></Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                  
                  
                  <Button
                    className="btn-fill pull-right"
                    type="submit"
                    variant="info"
                  >
                    Assign
                  </Button>
                  <div className="clearfix"></div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AuditObservation;
