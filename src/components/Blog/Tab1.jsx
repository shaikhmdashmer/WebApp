import React, { useState } from "react";
import { Button } from "react-bootstrap";


export const Tab1 = () => {
  const [thread, setThread] = useState("Khaja");
  const [toggle, setToggle] = useState(false);
  const [changeNameButtonStyle, setChangeNameButtonStyle] = useState("primary");

  const handleChangeName = (e) => {
    toggle ? setThread("Tauseef") : setThread("Zubair");
    toggle
      ? setChangeNameButtonStyle("success")
      : setChangeNameButtonStyle("danger");
    setToggle(!toggle);
  };
  return (
    <div>
      Name - {thread} <br />
      <Button
        variant={changeNameButtonStyle}
        onClick={(e) => handleChangeName(e)}>
        Change Name
      </Button>
    </div>
  );
};
