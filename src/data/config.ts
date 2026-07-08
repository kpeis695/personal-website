const config = {
  title: "Skpei | Software Engineer @ Salesforce",
  description: {
    long: "Explore the portfolio of Skpei, a software engineer at Salesforce specializing in data cloud, real-time systems, and AI-powered development workflows. Discover my work on CDP Realtime services and multi-agent orchestration with Claude Code.",
    short:
      "Portfolio of Skpei, Software Engineer at Salesforce building scalable data solutions with AI-powered workflows.",
  },
  keywords: [
    "Skpei",
    "portfolio",
    "software engineer",
    "Salesforce",
    "data cloud",
    "real-time systems",
    "CDP",
    "Java",
    "TypeScript",
    "AI workflows",
    "Claude Code",
    "Claude Unleashed",
    "Next.js",
    "React",
    "multi-agent orchestration",
  ],
  author: "Skpei",
  email: "skpei@salesforce.com",
  site: "https://skpei.vercel.app",

  // for github stars button
  githubUsername: "skpei",
  githubRepo: "personal-website",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/skpei",
    linkedin: "https://www.linkedin.com/in/skpei",
    instagram: "",
    facebook: "",
    github: "https://github.com/skpei",
  },
};
export { config };
