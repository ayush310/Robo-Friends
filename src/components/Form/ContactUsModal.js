import React, { useState } from "react";
import Form from "./Form";
import "./ContactUsModal.css";

function ContactsUsModal() {
  const [isIntrested, setIsIntrested] = useState(false);

  const startEditingHandler = () => {
    setIsIntrested(true);
  };

  const stopEditingHandler = () => {
    setIsIntrested(false);
  };
  return (
    <div className="new-customer">
      {!isIntrested && (
        <button onClick={startEditingHandler}>Intrested in Us?</button>
      )}
      {isIntrested && <Form onCancel={stopEditingHandler} />}
    </div>
  );
}

export default ContactsUsModal;
