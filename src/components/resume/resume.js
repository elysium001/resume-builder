import React from "react";
import ResumeForm from "../resumeForm/resumeForm";
import ResumeTemplate from "./resume.template"

export default function Resume() {
    return (
      <React.Fragment>
        {false && <ResumeForm />}
        <ResumeTemplate />
      </React.Fragment>
    )
  }