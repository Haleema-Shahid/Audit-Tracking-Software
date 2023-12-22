import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/AssignAudit.css"; // Adjust the path accordingly
import { getAllDepartments } from "service/DepartmentsAPI";
import { getAllAuditors } from "service/UserAPI";

function AssignAudit() {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedAuditor, setSelectedAuditor] = useState(null);
  const [auditorId, setAuditorId] = useState();
  const [auditorName, setAuditorName] = useState();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [companyName, setCompanyName] = useState("Al-Meezan Group"); // Default company name

  const [departmentOptions,setDepartmentOptions] = useState([]);

  const [auditorOptions,setAuditorOptions] = useState([]);

  const getDepartments = async () => {
    try {
      const response = await getAllDepartments();
      const departmentData = response.data.map((department) => ({
        value: department.id,
        label: department.name
      }))

      setDepartmentOptions(departmentData);
    }
    catch(error)
    {
      alert("Error in fetching departments");
    }
  }

  const getAuditors = async () => {
    try{
      const response = await getAllAuditors();
      const auditorData = response.data.map((auditor) => ({
        value: auditor.id,
        label: auditor.name
      }))

      setAuditorOptions(auditorData);
    }
    catch(error)
    {
      alert("Error in fetching auditors");
    }
  }




  const handleDepartmentChange = (e) => {
    const selectedOption = departmentOptions.find(
      (option) => option.value === e.target.value
    );
    setSelectedDepartment(selectedOption);
  };

  const handleAuditorChange = (e) => {
    const selectedOption = auditorOptions.find(
      (option) => option.value === parseInt(e.target.value)
    );
    setSelectedAuditor(selectedOption);
    setAuditorId(selectedOption.value);
    setAuditorName(selectedOption.label);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic for handling form submission here
    console.log("Form submitted:", {
      selectedDepartment,
      selectedAuditor,
      auditorId,
      auditorName,
      startDate,
      endDate
    });
  };

  useEffect(() => {
    getDepartments();
    getAuditors();
  },[])

  return (
    <>

      <form className="assign-audit-form" onSubmit={handleSubmit}>
        <h4>Assign Audit</h4>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Company (disabled):</label>
            <input
              className="form-control"
              type="text"
              value={companyName}
              disabled
            />
          </div>
          <div className="form-group col-md-6">
            <label>Department:</label>
            <select
              className="form-control"
              value={selectedDepartment ? selectedDepartment.value : ""}
              onChange={handleDepartmentChange}
            >
              <option value="" disabled>
                Select a department
              </option>
              {departmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label><h4>Auditor:</h4></label>
            <select
              className="form-control"
              value={selectedAuditor ? selectedAuditor.value : ""}
              onChange={handleAuditorChange}
            >
              <option value="" disabled>
                Select an Auditor
              </option>
              {auditorOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Auditor ID (disabled):</label>
            <input className="form-control" type="text" value={auditorId} disabled />
          </div>
          <div className="form-group col-md-6">
            <label>Full Name (disabled):</label>
            <input className="form-control" type="text" value={auditorName} disabled />
          </div>
        </div>

        <h4>Audit</h4>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label>Start Date:</label>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              className="form-control date-picker"
              dateFormat="MM/dd/yyyy"
            />
          </div>
          <div className="form-group col-md-6">
            <label>End Date:</label>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              className="form-control date-picker"
              dateFormat="MM/dd/yyyy"
            />
          </div>
        </div>

        <div className="text-center">
          <button className="btn btn-primary" type="submit">
            Assign
          </button>
        </div>
      </form> 
    </>
  );
}

export default AssignAudit;
