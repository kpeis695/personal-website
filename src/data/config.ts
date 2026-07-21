const config = {
  title: "Sylvester | Software Engineer",
  description: {
    long: "Portfolio of Sylvester, Cornell CS student and Software Engineering Intern at Salesforce. Experience in AI agents, real-time systems, and software development. Built context-bridging infrastructure for Agentforce on Data Cloud Real-Time team.",
    short:
      "Cornell CS student | Salesforce SWE Intern | Building AI agents and real-time data systems",
  },
  keywords: [
    "Sylvester Kpei",
    "portfolio",
    "software engineer",
    "Cornell",
    "Salesforce",
    "Data Cloud",
    "Agentforce",
    "AI agents",
    "real-time systems",
    "Python",
    "Java",
    "React",
    "Swift",
    "machine learning",
    "software developer",
  ],
  author: "Sylvester",
  email: "kpeis695@gmail.com",
  site: "https://kpeis695.github.io",

  // for github stars button
  githubUsername: "kpeis695",
  githubRepo: "personal-website",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "https://linkedin.com/in/ks200",
    instagram: "https://www.instagram.com/big_elorm",
    facebook: "",
    github: "https://github.com/kpeis695",
  },
};
export { config };
