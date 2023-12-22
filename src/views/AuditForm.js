// TableList.jsx
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Audit from "components/AuditForm/AuditFormMaker";

function AuditForm() {
  const navigate = useHistory();
  const [currentIndex, setCurrentIndex] = useState(1);
  const [currentForm, setCurrentForm] = useState(1);
  const [isSingleForm, setIsSingleForm] = useState(true);

  const [formDataList, setFormDataList] = useState([
    {
      formIndex: 1,
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
    },
  ]);

  const handleNextForm = () => {
    console.log(formDataList[currentIndex - 1]);
    if (validateForm(formDataList[currentIndex - 1])) {
      setIsSingleForm(true);
      setCurrentIndex(currentIndex + 1);
      setFormDataList([getEmptyFormDataNextForm()]);
      setCurrentForm(1);
    } else {
      alert("Please fill in all fields before proceeding.");
    }
  };

  const handleSubmit = () => {
    if (validateForm(formDataList[currentIndex - 1])) {
      console.log("Forms submitted:", formDataList);
      navigate.push("/dashboard");
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  const handleAddForm = () => {
    setFormDataList([...formDataList, getEmptyFormData()]);
    //setCurrentIndex(currentIndex + 1);
    setCurrentForm(currentForm + 1);
    setIsSingleForm(false);
  };

  const getEmptyFormData = () => ({
    formIndex: `${currentIndex}.${currentForm}`,
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

  const getEmptyFormDataNextForm = () => ({
    formIndex: `${currentIndex + 1}`,
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
  const validateForm = (formData) => {
    for (const key in formData) {
      if (formData[key].length === 0) {
        return false;
      }
    }
    return true;
  };

  const handleFieldChange = (fieldName, value, formIndex) => {
    const updatedFormDataList = [...formDataList];
    updatedFormDataList[formIndex] = {
      ...updatedFormDataList[formIndex],
      [fieldName]: value,
    };
    setFormDataList(updatedFormDataList);
  };

  return (
    <>
      {isSingleForm ? (
        <Audit
          key={currentIndex}
          currentForm={currentIndex}
          onInputChange={(fieldName, value) =>
            handleFieldChange(fieldName, value, currentIndex - 1)
          }
        />
      ) : (
        formDataList.map((formData, index) => (
          <Audit
            currentForm={formData.formIndex}
            formTitle={`Hehe boi ${currentIndex + 1}`}
            onInputChange={(fieldName, value) =>
              handleFieldChange(fieldName, value, index)
            }
            formData={formData}
          />
        ))
      )}
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

        <Button
          variant="info"
          style={{ marginLeft: "25px" }}
          onClick={handleAddForm}
        >
          Add Findings
        </Button>
      </div>
    </>
  );
}

export default AuditForm;
