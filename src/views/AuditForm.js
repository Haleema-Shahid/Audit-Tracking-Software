// TableList.jsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import AuditForm from "components/AuditForm/AuditForm";
function Audit() {
  const navigate = useHistory();
  const [currentForm, setCurrentForm] = useState(1);
  const [formData, setFormData] = useState({
    formTitle: "",
    findings: "",
    risk: "",
    controlsInPlace: "",
    actionsRequired: "",
    deficiencies: "",
    controlEffectiveness: "",
    findingRating: "",
    recommendation: "",
    responsibleDepartment: "",
    timeline: "",
    managementComments: "",
    postManagementComments: "",
  });

  const handleNextForm = () => {
    if (validateForm()) {
      setCurrentForm(currentForm + 1);
      if (
        formData.controlsInPlace != "no" ||
        formData.controlsInPlace != "yes"
      ) {
        formData.controlsInPlace = "yes";
      }
      console.log("DATA : ", formData);
      setFormData({
        formTitle: "",
        findings: "",
        risk: "",
        controlsInPlace: "",
        actionsRequired: "",
        deficiencies: "",
        controlEffectiveness: "",
        findingRating: "",
        recommendation: "",
        responsibleDepartment: "",
        timeline: "",
        managementComments: "",
        postManagementComments: "",
      });
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      if (
        formData.controlsInPlace != "no" ||
        formData.controlsInPlace != "yes"
      ) {
        formData.controlsInPlace = "yes";
      }
      console.log("Form submitted:", formData);
      navigate.push("/dashboard");
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  const validateForm = () => {
    if (
      formData.actionsRequired.length == 0 ||
      formData.controlEffectiveness.length == 0 ||
      formData.deficiencies.length == 0 ||
      formData.findingRating.length == 0 ||
      formData.findings.length == 0 ||
      formData.formTitle.length == 0 ||
      formData.managementComments.length == 0 ||
      formData.postManagementComments.length == 0 ||
      formData.recommendation.length == 0 ||
      formData.responsibleDepartment.length == 0 ||
      formData.risk.length == 0
    ) {
      return false;
    }
    return true;
  };

  const handleFieldChange = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  return (
    <>
      <AuditForm
        key={currentForm} // This will force a remount of AuditForm when currentForm changes
        currentForm={currentForm}
        formTitle="Hehe boi"
        onInputChange={handleFieldChange}
      />
      <div
        style={{
          paddingLeft: "11px",
          display: "flex",
          flexDirection: "row",
          width: "100%",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <Button
          variant="primary"
          onClick={handleNextForm}
          style={{ marginRight: "25px" }}
        >
          Next Form
        </Button>

        <Button variant="success" onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </>
  );
}

export default Audit;
