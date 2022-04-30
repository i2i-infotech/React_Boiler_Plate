import React from "react";
import { Container, Form, Button, Tabs, Tab } from "react-bootstrap";
import styles from "./index.module.scss";

function Login() {
  return (
    <Container>
          <div className={styles.section_devider}></div>

      <div className={styles.user_form}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <div className={styles.forgot_password}>
            <Form.Label>Forgot?</Form.Label>
          </div>
          <Button className={styles.submit_btn} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Login;
