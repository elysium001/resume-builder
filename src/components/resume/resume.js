import React, { useEffect, useState } from "react";
import ResumeForm from "../resumeForm/resumeForm";
import ResumeTemplate from "./resume.template";

export default function Resume(props) {
  const { openResume, onLoadResume } = props;
  const [resumeObject, setResumeObject] = useState();
  const [openResumeForm, setOpenResumeForm] = useState();

  useEffect(() => {
    setOpenResumeForm(openResume);
  }, [openResume, onLoadResume]);

  return (
    <React.Fragment>
      {openResumeForm && (
        <ResumeForm
          resume={resumeObject}
          onCreateResume={(resume) => {
            setOpenResumeForm(false);
            setResumeObject(resume);
            onLoadResume(resume)
          }}
        />
      )}
      {!openResumeForm && (
        <ResumeTemplate
          resume={resumeObject}
          onLoadResume={(resume) => {
            setResumeObject(resume)
            onLoadResume(resume)
          }}
        />
      )}
    </React.Fragment>
  );
}
