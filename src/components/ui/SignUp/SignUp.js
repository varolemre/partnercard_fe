import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.scss";
import { CardButton } from "..";
import { Spinner } from "../../elements";
import { login } from "../../api/apiCalls";
import { useTranslation } from 'react-i18next';

import { Row, Col, Container } from 'react-bootstrap';
export default ({ style }) => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const { t } = useTranslation();

  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [ref, setRef] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [birhtDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
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
          <h4>{t("signUp")}</h4>
                <p>{t("firstName")}</p>
                <input
                value={firstName}
                name="firstName"
                onChange={(e) => setMail(e.target.value)}
                type="text"
                placeholder={t("firstName")}
              />
        <p>{t("lastName")}</p>
          <input
            value={lastName}
            name="lastName"
            onChange={(e) => setMail(e.target.value)}
            type="text"
            placeholder={t("lastName")}
          />
          <input
            value={mail}
            name="email"
            onChange={(e) => setMail(e.target.value)}
            type="email"
            placeholder={t("email")}
          />
          <input
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder={t("password")}
          />
          <input
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder={t("password")}
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
