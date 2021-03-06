import React, { Fragment, useState } from "react";
import styles from "../Contacts2/Contacts2.module.scss";
import Layout from "../../layouts/Layout/Layout";
import { LoginForm } from "../../ui";
import { AddressBox, Button } from "../../elements";
import THEME from "../../../state/theme";
import { useCustomState } from "../../../state/state";

export default () => {
  const actions = useCustomState()[1];

  return (
    <Fragment>
      <div className={styles.header}>
        <span className="subtitle" style={{ color: THEME.color }}>
          Send message
        </span>
        <h2>Feel free to contact us.</h2>
        <p>
          Energistically predominate high-payoff alignments whereas maintainable
          materials timely deliverables. Synergistically leverage other's
          holistic mindshare via high-payoff expertise.
        </p>
      </div>

      <Layout col="2">
        <div className={styles.wrapper}>
          <LoginForm style={{ border: "1px solid #eee" }} />
        </div>

        <div className={styles.info}>
          <i
            className="las la-long-arrow-alt-right"
            style={{ color: THEME.color }}
          />
          <h2>Ready to start making busines with us?</h2>
          <p>
            Rapidiously transform integrated processes via frictionless
            paradigms. Intrinsicly productize proactive catalysts for change via
            economically sound relationships.
          </p>
          <Button
            click={() =>
              actions.toogleRequest(
                "I'm ready to start making business with you!"
              )
            }
            type="solid-gray-tb"
            hoverType="solid-white-tb"
            after="&#xf107;"
          >
            Get quote
          </Button>
        </div>
      </Layout>
    </Fragment>
  );
};
