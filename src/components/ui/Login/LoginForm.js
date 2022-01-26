import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.scss";
import { CardButton } from "..";
import { Spinner } from "../../elements";
import {login} from "../../api/apiCalls";

export default ({ style }) => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferedCheck, setPreferedCheck] = useState(false);

  const loginParams = {
    mail: mail,
    password: password,
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onSubmit = () => {
    login(loginParams).then((response) => {
      console.log(response);
    })
  };

  const resetForm = () => {
    setMail("");
    setPhone("");
    setPreferedCheck(false);
  };

  const loading = sending && (
    <div className={styles.loading}>
      <Spinner />
    </div>
  );

  return (
    <form style={style} className={styles.wrapper}>
      {loading}
      <CardButton
        click={onSubmit}
        btn_after="&#xf107;"
        btn_text="Send message"
        btn_type="solid-color-tb"
        btn_hoverType="solid-gray-tb"
        btn_align="stretch"
        padding
      >
        <div className={styles.contact_form}>
          <span className={[styles.status, error && styles.error].join(" ")}>
            {status}
          </span>
          <h4>Login:</h4>
          <input
            value={mail}
            name="email"
            onChange={(e) => setMail(e.target.value)}
            type="email"
            placeholder="Email address *"
          />
          <input
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
          <label className={styles.checkbox_group}>
            <p>Email prefered way to contact</p>
            <input
              onChange={() => setPreferedCheck(!preferedCheck)}
              type="checkbox"
              checked={preferedCheck}
            />
            <span className={styles.checkmark} />
          </label>
        </div>
      </CardButton>
    </form>
  );
};
