import React, { useState } from "react";
import "./Form.css";
function Form(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(
      `Thank you for providing us with your details. \nOur team will shortly contact you for further process. \nYour name : ${name} \nYour e-mail is ${email}`
    );
    // console.log(email);
    setEmail("");
    setName("");
    alert("Thanks for trusting us. Check console to further details.");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-customer__control">
        <label>Name</label>
        <input type="text" value={name} onChange={nameChange} />
      </div>
      <div className="new-customer__control">
        <label>Email</label>
        <input type="email" value={email} onChange={emailChange} />
      </div>
      <div>
        <button type="submit">Confirm</button>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default Form;
