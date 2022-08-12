import React from "react";
import { Container, Tab, Tabs } from "react-bootstrap";
import Login from "pages/Login";
import Registration from "pages/Registration";
import styles from "./index.module.scss";

function LoginTab() {
  return (
    <Container>
      <div className={styles.login_container}>
        <div className={styles.login_Box}>
          <Tabs
            defaultActiveKey="Sign In"
            id="uncontrolled-tab-example"
            className="mb-3 unorder"
          >
            <Tab eventKey="Sign In" title="Sign In">
              <Login />
            </Tab>
            <Tab eventKey="deals" title="Registration">
              <Registration />
            </Tab>
          </Tabs>
        </div>
      </div>
    </Container>
  );
}

export default LoginTab;
