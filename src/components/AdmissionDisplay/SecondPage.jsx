import React from "react";
import "./SecondPage.css";

export const SecondPage = () => {
  return (
    <div className="admission_table_two">
      <h3 className="Header-content">
        <b>Academic Details:(Inter/12th Std. Details)</b>
      </h3>
      <form>
        <label className="add-label">Name of Exam :</label>
        <input className="add-input" type="text" size="190" />
        <label className="add-label">Board of Exam :</label>
        <input className="add-input" type="text" size="190" />
        <label className="add-label">Name of School/college :</label>
        <input className="add-input" type="text" size="160" />
        <label className="add-label">HallTicket No :</label>
        <input className="add-input" type="text" size="30" />
        <label className="add-label">Total Marks Obtained :</label>
        <input className="add-input" type="text" size="30" />
        <label className="add-label">Maximum Marks :</label>
        <input className="add-input" type="text" size="40" />

        {/* ------------Four Contente same------------------------ */}
        <label className="add-label">Passing Month :</label>
        <input className="add-input" type="text" size="30" />
        <label className="add-label">Year :</label>
        <input className="add-input" type="text" size="30" />
        <label className="add-label">Percentage Marks Scored :</label>
        <input className="add-input" type="text" size="20" />
        <label className="add-label">Grade :</label>
        <input className="add-input" type="text" size="20" />
      </form>
      <p className="para">
        <b>(Note: Attach attested Photocopy of 12th/Diploma std marks card)</b>
      </p>
      <p className="para_text">
        Candidate should fill the details of marks obtained in each individual
        subjects at Inter / 12th /Diploma std examinations in the following
        table/ candidate seeking Direct second year admission can write
        diploma/degree subjects and marks in the table
      </p>

      {/* --------------Table Start Here------------ */}
      <table id="table_border">
        <tr>
          <th className="table_row1">Subjects</th>
          <th className="table_row">Marks Obtained</th>
          <th className="table_row">Maximum Marks</th>
        </tr>

        <tr>
          <td className="table_row1">English</td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
        </tr>
        <tr>
          <td className="table_row1">Physics</td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
        </tr>
        <tr>
          <td className="table_row1">Chemistry</td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
        </tr>
        <tr>
          <td className="table_row1">MAthematics</td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
        </tr>
        <tr>
          <td className="table_row1">Biology</td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
        </tr>
        <tr>
          <td className="table_row1">Computer Science</td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
        </tr>
        <tr>
          <td className="table_row1">Others</td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
        </tr>
        <tr>
          <td className="table_row1">Others</td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
        </tr>
        <tr>
          <td className="table_row1"></td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
        </tr>
        <tr>
          <td className="table_row1"></td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
        </tr>
        <tr>
          <td className="table_row1"></td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
        </tr>
        <tr>
          <td className="table_row1"></td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
          <td className="table_row">
            <input className="table_input" type="text" />
          </td>
        </tr>
      </table>
      <br />
      {/* --------------------table end---------------------- */}

      <h3 className="Header-content">
        <b> Address Details: ( Local Address )</b>
      </h3>
      <form>
        <label className="add-label">Address :</label>
        <input className="add-input" type="text" size="200" />
        {/* ------------Four Content same---------------------- */}
        <label className="add-label">City :</label>
        <input className="add-input" type="text" size="40" />
        <label className="add-label">Pin :</label>
        <input className="add-input" type="text" size="40" />
        <label className="add-label">Dist. :</label>
        <input className="add-input" type="text" size="40" />
        <label className="add-label">State :</label>
        <input className="add-input" type="text" size="40" />
        {/* ---------------end----------------------- */}
        <label className="add-label">Parent’s Landline phone No. :</label>
        <input className="add-input" type="text" size="70" />
        <label className="add-label">Parent’s Mobile No. :</label>
        <input className="add-input" type="text" size="50" />
        <label className="add-label">Candidate’s Mobile No :</label>
        <input className="add-input" type="text" size="70" />
        <label className="add-label">E-mail Id :</label>
        <input className="add-input" type="text" size="70" />
        <label className="add-label">Nearest Bus Station :</label>
        <input className="add-input" type="text" size="70" />
        <label className="add-label">Railway Station :</label>
        <input className="add-input" type="text" size="60" />
      </form>
      <h3 className="Header-content">
        <b>Address Details: ( Permanent Address )</b>
      </h3>
      <form>
        <label className="add-label">Address :</label>
        <input className="add-input" type="text" size="200" />
        {/* ------------Four Content same---------------------- */}
        <label className="add-label">City :</label>
        <input className="add-input" type="text" size="40" />
        <label className="add-label">Pin :</label>
        <input className="add-input" type="text" size="40" />
        <label className="add-label">Dist. :</label>
        <input className="add-input" type="text" size="40" />
        <label className="add-label">State :</label>
        <input className="add-input" type="text" size="40" />
        {/* ---------------end----------------------- */}
        <label className="add-label">Parent’s Landline phone No. :</label>
        <input className="add-input" type="text" size="70" />
        <label className="add-label">Parent’s Mobile No. :</label>
        <input className="add-input" type="text" size="50" />
        <label className="add-label">Candidate’s Mobile No :</label>
        <input className="add-input" type="text" size="70" />
        <label className="add-label">E-mail Id :</label>
        <input className="add-input" type="text" size="70" />
        <label className="add-label">Nearest Bus Station :</label>
        <input className="add-input" type="text" size="70" />
        <label className="add-label">Railway Station :</label>
        <input className="add-input" type="text" size="60" />
      </form>
    </div>
  );
};
