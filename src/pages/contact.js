import React from "react";
import Layout from "../components/Layout";
import * as styles from "../assets/styles/contact.module.css";

const Contact = () => {
  return (
    <Layout>
      <section className={styles.formSection}>
        <h1>Contact Us</h1>

        <form
          method="post"
          action="https://getform.io/f/zaxdzgka"
        >
          <label>
            <input type="email" name="email" placeholder="Email"/>
          </label>
          <label>

            <input type="text" name="name" placeholder="Name"/>
          </label>
          <label>

            <textarea type="text" name="message" placeholder="message"/>
          </label>
          <button>Submit</button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
