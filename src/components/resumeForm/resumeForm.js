import { useState, useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

function SaveButton({onCreateResume, resumeObj}){
  return (
    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6 dark:bg-black">
      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          onCreateResume(resumeObj);
        }}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Save
      </button>
    </div>
  )
}

function IncrementButton({onClick, label}) {
  return (
    <div className="flex space-x-2 justify-end col-span-6">
      <div>
        <button
          onClick={()=>onClick()}
          type="button"
          className="inline-block px-6 pt-2.5 pb-2 border-2 border-gray-200 text-gray-200 font-medium text-xs leading-normal rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex align-center"
        >
          <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="arrow-alt-circle-up" className="w-4 h-4 mr-2" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"/>
          </svg>
          {label}
        </button>
      </div>
    </div>
  );
}

function WorkHistoryRow(props) {
  const { startDate, endDate, title, company, location, content, onChange } =
    props;
  const editorRef = useRef(null);
  return (
    <div className="col-span-6 md:grid md:grid-cols-6 md:gap-6">
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="startDate"
          className="block text-sm font-medium text-gray-700 dark:text-white"
        >
          Start Date
        </label>
        <input
          type="text"
          name="startDate"
          value={startDate}
          onChange={({ target: { value } }) => onChange("startDate", value)}
          id="startDate"
          autoComplete="startDate"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="endDate"
          className="block text-sm font-medium text-gray-700 dark:text-white"
        >
          End Date
        </label>
        <input
          type="text"
          name="endDate"
          value={endDate}
          onChange={({ target: { value } }) => onChange("endDate", value)}
          id="endDate"
          autoComplete="endDate"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 dark:text-white"
        >
          Company
        </label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={({ target: { value } }) => onChange("company", value)}
          id="company"
          autoComplete="company"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="work-title"
          className="block text-sm font-medium text-gray-700 dark:text-white"
        >
          Title
        </label>
        <input
          type="text"
          name="work-title"
          value={title}
          onChange={({ target: { value } }) => onChange("title", value)}
          id="work-title"
          autoComplete="work-title"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700 dark:text-white"
        >
          Location
        </label>
        <input
          type="text"
          name="location"
          value={location}
          onChange={({ target: { value } }) => onChange("location", value)}
          id="location"
          autoComplete="location"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-6">
        <label
          htmlFor="work-duties"
          className="block text-sm font-medium text-gray-700 dark:text-white mb-2"
        >
          Work Summary
        </label>
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          name="work-duties"
          onEditorChange={(value) => onChange("content", value)}
          value={content}
          init={{
            height: 500,
            menubar: false,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      <hr />
    </div>
  );
}

export default function ResumeForm(props) {
  const { resume } = props;
  const [resumeObj, setresumeObj] = useState(resume);

  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900 dark:text-white">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600 dark:text-white">
                Use a permanent address where you can receive mail.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow overflow-hidden sm:rounded-md">
                <SaveButton onCreateResume={props.onCreateResume} resumeObj={resumeObj}/>
                <div className="px-4 py-5 bg-white dark:bg-gray-800 sm:p-6 ">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={resumeObj.name}
                        onChange={({ target: { value } }) => {
                          const tempObj = { ...resumeObj };
                          tempObj.name = value;
                          setresumeObj(tempObj);
                        }}
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={resumeObj.title}
                        onChange={({ target: { value } }) => {
                          const tempObj = { ...resumeObj };
                          tempObj.title = value;
                          setresumeObj(tempObj);
                        }}
                        id="title"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={resumeObj.address}
                        onChange={({ target: { value } }) => {
                          const tempObj = { ...resumeObj };
                          tempObj.address = value;
                          setresumeObj(tempObj);
                        }}
                        id="address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={resumeObj.phone}
                        onChange={({ target: { value } }) => {
                          const tempObj = { ...resumeObj };
                          tempObj.phone = value;
                          setresumeObj(tempObj);
                        }}
                        id="phone"
                        autoComplete="phone"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={resumeObj.email}
                        onChange={({ target: { value } }) => {
                          const tempObj = { ...resumeObj };
                          tempObj.email = value;
                          setresumeObj(tempObj);
                        }}
                        id="email"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={resumeObj?.city}
                        onChange={({ target: { value } }) => {
                          const tempObj = { ...resumeObj };
                          tempObj.city = value;
                          setresumeObj(tempObj);
                        }}
                        id="city"
                        autoComplete="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        onChange={({ target: { value } }) => {
                          const tempObj = { ...resumeObj };
                          tempObj.region = value;
                          setresumeObj(tempObj);
                        }}
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        onChange={({ target: { value } }) => {
                          const tempObj = { ...resumeObj };
                          tempObj.zip = value;
                          setresumeObj(tempObj);
                        }}
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="objective"
                        className="block text-sm font-medium text-gray-700 dark:text-white"
                      >
                        Objective
                      </label>
                      <textarea
                        type="text"
                        name="objective"
                        value={resumeObj.objective}
                        rows="5"
                        onChange={({ target: { value } }) => {
                          const tempObj = { ...resumeObj };
                          tempObj.objective = value;
                          setresumeObj(tempObj);
                        }}
                        id="objective"
                        autoComplete="objective"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <label
                      htmlFor="work-duties"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Work History
                    </label>
                    {resumeObj.workHistory &&
                      resumeObj.workHistory.map((obj, i) => {
                        return (
                          <WorkHistoryRow
                            key={i}
                            {...obj}
                            onChange={(prop, value) => {
                              const tempObj = { ...resumeObj };
                              tempObj.workHistory[i][prop] = value;
                              setresumeObj(tempObj);
                            }}
                          />
                        );
                      })}
                      <IncrementButton 
                        label="Add Work History"
                        onClick={()=> {
                        const tempObj = { ...resumeObj };
                        tempObj.workHistory.push({})
                        setresumeObj(tempObj);
                      }}/>
                    <label
                      htmlFor="work-skills"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Skills
                    </label>
                    {resumeObj.skills &&
                      resumeObj.skills.map(({ experience, name }, i) => {
                        return (
                          <div
                            key={i}
                            className="col-span-6 md:grid md:grid-cols-6 md:gap-6"
                          >
                            <div className="col-span-6 md:col-span-3">
                              <label
                                htmlFor={`experience-name-${i}`}
                                className="block text-sm font-medium text-gray-700 dark:text-white"
                              >
                                Skill Name
                              </label>
                              <input
                                type="text"
                                value={name}
                                name={`experience-name-${i}`}
                                onChange={({ target: { value } }) => {
                                  const tempObj = { ...resumeObj };
                                  tempObj.skills[i]["name"] = value;
                                  setresumeObj(tempObj);
                                }}
                                id={`experience-name-${i}`}
                                autoComplete="experience-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                              />
                            </div>
                            <div className="col-span-6 md:col-span-3">
                              <label
                                htmlFor={`experience-${i}`}
                                className="block text-sm font-medium text-gray-700 dark:text-white"
                              >
                                Experience Level
                              </label>
                              <input
                                type="range"
                                className="
                                  form-range
                                  appearance-none
                                  w-full
                                  h-6
                                  p-0
                                  bg-transparent
                                  focus:outline-none focus:ring-0 focus:shadow-none
                                "
                                min="0"
                                max="100"
                                name={`experience-${i}`}
                                value={experience}
                                onChange={({ target: { value } }) => {
                                  const tempObj = { ...resumeObj };
                                  tempObj.skills[i]["experience"] = value;
                                  setresumeObj(tempObj);
                                }}
                                id={`experience-${i}`}
                                autoComplete="experience"
                              />
                            </div>
                          </div>
                        );
                      })}
                      <IncrementButton 
                        label="Add Skill"
                        onClick={()=> {
                          const tempObj = { ...resumeObj };
                          tempObj.skills.push({})
                          setresumeObj(tempObj);
                        }}/>
                  </div>
                </div>
                <SaveButton onCreateResume={props.onCreateResume} resumeObj={resumeObj}/>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-500 dark:border-gray-800" />
        </div>
      </div>
    </>
  );
}
