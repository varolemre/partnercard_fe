import React from "react";
import styles from "./Header.module.scss";
import Layout from "../../layouts/Layout/Layout";

export default ({ children, img }) => {
  return (
    <Layout
      style={{
        height: 100      }}
      mode="dark"
    >
      <div>
        <h1>{children}</h1>
      </div>
    </Layout>
  );
};
