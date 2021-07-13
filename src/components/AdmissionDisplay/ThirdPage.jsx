import React from "react";
import "./ThirdPage.css";

export const ThirdPage = () => {
  return (
    <div>
      {/* -------------------Third Page Start------------------------------ */}
      <form>
        <h3 className="Header-content">
          <b> Address Details: (Local Guardian Address)</b>
        </h3>
        <label className="add-label">Guardian Name: </label>
        <input className="add-input" type="text" size="70" />
        <label className="add-label">Guardian Occupation: </label>
        <input className="add-input" type="text" size="60" />
        <label className="add-label">Relation with Guardian: </label>
        <input className="add-input" type="text" size="70" />
        <label className="add-label">Guardian E-mail ID : </label>
        <input className="add-input" type="text" size="60" />
        <label className="add-label">Addresss : </label>
        <input className="add-input" type="text" size="200" />
        <label className="add-label">Pin: </label>
        <input className="add-input" type="text" size="40" />
        <label className="add-label">Landline No.: </label>
        <input className="add-input" type="text" size="50" />
        <label className="add-label">Mobile No.: </label>
        <input className="add-input" type="text" size="50" />
        {/* ------------------Second Section----------------- */}
        <h3 className="Header-content">
          <b>Last Qualifying Examination Details:</b>
        </h3>
        <label className="add-label">Last Exam Name: </label>
        <input className="add-input" type="text" size="90" />
        <label className="add-label">Exam Year: </label>
        <input className="add-input" type="text" size="70" />
        <label className="add-label">Board or Univ. Name: </label>
        <input className="add-input" type="text" size="60" />
        <label className="add-label">Duration of Year: </label>
        <input className="add-input" type="text" size="60" />
        <label className="add-label">Total Marks Obtained: </label>
        <input className="add-input" type="text" size="30" />
        <label className="add-label">Total Max. Marks: </label>
        <input className="add-input" type="text" size="30" />
        <label className="add-label">Percentage of Marks: </label>
        <input className="add-input" type="text" size="30" /> <br />
        <label className="add-label">Class: </label>
        <input className="add-input" type="text" size="30" />
        {/* -------------Third Section----------------------- */}
        <h3 className="Header-content">
          <b>Eamcet/ECET/PGet Score Details:</b>
        </h3>
        <h2 className="cet">
          <b> Eamcet/ECET/PGet/Other Marks</b>
        </h2>
        <b>
          <label className="add-label">Eamcet/ECET/PGet Rank: </label>
          <input className="add-input" type="text" size="30" />

          <label className="add-label">Hall ticket No: </label>
          <input className="add-input" type="text" size="30" />

          <label className="add-label">Year of Exam: </label>
          <input className="add-input" type="text" size="30" />
        </b>
        {/* -----------------small Table-------------- */}
        <table className="table-content" border="2">
          <tr>
            <th></th>
            <th>Obtained Marks</th>
            <th>Max Marks</th>
          </tr>
          <tr>
            <td>Physics</td>
            <td>
              <input className="table-data" type="text" />
            </td>
            <td>
              <input className="table-data" type="text" />
            </td>
          </tr>

          <tr>
            <td>Chemistry</td>
            <td>
              <input className="table-data" type="text" />
            </td>
            <td>
              <input className="table-data" type="text" />
            </td>
          </tr>

          <tr>
            <td>Mathematics</td>
            <td>
              <input className="table-data" type="text" />
            </td>
            <td>
              <input className="table-data" type="text" />
            </td>
          </tr>

          <tr>
            <td>
              <input className="table-data" type="text" />
            </td>
            <td>
              <input className="table-data" type="text" />
            </td>
            <td>
              <input className="table-data" type="text" />
            </td>
          </tr>
        </table>
        {/* ----------------After Table Content---------------------- */}
        <p className="para">*For direct second year admission</p>
        <p className="para">
          I hereby declare that the particular furnished above are true,
          complete, and correct to the best of my knowledge and belief.
        </p>
        <div>
          <h3 className="date-place">
            <b>Date:</b>
          </h3>
          <h3 className="date-place">
            <b>Place:</b>
          </h3>
          <h3 className="signat">
            <b>Signature of Student</b>
          </h3>
        </div>
        <br />
        {/* -----------------Order List------------------------- */}
        <h3>
          <b>
            <i>Instruction:</i>
          </b>
        </h3>
        <ol className="order" type="1">
          <li>
            10<sup>th</sup> /SSC std and 12<sup>th</sup> /inter std attested
            photocopy of marks sheet to be attached with this form.
          </li>
          <li>
            The photocopy of admit card to be attached with this registration
            form
          </li>
          <li>
            Affix passport size colour photograph at the space provided in the
            form
          </li>
          <li>
            Additional sheet can be attached to provide diploma/degree level
            exam details
          </li>
          <li>
            Candidate changing branches/courses/ in the subsequent admission
            round are require to compulsorily submit this form along with
            REGISTRATION SSLIP issued by the college during the first time
            registration
          </li>
          <li>
            Candidates changing college/cancelling admissions should
            compulsorily submit letter of intimation to college failing which
            the fees and certificates will be withheld till the clearance from
            the admission authority
          </li>
          <li>
            Candidate should submit notarized copy of Annexture I (affidavit by
            the student) and Annexure II (affidavit by parent/guardian) at the
            time of registration at college.
          </li>
        </ol>
      </form>
    </div>
  );
};
