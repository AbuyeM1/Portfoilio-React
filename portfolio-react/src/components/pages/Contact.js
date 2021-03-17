import React from "react";
import { Link, Route } from "react-router-dom";
import Resume from "./Resume";
import ContactCard from "../ContactCard";

function Contact(props) {
  return (
    <div>
      <Route exact path={`${props.match.url}/Resume`} component={Resume} />
      <ContactCard />
    </div>
  );
}

export default Contact;
