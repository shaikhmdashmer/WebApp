import React from "react";
import "./FourthPage.css";

export const FourthPage = () => {
  return (
    <div>
      <div>
        <h2 className="Header-content">DECLARATION BY THE STUDENT/PARENT</h2>
        <ul type="square">
          <li>
            I declare that the above information is correct and that I have read
            all the rules and regulations of the College and the University to
            which I will abide during the studentship
          </li>
          <li>
            I declare that I have not been convicted for any criminal offence.
            No criminal case or proceeding is presently pending against me in
            any court of law. I have not resorted to any act of indiscipline
            during the previous years.
          </li>
          <li>
            I solemnly declare that I have not been debarred from joining any
            educational institution or rusticated from the
            Institution/University/Board last attended.
          </li>
          <li>
            I solemnly declare that I have passed my qualifying examination as a
            regular student of a recognized institution. In all matters, the
            rules & regulations related to the institution
          </li>
          <li>
            I solemnly declare that the statements made in this application are
            true to the best of my knowledge and belief. I clearly understand
            that if any of the statement is subsequently found to be untrue. I
            will render myself liable to immediate emoval from the college and I
            may be prosecuted.
          </li>
          <li>
            I do hereby solemnly state that I had carefully read the Rules and
            Regulations stipulated by the college in the prospectus, and I agree
            to abide by them. In case I violate any of the rules of conduct,
            discipline, attendance etc.,
          </li>
          <li>
            In case of any misbehavior on my part, the Principal/Correspondent
            may cancel take any action on me without any prior intimation. I
            promise to maintain 75% of attendance, otherwise college can take
            any action on me. Yours obediently
          </li>
        </ul>
        <h5 className="second-Head">Your Obediently</h5>
        <br />
        <br />
        <br />
        <i>
          <h5 className="sig-parent">Signature of the Parent</h5>
        </i>
        <i>
          <h5 className="sig-student">Signature of the Students </h5>
        </i>
      </div>
      <br />
      <br />
      <br />
      <div>
        <p className="dotted"></p>
      </div>
      {/* fee particular details coding starts from here */}
      <div>
        <h3 className="fee-p">
          <b>Fee Particulars Details</b>
        </h3>
      </div>
      <table className="fee-table">
        <thead>
          {/* table head */}
          <tr className="fee-tableRow">
            <th className="fee-tableHead">Sl.No</th>
            <th className="fee-tableHead">Total Fee Amount</th>
            <th className="fee-tableHead">Year/Sem</th>
            <th className="fee-tableHead" colSpan="2">
              Management /Convener
              {/* <td className="dual-data">Reimbursement </td>
              <td className="dual-data">Due Amount</td> */}
            </th>
            <th className="fee-tableHead">No. of Credits</th>
            <th className="fee-tableHead">Signature of receiver</th>
          </tr>
        </thead>
        {/* table data  1*/}
        <tr className="fee-tableRow">
          <td className="fee-tableData">1</td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">I</td>

          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
        </tr>

        {/* table data 2 */}
        <tr className="fee-tableRow">
          <td className="fee-tableData">2</td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">II/I</td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
        </tr>

        {/* table data 3 */}
        <tr className="fee-tableRow">
          <td className="fee-tableData">3</td>

          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">II/II</td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
        </tr>

        {/* table data 4 */}
        <tr className="fee-tableRow">
          <td className="fee-tableData">4</td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">III/I</td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
        </tr>

        {/* table data 5 */}
        <tr className="fee-tableRow">
          <td className="fee-tableData">5</td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">III/II</td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
        </tr>

        {/* table data 6 */}
        <tr className="fee-tableRow">
          <td className="fee-tableData">6</td>
          <td>
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">IV/I</td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
        </tr>

        {/* table data 7 */}
        <tr className="fee-tableRow">
          <td className="fee-tableData">7</td>

          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">IV/II</td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
          <td className="fee-tableData">
            <input className="table-input" type="text" />
          </td>
        </tr>
      </table>
      <p className="note-content">
        <b>Note:-</b> Attached a copy of Marksheet.
      </p>
    </div>
  );
};
