import React from "react";
import "./FirstPage.css";

export const FirstPage = () => {
  return (
    <div className="table-admission">
      {/* ADDMISSION DETAILS SECTION  */}
      <h4 className="Header-content">Admission Details</h4>
      <label className="add-label">*Hall Ticket No:</label>
      <input type="text" className="input-full" size="190"></input>
      <label className="add-label">*Name of the Candidate (Mr/Mrs/Miss):</label>
      <input type="text" className="add-input-first" size="140"></input>
      <h6 className="letter">(IN BLOCK LETTERS AS PER SSC)</h6>
      <label className="add-label">*Aadhar ID (UID) :</label>
      <input type="text" className="add-input-first" size="70"></input>
      <label className="add-label">*Pan Card (if nay) :</label>
      <input type="text" className="add-input-first" size="70"></input>
      <label className="add-label">*Name of the Father:</label>
      <input type="text" className="add-input-first" size="180"></input>
      <h6 className="letter">(IN BLOCK LETTERS AS PER SSC)</h6>
      <label className="add-label">*Name of the Mother:</label>
      <input type="text" className="add-input-first" size="180"></input>
      <h6 className="letter">(IN BLOCK LETTERS AS PER SSC)</h6>
      <label className="add-label">*Date of Birth ( AS PER SSC):</label>
      <input type="text" className="add-input-first" size="90"></input>
      <b>(DD/MM/YYY)</b>
      <label className="add-label">Sex:</label>
      <input type="radio" value="male" name="gender" />
      <label className="add-label">Male </label>
      <label className="add-label">
        <input type="radio" value="female" name="gender" />
        Female
      </label>
      {/* TYPE OF ADMISSION SECTION */}
      <h5 className="type-of">Type of Admission : Management/Convener/Spot</h5>
      <div className="Details">
        <label className="add-label">Admission Category:</label>
        <input type="text" className="add-input-first" size="80"></input>
        <label className="add-label">Caste:</label>
        <input type="text" className="add-input-first" size="80"></input>
        <h6 className="letter">(SC, ST, OBC, Genral, GIO etc.)</h6>
        <label className="add-label">Religion:</label>
        <input type="text" className="add-input-first" size="90"></input>
        <label className="add-label"> Nationality:</label>
        <input type="text" className="add-input-first" size="90"></input>
        <label className="add-label">Mother tongue:</label>
        <input type="text" className="add-input-first" size="80"></input>
        <label className="add-label"> Blood Group:</label>
        <input type="text" className="add-input-first" size="80"></input>
        <label className="add-label">E-mail ID:</label>
        <input type="text" className="add-input-first" size="200"></input>
        <label className="add-label">Father Occupation:</label>
        <input type="text" className="add-input-first" size="80"></input>
        <label className="add-label"> Phone:</label>
        <input type="text" className="add-input-first" size="80"></input>
        <label className="add-label">Mother Occupation:</label>
        <input type="text" className="add-input-first" size="80"></input>
        <label className="add-label"> Phone:</label>
        <input type="text" className="add-input-first" size="80"></input>
        <label className="add-label">Identification Marks:</label>
        <input type="text" className="add-input-first" size="180"></input>
      </div>
      {/* ACADEMIC DETAILS SECTION  */}
      <h4 className="Header-content">
        Academic Details (ssc/CBSC/X/ICSE Std.Details)
      </h4>
      <div className="Details">
        <label className="add-label">Board Of Exam:</label>
        <input type="text" className="add-input-first" size="190"></input>
        <label className="add-label">Name Of School:</label>
        <input type="text" className="add-input-first" size="190"></input>
        <label className="add-label"> Hall Ticket No:</label>
        <input type="text" className="add-input-first" size="30"></input>
        <label className="add-label">Total Marks Obtained:</label>
        <input type="text" className="add-input-first" size="30"></input>
        <label className="add-label"> Maximum Marks:</label>
        <input type="text" className="add-input-first" size="40"></input>
        <label className="add-label"> Passing Month :</label>
        <input type="text" className="add-input-first" size="30"></input>
        <label className="add-label">Year:</label>
        <input type="text" className="add-input-first" size="30"></input>
        <label className="add-label"> Percentage Marks Scored:</label>
        <input type="text" className="add-input-first" size="20"></input>
        <label className="add-label"> Grade:</label>
        <input type="text" className="add-input-first" size="20"></input>
        <h4>(Note:-Attach Attested Photo Copy of 10th std Marks Card)</h4>
      </div>
    </div>
  );
};
