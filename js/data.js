/**
 * Portfolio Projects & Focus Areas Data
 */

const portfolioData = {
  // Everything here is shown on the page by renderProfile() in main.js
  profile: {
    name: "Gurshiv Singh Dabb",                       // hero heading, footer, page title
    handle: "gurshiv.dev",                            // nav logo (the part after the first "." is highlighted)
    role: "CS Student & Aspiring Developer",          // typed tagline under the name
    statusBadge: "Seeking New-Grad SWE Roles",        // green pill above the name
    heroIntro: "Soon-to-be CS grad from the University of Manitoba who likes building things end to end — clean APIs, solid data models, and interfaces people can actually use.",
    aboutBio: "I got into computer science because I wanted to understand how the apps I used every day actually worked, and that curiosity hasn't gone away. I'm happiest when I'm building something end to end and figuring out why each piece fits the way it does.",
    contactBlurb: "I'm actively looking for new-grad roles for 2027. Feel free to shoot me an email or connect on GitHub!"
  },

  focusAreas: [
    {
      title: "Full-Stack Web Dev",
      description: "Angular and React front ends backed by Node.js and Express REST APIs.",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>`,
      accent: "blue"
    },
    {
      title: "Databases & Data Modeling",
      description: "Relational and document schema design with SQL, JDBC, MongoDB, and SQLite.",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/></svg>`,
      accent: "amber"
    },
    {
      title: "Software Practices",
      description: "Agile/Scrum workflows, unit testing, code review, and version control with Git.",
      icon: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>`,
      accent: "teal"
    }
  ],

  experiences: [
    {
      role: "Full Stack Developer Student Intern",
      company: "University of Manitoba - Human Computer Interaction Lab",
      location: "Winnipeg, MB / Remote",
      period: "May 2026 – Aug 2026",
      type: "Internship",
      description: [
        "Worked on developing BankBox, a simulated online banking sandbox with five banking interfaces and three learning modules.",
        "Implemented the BMO banking interface and Contacts backend API & service using Angular, TypeScript, Node.js, and Express.",
        "Collaborated in an Agile lab team environment, writing unit tests and reviewing peer code."
      ],
      skills: ["TypeScript", "Node.js", "Express", "Angular", "HTML/CSS", "Git"],
      // Product built during this role, shown as a link next to the company name
      link: {
        label: "BankBox",
        href: "https://bankbox.cs.umanitoba.ca/"
      }
    }
  ],

  projects: [
    {
      id: "bisonrides",
      title: "BisonRides - Ride-Sharing Web Application",
      description: "A ride-sharing platform for University of Manitoba students to post, search, and pay for rides. Built in a team of six, with a map-based ride search, Stripe payments, and a CI/CD pipeline with automated code-quality checks.",
      techStack: ["React", "TypeScript", "FastAPI", "Python", "PostgreSQL", "Redis", "Docker", "Stripe", "Leaflet.js"],
      githubUrl: "https://github.com/BisonRIdes/Comp4350Project",
      liveUrl: "https://bisonrides.vercel.app/",
      featured: true
    },
    {
      id: "northwind-cli",
      title: "Northwind DB CLI Application",
      description: "A command-line application to query, filter, and manage a large relational database based on the Northwind dataset.",
      techStack: ["Java", "SQL", "JDBC"],
      githubUrl: "https://github.com/gurshivdabb/Northwind-DB",
      liveUrl: null, // No live demo -> Live Demo button hidden!
      featured: true
    },
    {
      id: "recipelog",
      title: "Recipe Log - Personal Digital Cookbook",
      description: "A personal digital cookbook that helps home cooks collect, protect, and organize their favorite meals in one secure place.",
      techStack: ["Java 17", "Android SDK", "XML Layouts", "SQLite", "JUnit 5"],
      githubUrl: "https://github.com/gurshivdabb/Recipe-Log",
      liveUrl: null, // No live demo -> Live Demo button hidden!
      featured: true
    }
  ],

  contacts: [
    {
      name: "Email",
      label: "Email",
      value: "dabbgurshiv@gmail.com",
      href: "mailto:dabbgurshiv@gmail.com",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
      accent: "teal"
    },
    {
      name: "GitHub",
      label: "GitHub",
      value: "github.com/gurshivdabb",
      href: "https://github.com/gurshivdabb",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>`,
      accent: "blue"
    },
    {
      name: "LinkedIn",
      label: "LinkedIn",
      value: "linkedin.com/in/gurshiv-dabb/",
      href: "https://www.linkedin.com/in/gurshiv-dabb/",
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>`,
      accent: "amber"
    }
  ]
};
