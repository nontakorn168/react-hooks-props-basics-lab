import React from "react";
import Links from "./Links";
import user from "../data/user";

function About(props) {
  console.log(props.bio)
  return (
    <div id="about">
      <h2>About Me</h2>
      {!props.bio ? null : <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links linkedin = {user.links.linkedin} github = {user.links.github}/>
    </div>
  );
}

export default About;