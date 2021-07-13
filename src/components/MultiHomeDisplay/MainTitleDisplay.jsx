import React from "react";

export const MainTitleDisplay = (maintitle) => {
  return (
    <React.Fragment>
      {maintitle != 0 && (
        <p className="para-heading">
          {maintitle !== "" && (
            <h1 className="vission-main-title">
              <i class="fa fa-leanpub" aria-hidden="true"></i> {maintitle}
            </h1>
          )}
        </p>
      )}
    </React.Fragment>
  );
};
