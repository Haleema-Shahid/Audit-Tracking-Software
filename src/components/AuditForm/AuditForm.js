import React, { useState } from "react";

// react-bootstrap components
import { Card, Table, Container, Row, Col } from "react-bootstrap";
import { Input } from "reactstrap";

function AuditForm({ currentForm, formTitle, onInputChange }) {
  const [selectedValue, setSelectedValue] = useState("");

  const dropDown = (e) => {
    const { value } = e.target;
    setSelectedValue(value);
    onInputChange("controlsInPlace", value);
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <>
      <Container fluid>
        <Row>
          <Col md="12">
            <Card className="">
              <Card.Body className="table-full-width table-responsive px-0">
                <Table className="table-hover table-striped">
                  <thead>
                    <tr>
                      <th
                        className="font-weight-bold border"
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {currentForm}
                      </th>
                      <th
                        colSpan={8}
                        className="font-weight-bold border"
                        onChange={(e) => handleFieldChange(e)}
                        style={{
                          fontSize: "18px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        <Input
                          placeholder="Title"
                          name="formTitle"
                          onChange={(e) => handleFieldChange(e)}
                          style={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            color: "black",
                            border: "none",
                            alignContent: "center",
                            justifyContent: "center",
                          }}
                        />
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <th className="font-weight-bold border" colSpan={8}>
                      Findings
                    </th>
                    <tr colSpan={8}>
                      <td colSpan={8}>
                        <Input
                          name="findings"
                          style={{ width: "100%", border: "none" }}
                          onChange={(e) => handleFieldChange(e)}
                        />
                      </td>
                    </tr>
                    <th className="font-weight-bold border" colSpan={8}>
                      Risk
                    </th>

                    <tr colSpan={8}>
                      <td colSpan={8}>
                        <Input
                          name="risk"
                          style={{ width: "100%", border: "none" }}
                          onChange={(e) => handleFieldChange(e)}
                        />
                      </td>
                    </tr>
                    <th
                      colSpan={8}
                      className="font-weight-bold border bg-primary"
                    >
                      Action Plan
                    </th>
                    <tr>
                      <th style={{ height: "75px" }}>
                        Controls in Place (Y/N)
                      </th>
                      <th className="border" style={{ height: "75px" }}>
                        Actions Required
                      </th>
                      <th className="border" style={{ height: "75px" }}>
                        Deficiencies
                      </th>
                      <th className="border" style={{ height: "75px" }}>
                        Control Effectiveness
                      </th>
                      <th className="border" style={{ height: "75px" }}>
                        Finding Rating
                      </th>
                      <th className="border" style={{ height: "75px" }}>
                        Recommendation
                      </th>
                      <th className="border" style={{ height: "75px" }}>
                        Responsible Department
                      </th>
                      <th className="border" style={{ height: "75px" }}>
                        Timeline
                      </th>
                    </tr>
                    <tr>
                      <td className="border">
                        <select
                          name="controlsInPlace"
                          onChange={(e) => dropDown(e)}
                          value={selectedValue}
                          style={{
                            border: "none",
                            width: "100%",
                            height: "100%",
                            padding: "5px",
                          }}
                        >
                          <option onClick={(e) => dropDown(e)} value="yes">
                            Yes
                          </option>
                          <option onClick={(e) => dropDown(e)} value="no">
                            No
                          </option>
                        </select>
                      </td>
                      <td className="border">
                        <Input
                          onChange={(e) => handleFieldChange(e)}
                          name="actionsRequired"
                          actionsRequired
                          style={{ border: "none" }}
                        />
                      </td>
                      <td className="border">
                        <Input
                          name="deficiencies"
                          onChange={(e) => handleFieldChange(e)}
                          style={{ border: "none" }}
                        />
                      </td>
                      <td className="border">
                        <Input
                          name="controlEffectiveness"
                          onChange={(e) => handleFieldChange(e)}
                          style={{ border: "none" }}
                        />
                      </td>
                      <td className="border">
                        <Input
                          name="findingRating"
                          onChange={(e) => handleFieldChange(e)}
                          style={{ border: "none" }}
                        />
                      </td>
                      <td className="border">
                        <Input
                          name="recommendation"
                          onChange={(e) => handleFieldChange(e)}
                          style={{ border: "none" }}
                        />
                      </td>
                      <td className="border">
                        <Input
                          name="responsibleDepartment"
                          onChange={(e) => handleFieldChange(e)}
                          style={{ border: "none" }}
                        />
                      </td>

                      <td className="border">
                        <Input
                          name="timeline"
                          onChange={(e) => handleFieldChange(e)}
                          style={{ border: "none" }}
                        />
                      </td>
                    </tr>
                    <th className="font-weight-bold border" colSpan={8}>
                      Management Comments
                    </th>
                    <tr colSpan={8}>
                      <td colSpan={8}>
                        <Input
                          name="managementComments"
                          style={{ width: "100%" }}
                          onChange={(e) => handleFieldChange(e)}
                        />
                      </td>
                    </tr>
                    <th className="font-weight-bold border" colSpan={8}>
                      Post - Management Comments
                    </th>
                    <tr colSpan={8}>
                      <td colSpan={8}>
                        <Input
                          name="postManagementComments"
                          style={{ width: "100%" }}
                          onChange={(e) => handleFieldChange(e)}
                        />
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AuditForm;
