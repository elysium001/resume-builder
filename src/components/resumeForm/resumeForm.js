import { useState, useRef } from "react";
import { Editor } from '@tinymce/tinymce-react';

function WorkHistoryRow(props) {
  const { startDate, endDate, title, company, location, content } = props;
  const editorRef = useRef(null);
  return (
    <div className="col-span-6 md:grid md:grid-cols-6 md:gap-6">
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="startDate"
          className="block text-sm font-medium text-gray-700"
        >
          Start Date
        </label>
        <input
          type="text"
          name="startDate"
          value={startDate}
          id="startDate"
          autoComplete="startDate"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="endDate"
          className="block text-sm font-medium text-gray-700"
        >
          End Date
        </label>
        <input
          type="text"
          name="endDate"
          value={endDate}
          id="endDate"
          autoComplete="endDate"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700"
        >
          Company
        </label>
        <input
          type="text"
          name="company"
          value={company}
          id="company"
          autoComplete="company"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="work-title"
          className="block text-sm font-medium text-gray-700"
        >
          Title
        </label>
        <input
          type="text"
          name="work-title"
          value={title}
          id="work-title"
          autoComplete="work-title"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="location"
          className="block text-sm font-medium text-gray-700"
        >
          Location
        </label>
        <input
          type="text"
          name="location"
          value={location}
          id="location"
          autoComplete="location"
          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="col-span-6 sm:col-span-6">
        <label
          htmlFor="work-duties"
          className="block text-sm font-medium text-gray-700"
        >
          Work Summary
        </label>
        <Editor
         onInit={(evt, editor) => editorRef.current = editor}
         name="work-duties"
         initialValue={content}
         init={{
           height: 500,
           menubar: false,
           plugins: [
             'advlist autolink lists link image charmap print preview anchor',
             'searchreplace visualblocks code fullscreen',
             'insertdatetime media table paste code help wordcount'
           ],
           toolbar: 'undo redo | formatselect | ' +
           'bold italic backcolor | alignleft aligncenter ' +
           'alignright alignjustify | bullist numlist outdent indent | ' +
           'removeformat | help',
           content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
         }}
       />
      </div>
    </div>
  );
}

export default function ResumeForm(props) {
  const [, setresumeObj] = useState();
  const resumeProps = {
    name: props?.resume?.name,
    title: props?.resume?.title,
    address: props?.resume?.address,
    phone: props?.resume?.phone,
    email: props?.resume?.email,
    objective: props?.resume?.objective,
    workHistory: props?.resume?.workHistory,
    skills: props?.resume?.skills,
  };
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
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={resumeProps.name}
                        onChange={({ target: { value } }) =>
                          (resumeProps.name = value)
                        }
                        id="name"
                        autoComplete="given-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Job Title
                      </label>
                      <input
                        type="text"
                        name="title"
                        value={resumeProps.title}
                        onChange={({ target: { value } }) =>
                          (resumeProps.title = value)
                        }
                        id="title"
                        autoComplete="family-name"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={resumeProps.address}
                        onChange={({ target: { value } }) =>
                          (resumeProps.address = value)
                        }
                        id="address"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
                      <input
                        type="text"
                        name="phone"
                        value={resumeProps.phone}
                        onChange={({ target: { value } }) =>
                          (resumeProps.phone = value)
                        }
                        id="phone"
                        autoComplete="phone"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={resumeProps.email}
                        onChange={({ target: { value } }) =>
                          (resumeProps.email = value)
                        }
                        id="email"
                        autoComplete="email"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium text-gray-700"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={resumeProps?.city}
                        onChange={({ target: { value } }) =>
                          (resumeProps.city = value)
                        }
                        id="city"
                        autoComplete="city"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium text-gray-700"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="region"
                        onChange={({ target: { value } }) =>
                          (resumeProps.region = value)
                        }
                        id="region"
                        autoComplete="address-level1"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium text-gray-700"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="text"
                        name="postal-code"
                        onChange={({ target: { value } }) =>
                          (resumeProps.zip = value)
                        }
                        id="postal-code"
                        autoComplete="postal-code"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6">
                      <label
                        htmlFor="objective"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Objective
                      </label>
                      <textarea
                        type="text"
                        name="objective"
                        value={resumeProps.objective}
                        rows="5"
                        onChange={({ target: { value } }) =>
                          (resumeProps.objective = value)
                        }
                        id="objective"
                        autoComplete="objective"
                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                      />
                    </div>
                    <label
                      htmlFor="work-duties"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Work History
                    </label>
                    {resumeProps.workHistory &&
                      resumeProps.workHistory.map((obj, i) => {
                        return <WorkHistoryRow key={i} {...obj} />;
                      })}
                    <label
                      htmlFor="work-skills"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Skills
                    </label>
                    {resumeProps.skills &&
                      resumeProps.skills.map(({experience, name}, i) => {
                        return (
                        <div key={i} className="col-span-6 md:grid md:grid-cols-6 md:gap-6">
                        <div className="col-span-6 md:col-span-3">
                          <label
                            htmlFor={`experience-name-${i}`}
                            className="block text-sm font-medium text-gray-700"
                          >
                            Skill Name
                          </label>
                          <input
                            type="text"
                            value={name}
                            name={`experience-name-${i}`}
                            onChange={({ target: { value } }) =>
                              (resumeProps.experience[i]['name'] = value)
                            }
                            id={`experience-name-${i}`}
                            autoComplete="experience-name"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        <div className="col-span-6 md:col-span-3">
                          <label
                            htmlFor={`experience-${i}`}
                            className="block text-sm font-medium text-gray-700"
                          >
                            Level
                          </label>
                          <input
                            type="text"
                            name={`experience-${i}`}
                            value={experience}
                            onChange={({ target: { value } }) =>
                              (resumeProps.experience[i]['experience'] = value)
                            }
                            id={`experience-${i}`}
                            autoComplete="experience"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                          />
                        </div>
                        </div>
                        );
                      })}
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      setresumeObj(resumeProps);
                      props.onCreateResume(resumeProps);
                    }}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}
