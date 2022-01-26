import React, { Fragment, useState } from "react";
import styles from "./SignUp.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { SignUp } from "../../ui";
import { AddressBox, Button } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";
import { useTranslation } from 'react-i18next';

export default () => {
  const actions = useCustomState()[1];
  const { t } = useTranslation();
  return (
    <Fragment>
      <div className={styles.header}>
        <h2>{t("signUp")}</h2>
        <p>
          {t("signUpIntroductions")}
        </p>
      </div>

      <Layout col="2">
        <div className={styles.wrapper}>
          <SignUp style={{ border: "1px solid #eee" }} />
        </div>

        <div className={styles.info}>
          <i
            className="las la-long-arrow-alt-right"
            style={{ color: THEME.color }}
          />
          <h2>{t("signUpSidebarTitle")}</h2>
          <p>
            {t("signUpSidebarContent")}
          </p>
        </div>
      </Layout>
    </Fragment>
  );
};
