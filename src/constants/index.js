import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    javascript1,
    typescript,
    typescript1,
    html,
    html1,
    css,
    css1,
    reactjs,
    reactjs1,
    redux,
    tailwind,
    tailwind1,
    nodejs,
    nodejs1,
    mongodb,
    mongodb1,
    git,
    git1,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    jmj,
    aquatic,
    aquaticWhite,
    ruby,
    ruby1,
    postgresql,
    postgresql1,
    githubicon,
    githubicon1,
    postman,
    postman1,
    jquery,
    firebase,
    firebase1,
    chatai,
    link,
    chalkboard,
    jmjportal,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Node Developer",
      icon: backend,
    },
    {
      title: "Ruby on Rails Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "React",
      icon: reactjs,
      mobileIcon: reactjs1,
    },
    {
      name: "JavaScript",
      icon: javascript,
      mobileIcon: javascript1,
    },
    {
      name: "TypeScript",
      icon: typescript,
      mobileIcon: typescript1,
    },
    {
      name: "HTML 5",
      icon: html,
      mobileIcon: html1,
    },
    {
      name: "CSS 3",
      icon: css,
      mobileIcon: css1,
    },
    {
      name: "Node",
      icon: nodejs,
      mobileIcon: nodejs1,
    },
    {
      name: "Git",
      icon: git,
      mobileIcon: git1,
    },
    {
      name: "Tailwind",
      icon: tailwind,
      mobileIcon: tailwind1,
    },
    {
      name: "Ruby on Rails",
      icon: ruby,
      mobileIcon: ruby1,
    },
    {
      name: "Firebase",
      icon: firebase,
      mobileIcon: firebase1,
    },
    {
      name: "MongoDB",
      icon: mongodb,
      mobileIcon: mongodb1,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
      mobileIcon: postgresql1,
    },
    {
      name: "GitHub",
      icon: githubicon,
      mobileIcon: githubicon1,
    },
    {
      name: "Postman",
      icon: postman,
      mobileIcon: postman1,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer",
      company_name: "JMJ Financial",
      icon: jmj,
      mobileIcon: jmj,
      iconBg: "#383E56",
      date: "Dec 2020 - Present",
      points: [
        "Working on both backend and frontend repositories, executing strong functionality to meticulously gather, validate, and store data, then present it visually with easy-to-read tables and graphs.",
        "Collaborating with designers and the engineering team to build dynamic and responsive user interfaces deployed on AWS in React using JavaScript, TypeScript, HTML, and modern CSS standards.",
        "Developing server-side tools and services built with Ruby on Rails and a PostgreSQL database.",
        "Implementing multiple third-party API integrations like Equifax, Dropbox Sign, and Encompass.",
        "Conducting regular maintenance of the software stack by leveraging Sentry to monitor and fix bugs in real time as well as optimize the performance of the newly deployed web application.",
        "Reviewing pull requestes, providing comprehensive feedback and suggestions to ensure code quality and adherence to best practices."
      ],
    },
    {
      title: "General Manager",
      company_name: "Aquatic Aviation",
      icon: aquatic,
      mobileIcon: aquaticWhite,
      iconBg: "#E6DEDD",
      date: "Jan 2015 - Feb 2020",
      points: [
        "Managing a multi-facet business operation including WordPress and Shopify websites, SEO, client/distributor relationships, accounting, operations, staff, and client training.",
        "Implementing business strategies tailored to meet niche client needs making the company the best performing Flyboard, Hoverboard, and Jetpack product sales and training center in the United States.",
        "Maximizing profitability through proactive management and monitoring of margins and price setting.",
        "Instilling a company ethos focused on product quality and outstanding customer service, achieving perfect 5-star reviews across all major platforms including, Google, Yelp, Tripadvisor, and Groupon.",
        "Certified Master Instructor that meticulously trained and certified all Instructor staff achieving a 100% safety record across all experiences between 2015 - 2020."
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Chat AI",
      openSource: true,
      description:
      "ChatAI is a sophisticated conversational application developed using React, Vite, and Firebase Firestore, leveraging OpenAI's GPT-3 model to generate AI assistant responses. Hosted on Google, the application provides secure Authentication login, a real-time chat interface, and incorporates a typing effect for the AI assistant. Additional features include a custom-coded message formatter, a SyntaxHighlighter for code readability, and system message functionality to define the AI's behavior. This allows the user to customize ChatAI's personality",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "google-auth",
          color: "magenta-text-gradient",
        },
        {
          name: "open-ai",
          color: "grey-text-gradient",
        },
      ],
      image: chatai,
      projectLink: link,
      source_code_link: "https://github.com/markprodehl/chat-ai",
      deployed_app_link: "https://chat-ai-c95f1.web.app/",
    },
    {
      name: "Chalk Board",
      openSource: true,
      description:
        "Chalk Board is a user-friendly, real-time to-do list application developed with React, Firestore, and Firebase Authentication. The app provides instantaneous updates, editable task entries, and robust user authentication supporting both email-password and Google sign-in options. It ensures persistant storage of tasks even if the user is offline. Equipped with service worker registration, it supports Progressive Web App (PWA) features, enabling installation on devices for a seamless user experience.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "firebase realtime db",
          color: "orange-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "google-auth",
          color: "magenta-text-gradient",
        },
        {
          name: "open-ai",
          color: "grey-text-gradient",
        },
      ],
      image: chalkboard,
      projectLink: link,
      source_code_link: "https://github.com/markprodehl/chalk-board",
      deployed_app_link: "https://golden-to-do-list-462c7.web.app/",
    },
    {
      name: "JMJ Financial",
      openSource: false,
      description:
        "The JMJ Borrower Portal is a client-facing frontend application that allows borrowers to submit loan applications and manage their automatically generated tasks and related disclosures. It is built with React and provides a user-friendly interface for interacting with a Ruby on Rails backend. The file structure consists of reusable components, page views, data files, and assets that serve as a comprehensive tool for borrowers to conveniently manage their loan applications, and the associated tasks and forms required for loan closure.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "ruby-on-rails",
          color: "pink-text-gradient",
        },
        {
          name: "google-maps-api",
          color: "magenta-text-gradient",
        },
        {
          name: "sentry",
          color: "green-text-gradient",
        },
        {
          name: "mobx",
          color: "orange-text-gradient",
        },
        {
          name: "formik",
          color: "grey-text-gradient",
        },
        {
          name: "yup",
          color: "royal-text-gradient",
        },
      ],
      image: jmjportal,
      projectLink: link,
      source_code_link: "",
      deployed_app_link: "https://portal.jmj.me/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };