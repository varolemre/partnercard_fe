import React, { useState } from "react";
import emailjs from "emailjs-com";
import styles from "./ContactForm.module.scss";
import { CardButton } from "..";
import { Spinner } from "../../elements";
import {login} from "../../api/apiCalls";
import Select from 'react-select';
import { signUp } from "../../api/apiCalls";
import { useTranslation } from 'react-i18next';
import {
  ActionGroup,
  AlertVariant,
  Button,
  Chip,
  ChipGroup,
  DropdownItem,
  FormGroup,
  InputGroup,
  SelectOption,
  Switch,
  TextInput,
} from "@patternfly/react-core";
export default ({ style }) => {
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const { t } = useTranslation();
  const options = [
    { value: 'm', label: t("men") },
    { value: 'f', label:  t("women") },
  ]
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [customerCode, setCustormeCode] = useState("");
  const [gender, setGender] = useState("");
  const [birhtDate, setBirthDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mail, setMail] = useState("");
  const [preferedCheck, setPreferedCheck] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

  const loginParams = {
    mail: mail,
    password: password,
  };
  const sexSelectOptions = [
    <SelectOption key={0} value="M">
      {t("sexMale")}
    </SelectOption>,
    <SelectOption key={1} value="F">
      {t("sexFemale")}
    </SelectOption>,
  ];

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const onSubmit = () => {
    const body = {
      mail,
      firstName,
      lastName,
      password,
      phoneNumber,
      gender,
      birhtDate
    }
    signUp(body).then((response) => {
      console.log(response);
    })
  };

  const resetForm = () => {
    setMail("");
    setPreferedCheck(false);
  };

  const loading = sending && (
    <div className={styles.loading}>
      <Spinner />
    </div>
  );

  return (
    <><form style={style} className={styles.wrapper}>
      {loading}
      <CardButton
        click={onSubmit}
        btn_text={t("signUp")}
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
          <input
            value={firstName}
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            placeholder={t("firstName")} />
          <input
            value={lastName}
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            placeholder={t("lastName")} />
          <input
            value={mail}
            name="email"
            onChange={(e) => setMail(e.target.value)}
            type="email"
            placeholder={t("email")} />
            <input
            value={phoneNumber}
            name="password"
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="password"
            placeholder={t("phoneNumber")} />
          <input
            value={password}
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder={t("password")} />
          <input
            value={rePassword}
            name="password"
            onChange={(e) => setRePassword(e.target.value)}
            type="password"
            placeholder={t("password")} />
            <input
            value={rePassword}
            name="password"
            onChange={(e) => setCustormeCode(e.target.value)}
            type="password"
            placeholder={t("customerCode")} />
      <Select placeholder={t("gender")} options={options} onChange={(o) => setGender(o.value)} /> <br />
       <p>{t("birthDate")}</p>
       <input  type="date" data-date-inline-picker="true" onChange={(o) => setBirthDate(o.target.value)}  id="birthday" name="birthday" />
        <label className={styles.checkbox_group}>
            <p>{t("campainSms")}</p>
            <input
              onChange={() => setPreferedCheck(!preferedCheck)}
              type="checkbox"
              checked={preferedCheck}
            />
            <span className={styles.checkmark} />
          </label>
          <label className={styles.checkbox_group}>
          <p>{t("registerAgrement")}</p>
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
    </>
  );
};