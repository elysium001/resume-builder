import React, { useEffect, useState } from "react";
import ResumeForm from "../resumeForm/resumeForm";
import ResumeTemplate from "./resume.template";

export default function Resume(props) {
  const { openResume } = props;
  const [resumeObject, setResumeObject] = useState();
  const [openResumeForm, setOpenResumeForm] = useState();

  useEffect(() => {
    setOpenResumeForm(openResume);
  }, [openResume]);
  return (
    <React.Fragment>
      {openResumeForm && (
        <ResumeForm
          resume={resumeObject}
          onCreateResume={(resume) => {
            setOpenResumeForm(false);
            setResumeObject(resume);
          }}
        />
      )}
      {!openResumeForm && (
        <ResumeTemplate
          resume={resumeObject}
          onLoadResume={(resume) => setResumeObject(resume)}
        />
      )}
    </React.Fragment>
  );
}
