// TableList.jsx
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button } from "react-bootstrap";
import Audit from "components/AuditForm/AuditFormMaker";
import { useUser } from "context/UserContext";
import { saveFormData } from "service/FindingsAPI";

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

  const handleNextForm = async () => {
    console.log(formDataList[currentIndex - 1]);
    if (validateForm(formDataList[currentIndex - 1])) {
      try {
        for (const formData of formDataList) {
          await saveFormData(formData);
        }
        console.log("All forms submitted successfully");
        navigate.push("/admin/dashboard");
        setIsSingleForm(true);
        setCurrentIndex(currentIndex + 1);
        setFormDataList([getEmptyFormDataNextForm()]);
        setCurrentForm(1);
      } catch (error) {
        console.error("Error saving form data:", error);
        alert("Failed to save form data. Please try again.");
      }
    } else {
      alert("Please fill in all fields before proceeding.");
    }
  };

  const handleSubmit = async () => {
    if (validateForm(formDataList[currentIndex - 1])) {
      try {
        for (const formData of formDataList) {
          await saveFormData(formData);
        }
        console.log("All forms submitted successfully");
        navigate.push("/admin/dashboard");
      } catch (error) {
        console.error("Error saving form data:", error);
        alert("Failed to save form data. Please try again.");
      }
    } else {
      alert("Please fill in all fields before submitting.");
    }
  };

  const handleAddForm = () => {
    const latestForm = formDataList[formDataList.length - 1];
    // Check if the latest form is valid
    if (validateForm(latestForm)) {
      setFormDataList([...formDataList, getEmptyFormData()]);
      //setCurrentIndex(currentIndex + 1);
      setCurrentForm(currentForm + 1);
      setIsSingleForm(false);
    } else {
      alert("Fill all fields");
    }
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

  const { isLoggedIn, user } = useUser();
  if (isLoggedIn) {
    if (user.role == "AUDITOR") {
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
    } else {
      navigate.goBack();
    }
  } else {
    navigate.push("/admin/login");
  }
}

export default AuditForm;
