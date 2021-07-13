import React from "react";
import ReactHtmlParser from "html-react-parser";

export const SectionDisplay = (sectitle, secdetails) => {
  return (
    <React.Fragment>
      <p className="para-Heading">
        {sectitle !== "" && (
          <h2 className="vission">
            <i class="fa fa-tags" aria-hidden="true"></i> {sectitle}
          </h2>
        )}
        {secdetails !== "" &&
          ReactHtmlParser(
            secdetails
              .replace(/\\n/g, "<br />")
              .replace(/\<p>/g, "<br />")
              .replace(/\<\p>/g, "")
              .replace(/strong>/g, "h3>")
              .replace(/\\t/g, "")
              .replace(/href=\\/g, "href=")
              .replace(/src=\\/g, "src=")
              .replace(/png\\/g, "png")
              .replace(/jpg\\/g, "jpg")
              .replace(/jpeg\\/g, "jpeg")
              .replace(/\<br \/>/g, "")
              .replace(/&nbsp;/g, " ")
          )}
      </p>
    </React.Fragment>
  );
};
