import { useState } from "react";
import CustomPopup from "./customPopup";

export default function Popup() {
  const [visibility, setVisibility] = useState(false);

  const popupCloseHandler = () => {
    setVisibility(false);
  };

  return (
    <div>
      <button onClick={() => setVisibility(true)}>open</button>
      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title="Hello Jeetendra"
      >
        <h1>Hello This is Popup Content Area</h1>
        <h2>This is my lorem ipsum text here!</h2>
      </CustomPopup>
    </div>
  );
}
