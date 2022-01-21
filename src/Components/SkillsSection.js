import "./Skills.css";
import { useState } from "react";
import ProgressInput from "./ProgressInput";

function Skills() {
  return (
    <>
      <div className="row">
        <div className="card skills_content">
          <div className="row g-0">
            <div className="col-12">
              <div className="container-md ">
                <h2 className="h2">Skills</h2>
                <p className="para_skills">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
            </div>
          </div>
          <div className="row col-12">
            <div className="row ">
              <div className="col-12"></div>
              <div className="col-2"></div>
              <div className="col-3">
                <ul className="list-group list_control">
                  <li className="list-group-item list_parent_style">
                    MY FOCUS
                  </li>
                  <li className="list-group-item list_style">UI/UX Design</li>
                  <li className="list-group-item list_style">
                    Responsive Design
                  </li>
                  <li className="list-group-item list_style">Web Design</li>
                  <li className="list-group-item list_style">
                    Mobile App Design
                  </li>
                </ul>{" "}
              </div>
              <div className="col-6">
                <div className="card-body">
                  <ProgressInput
                    id="html"
                    skillName="HTML"
                    cssName="html_width"
                    currentValue="90"
                  />
                  <ProgressInput
                    id="css"
                    skillName="CSS"
                    cssName="html_width"
                    currentValue="90"
                  />
                  <ProgressInput
                    id="js"
                    skillName="JavaScript"
                    cssName="js_width"
                    currentValue="80"
                  />
                  <ProgressInput
                    id="react"
                    skillName="React"
                    cssName="js_width"
                    currentValue="80"
                  />
                  <ProgressInput
                    id="photo"
                    skillName="PhotoShop"
                    cssName="html_width"
                    currentValue="90"
                  />
                  <ProgressInput
                    id="adobe"
                    skillName="Adobe XD"
                    cssName="js_width"
                    currentValue="90"
                  />
                  <ProgressInput
                    id="nodejs"
                    skillName="Node.js"
                    cssName="node_width"
                    currentValue="70"
                  />
                  <ProgressInput
                    id="wordpress"
                    skillName="WordPress"
                    cssName="word_width"
                    currentValue="50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
