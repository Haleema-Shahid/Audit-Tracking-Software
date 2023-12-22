import { useUser } from "context/UserContext";
import React, { useEffect, useState } from "react";

// react-bootstrap components
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { getAllAudits } from "service/AuditAPI";

function AssignedAuditsList() {
  const history = useHistory();
  const { isLoggedIn, user } = useUser();
  const [audits, setAudits] = useState([
    {
      id: "",
      startDate: "",
      endDate: "",
      status: "",
      assignedBy: {
        id: "",
        email: "",
        name: "",
        role: "",
      },
      assignedTo: {
        id: "",
        email: "",
        name: "",
        password: "",
        role: "",
      },
      department: {
        id: "",
        name: "",
      },
    },
  ]);

  useEffect(() => {
    //getAllAudits();
    if (user.role == "AUDITOR") {
      const fetchData = async () => {
        try {
          const auditData = await getAllAudits();
          setAudits(auditData.data);
          console.log("Data : ", auditData.data);
        } catch (error) {
          console.error("Error fetching audit data:", error);
        }
      };
      fetchData();
    }
  }, []);

  const navigateToAuditForm = (audit) => {
    console.log("AUdit id ", audit.department.name, "  ", audit.id);
    history.push(
      `/admin/audit-form?deptName=${audit.department.name}&auditId=${audit.id}`
    );
  };

  if (isLoggedIn) {
    if (user.role == "AUDITOR") {
      return (
        <>
          <Container fluid>
            <Row>
              <Col md="12">
                <Card className="strpied-tabled-with-hover">
                  <Card.Header>
                    <Card.Title as="h4">Assigned Audits</Card.Title>
                    <p className="card-category">
                      Here are audits assigned to you.
                    </p>
                  </Card.Header>
                  <Card.Body className="table-full-width table-responsive px-0">
                    <Table className="table-hover table-striped">
                      <thead>
                        <tr>
                          <th className="border-0">ID</th>
                          <th className="border-0">Assigned By</th>
                          <th className="border-0">Department</th>
                          <th className="border-0">Start Date</th>
                          <th className="border-0">End Date</th>
                          <th className="border-0">Status</th>
                          <th className="border-0">Fill Audit Form</th>
                        </tr>
                      </thead>
                      <tbody>
                        {audits.map((audit) => (
                          <tr key={audit.id}>
                            <td>{audit.id}</td>
                            <td>{audit.assignedBy.name}</td>
                            <td>{audit.department.name}</td>
                            <td>{audit.startDate}</td>
                            <td>{audit.endDate}</td>
                            <td>{audit.status}</td>
                            {/* ... other table data based on your audit DTO */}
                            <td>
                              <Button
                                variant="primary"
                                onClick={() => navigateToAuditForm(audit)}
                              >
                                Go To Form
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      );
    } else {
      history.goBack();
    }
  } else {
    history.push("/admin/login");
  }
}

export default AssignedAuditsList;
