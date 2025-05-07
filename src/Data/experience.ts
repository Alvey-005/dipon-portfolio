import exp from "constants";

const courses = [
    {
      title: "Structured Programming (C)",
      classSize: 131,
      status: "Running (Oct '23-)",
    },
    {
      title: "Structured Programming (Sessional)",
      classSize: 131,
      status: "Running (Oct '23-)",
    },
    {
      title: "Digital Electronics and Pulse technologies CSE-124",
      classSize: 125,
      status: "Completed (May '23-Sep '23)",
    },
    {
      title: "Compiler Designing (Sessional)",
      classSize: 125,
      status: "Completed (May '23-Sep '23)",
    },
  ];
  const trainerCourses = [    {
    title: "Artificial Intelligence",
    classSize: 125,
    status: "Running (Oct '23- )",
  },
  {
    title: "Artificial Intelligence (Sessional)",
    classSize: 125,
    status: "Completed (Oct '22-Feb '23)",
  },
  {
    title: "Software Engineering (Sessional)",
    classSize: 131,
    status: "Completed (Oct '22-Feb '23)",
  },
  {
    title: "Computer Programming and Engineering Analysis (Sessional)",
    classSize: 30,
    status: "Completed (May '23-Sep '23)",
  },
  {
    title: "Computer Programming and Engineering Analysis",
    classSize: 30,
    status: "Completed (Aug '22-Dec '23)",
  }];
  const professionalExperiences = [
    {
      company: "Workera.ai (a deeplearning.ai company)",
      url:'https://workera.ai/',
      roles: [
        {
          title: "Senior Assessment Developer",
          address:"(Remote) California, USA",
          duration: "August, 2024 - Present",
          responsibilities: [
            `Conducted R&D to leverage LLMs in the development process,including engineering core
production prompts, tuning of LLMs, and incorporating agentic workflows within the
development phase.`,
            `Implemented process automation in technical report generation from item banks and
mapping of online learning contents to Workera skill ontology and skill signals.`,
            `Developed and piloted assessments for the company’s signature products such as Deep
Learning, Machine Learning, Computer Vision, Responsible AI, Accountability AI, and
Mathematics for AI.`,
          ],
        },
        {
          title: "Assessment Developer",
          address:"(Remote) California, USA",
          duration: "June, 2021 - August,2024",
          responsibilities: [
            "Led a team of 5 engineers to build scalable software solutions.",
            "Mentored junior developers and conducted code reviews.",
          ],
        },
      ],
    },

    {
      company: "Universal Machine",
      url:'https://universalmachine.io/',
      roles: [
        {
          title: "Software Engineer - ||",
          address:"(Remote) California, USA",
          duration: "April, 2025 - Present",
          responsibilities: [
            `Developing in-game agents to improve gaming experience using LangChain`
          ],
        },
        {
          title: "Assessment Developer",
          address:"(Remote) California, USA",
          duration: "June, 2021 - August,2024",
          responsibilities: [
            "Led a team of 5 engineers to build scalable software solutions.",
            "Mentored junior developers and conducted code reviews.",
          ],
        },
      ],
    },
  ];
  const researchExperiences = [
    {
      company: "Universal Machine",
      url:'https://www.nsaquib.org/',
      roles: [
        {
          title: "Research Assistant",
          address:"(Remote) California, USA",
          duration: "December, 2023 - Present",
          responsibilities: [
            `<b>Advisor:</b> Nazmus Saquib, PhD  `,
            `<b>Dissertation</b>: Embodied Mathematics, Computer Vision, and Human-Computer Interfacing`
          ],
        },
      ],
    },
  ];
  const teachingExperiences = [
    {
      company: "East Delta University",
      url:'https://www.eastdelta.edu.bd/',
      roles: [
        {
          title: "Adjunct Lecturer",
          address:"Chittagong, Bangladesh",
          duration: "Fall, 2023 - Present",
          courses: courses,
          responsibilities: [
            `Teaching/Taught the following theory courses: Computer Graphics, Mobile Computing,
Digital Electronics & Pulse Techniques, and Compiler Design`,
          ],
        },
      ],
    },
    {
      company: "Bangladesh Hi-Tech Park Authority",
      url:'https://bhtpa.gov.bd/',

      roles: [
        {
          title: "Trainer",
          address:"Chittagong, Bangladesh",
          duration: "April, 2024 - December, 2025",
          // courses: trainerCourses,
          responsibilities: [
            `Delivering training on Machine Learning, Deep Learning, and Computer Vision domains.`,
          ],
        },
      ],
    },
  ];


  export const experiencePageData = {
    courses,
    trainerCourses,
    teachingExperiences,
    professionalExperiences,
    researchExperiences,
  }

  export default experiencePageData;
