import React from "react";
import "./OfficeUseOnly.css";

export const OfficeUseOnly = () => {
  return (
    <div className="admission-content">
      <div className="office_section">
        <h3 className="pic">Passport Size Photo</h3>
      </div>
      <div className="office_content">
        <h6 className="office_use">
          <b>For Office Use Only</b>
        </h6>
        <h6 className="office_use">
          For Payment details (details of DD/Pay Order)
        </h6>
        <div className="for_office_useOnly">
          <label className="add-label">1.DD.No</label>
          <input type="text" className="add-input-first" />
          <label className="add-label">Amount</label>
          <input type="text" className="add-input-first"></input>
          <label className="add-label">Date</label>
          <input type="text" className="add-input-first"></input>
          <label className="add-label">Bank</label>
          <input type="text" className="add-input-first"></input>

          <br />

          <br />
          <label className="add-label">2.DD.No</label>
          <input type="text" className="add-input-first"></input>
          <label className="add-label">Amount</label>
          <input type="text" className="add-input-first" />
          <label className="add-label">Date</label>
          <input type="text" className="add-input-first"></input>
          <label className="add-label">Bank</label>
          <input type="text" className="add-input-first" />

          <br />
          <br />
          <br />
          <br />

          <label className="add-label">NSAKCET Regd No</label>
          <input type="text" size="40" className="add-input-first"></input>
          <h6 className="signature">
            <b> Signature</b> <br />
            <b> Officer Incharge of Addmission Counter </b>
          </h6>
        </div>
      </div>
    </div>
  );
};
