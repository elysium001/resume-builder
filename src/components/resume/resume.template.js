import React, { useEffect, useState } from "react";
import "./resume.template.css";

const exampleResume = {
  name: "Omar Serrano",
  title: "Code Wrangler",
  address: "Rio Rancho, NM",
  phone: "505-603-7069",
  email: "a.omarserrano@gmail.com",
  objective: `Dedicated and innovative WordPress developer with seven years of hands-on experience in crafting dynamic and user-friendly websites. My passion for staying at the forefront of web development technologies has led me to specialize in JavaScript and the Gutenberg developer API. My objective is to leverage my expertise to create seamless and interactive web experiences while continuously expanding my skillset to contribute to cutting-edge projects and drive digital innovation.`,
  workHistory: [
    {
      startDate: "10/2022",
      endDate: "Current",
      title: "Code Wrangler",
      company: "Automattic",
      location: "Remote",
      content: `<ul><li>Proactively build and maintain strong client relationships, ensuring that WPVIP clients receive the highest level of support and service, acting as their dedicated advocate within the organization.</li><li>Provide expert guidance on WordPress VIP platform capabilities, best practices, and optimization strategies to clients, helping them maximize the value of their WordPress websites.</li><li>Troubleshoot and resolve complex technical issues efficiently, collaborating with cross-functional teams to ensure timely and effective solutions, minimizing downtime and disruption for clients.</li><li>Conduct training sessions and workshops for clients to empower them with the knowledge and tools needed to manage and optimize their WordPress VIP platforms, fostering self-sufficiency and satisfaction.</li></ul>`,
    },
    {
      startDate: "10/2019",
      endDate: "10/2022",
      title: "Software Systems Engineer",
      company: "Sandia National Laboratories",
      location: "Albuquerque, NM",
      content: `<ul><li>Proposed technical feasibility solutions for new system designs and suggested options for performance improvement of technical components.</li><li>Developed CMS systems for lab wide use, allowing for discontinuation of legacy software, effectively reducing maintenance costs and improving security.</li><li>Analyzed feasibility, design, operation and performance of new web technology components which helped to improve Section 508/IDEA compliance.</li><li>Improved developer environments by implementing time-saving CI/CD task runners and Automation tasks to insure best practices and better security for our projects.</li></ul>`,
    },
    {
      startDate: "06/2016",
      endDate: "07/2019",
      title: "Software Engineer",
      company: "Scientific Applications International Corporation",
      location: "Albuquerque, NM",
      content: `<ul><li>Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.</li><li>Orchestrated efficient large-scale software deployments using GitLab CI/CD task runners.</li><li>Produced UI design and development for a variety of web technologies including WordPress and Angular frameworks.</li></ul>`,
    },
    {
      startDate: "11/2014",
      endDate: "05/2016",
      title: "Lead Mobile Frontend Developer",
      company: "Swanson Health Products",
      location: "Fargo, ND",
      content: `<ul><li>Assembled and addressed technical and design requirements, integrating user-facing and front-end elements to maintain web presence effectiveness.</li><li>Collaborated with stakeholders during development processes to confirm creative proposals and design best practices.</li><li>Managed full-cycle design tasks, handling phases from conception to completion while maintaining guidelines throughout.</li></ul>`,
    },
  ],
  skills: [
    { experience: 95.0, name: "ReactJS" },
    { experience: 97.0, name: "WordPress" },
    { experience: 93.0, name: "Javascript" },
    { experience: 90.0, name: "PHP" },
  ],
};

export default function ResumeTemplate(props) {
  const { onLoadResume, resume } = props;
  const [resumeObj] = useState(resume || exampleResume);
  const { name, title, address, phone, email, objective, workHistory, skills } =
    resumeObj;
  const colors = [
    "green",
    "blue",
    "yellow",
    "red",
    "cyan",
    "gray",
    "purple",
    "orange",
  ];

  useEffect(() => {
    onLoadResume(resumeObj);
  }, [onLoadResume, resumeObj]);

  return (
    <div className="dark:text-white">
      <div className="resume__name text-4xl font-bold mb-4">{name}</div>
      <div className="resume__title text-2xl font-semibold mb-4">{title}</div>
      <div className="flex flex-wrap resume__contact separators mb-4">
        <div className="resume__address">{address}</div>
        <div className="resume__phone">{phone}</div>
        <div className="resume__email">{email}</div>
      </div>
      <div className="heading text-xl font-bold mb-4">Summary</div>
      <div className="resume__objective mb-4 max-w-3xl font-normal leading-6">
        {objective}
      </div>
      <div className="resume__work-history mb-4">
        <div className="heading text-xl font-bold mb-4">Work History</div>
        {workHistory &&
          workHistory.map(
            ({ startDate, endDate, title, company, location, content }, i) => {
              return (
                <div key={i} className="md:grid md:grid-cols-4 mb-4">
                  <div className="md:col-span-1">
                    {startDate} - {endDate}
                  </div>
                  <div className="md:col-span-3 max-w-3xl">
                    <div className="text-xl font-semibold mb-2">{title}</div>
                    <div className="flex flex-wrap company separators-comma mb-2">
                      <div className="text-md font-base">{company}</div>
                      <div className="text-md font-base italic">{location}</div>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: content }}></div>
                  </div>
                </div>
              );
            }
          )}
      </div>
      <div className="resume__skills mb-4">
        <div className="heading text-xl font-bold mb-4">Skills</div>
        {skills &&
          skills.map(({ experience, name }, i) => {
            return (
              <React.Fragment key={i}>
                <div className="dark:text-white mb-1">{name}</div>
                <div className="w-full bg-gray-200 rounded-full mb-2">
                  <div
                    className={`bg-${colors[i]}-600 text-xs font-medium text-${colors[i]}-100 text-center p-0.5 leading-none rounded-l-full`}
                    style={{ width: `${experience}%` }}
                  >
                    {" "}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
      </div>
      <div className="pb-10"></div>
    </div>
  );
}
