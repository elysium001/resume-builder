# 📄 Resume Builder and PDF Generator with ReactJS 🚀

Create a polished and professional resume effortlessly using this ReactJS-powered web application. Craft your custom resume content, style it with ease, and generate a downloadable PDF copy in seconds.

Key Features:
- ✨ User-Friendly Interface: Intuitive design makes resume creation a breeze, even for beginners.
- 📝 Customizable Templates: Choose from a variety of stunning templates to suit your personal style.
- 📄 Sections Galore: Add, edit, or remove sections like experience, education, skills, and more.
- 🔄 Real-Time Preview: Instantly see how your resume looks as you make changes.
- 📥 PDF Export: Download a professionally formatted PDF version of your resume in a single click.

### Preview URL
[https://elysium001.github.io/resume/](https://elysium001.github.io/resume/)

To use, just load up the following component into your project.

```js
const myInfo = {
    name: "Andres O. Serrano",
    title: "Software Systems Engineer",
    address: "Rio Rancho, NM",
    phone: "505-603-7069",
    email: "a.omarserrano@gmail.com",
    objective: `Versatile Systems Engineer with over seven years of cross-functional leadership in implementation, validation and deployment of large complex systems. Exceptional knowledge of Web-Technologies. Well-versed in large-scale deployments, migrations and custom CMS solutions.`,
    workHistory: [
      {
        startDate: "10/2019",
        endDate: "Current",
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
      { experience: 87.0, name: "ReactJS" },
      { experience: 97.0, name: "WordPress" },
      { experience: 67.0, name: "WebPack JS" },
      { experience: 77.0, name: "PHP" },
    ],
  }
```

```jsx
import './App.css';
import Resume from "./components/resume/resume";
import DarkModeToggle from "./components/utils/darkModeToggle";

function App() {
  return (
    <div className="App bg-white dark:bg-black min-h-ful">
      <div className="container mx-auto px-4 min-h-ful">
        <DarkModeToggle />
        <Resume {...myInfo}/>
      </div>
    </div>
  );
}

export default App;

```
