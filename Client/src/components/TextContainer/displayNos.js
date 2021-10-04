import React, { useState } from "react";
import "./displayNos.css";

function DisplayNos(props) {
  const socket = props.socket;
  const [selectedValue, setSelectedValue] = useState(null);

  const handleSend = async () => {
    await socket.emit("send", selectedValue);
    props.setIsSubmitDisabled(true);
  };

  return (
    <div>
      <div className="buttonlist">
        <button className="cardss" onClick={() => setSelectedValue(0)}>
          0
        </button>
        <button className="cardss" onClick={() => setSelectedValue(0.5)}>
          1/2
        </button>
        <button className="cardss" onClick={() => setSelectedValue(1)}>
          1
        </button>
        <button className="cardss" onClick={() => setSelectedValue(2)}>
          2
        </button>
      </div>
      <div className="buttonlist">
        <button className="cardss" onClick={() => setSelectedValue(3)}>
          3
        </button>
        <button className="cardss" onClick={() => setSelectedValue(5)}>
          5
        </button>
        <button className="cardss" onClick={() => setSelectedValue(8)}>
          8
        </button>
        <button className="cardss" onClick={() => setSelectedValue(13)}>
          13
        </button>
      </div>
      <div className="buttonlist">
        <button className="cardss" onClick={() => setSelectedValue(20)}>
          20
        </button>
        <button className="cardss" onClick={() => setSelectedValue(40)}>
          40
        </button>
        <button className="cardss" onClick={() => setSelectedValue(50)}>
          50
        </button>
        <button className="cardss" onClick={() => setSelectedValue(100)}>
          100
        </button>
      </div>

      <button
        onClick={handleSend}
        className="hi"
        disabled={props.isSubmitDisabled}
      >
        SEND {selectedValue}
      </button>
    </div>
  );
}
export default DisplayNos;
