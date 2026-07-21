import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { SiThreedotjs } from "react-icons/si";
const BASE_PATH = "/assets/projects-screenshots";

const MaskIcon = ({ src, title }: { src: string; title?: string }) => (
  <span
    role="img"
    aria-label={title}
    className="block bg-current"
    style={{
      width: "1em",
      height: "1em",
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskRepeat: "no-repeat",
      maskRepeat: "no-repeat",
      WebkitMaskPosition: "center",
      maskPosition: "center",
      WebkitMaskSize: "contain",
      maskSize: "contain",
    }}
  />
);

const ProjectsLinks = ({ live, repo }: { live?: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      {live && live !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={live}
        >
          <Button variant={"default"} size={"sm"}>
            Visit Website
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
      {repo && repo !== "#" && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};

const brand = (title: string, file: string): Skill => ({
  title,
  bg: "black",
  fg: "white",
  icon: <MaskIcon src={`/assets/logos/${file}`} title={title} />,
});

const PROJECT_SKILLS = {
  python: brand("Python", "python-mono.svg"),
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Java</span>,
  },
  swift: {
    title: "Swift",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Swift</span>,
  },
  swiftui: {
    title: "SwiftUI",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">SwiftUI</span>,
  },
  react: brand("React.js", "react-mono.svg"),
  node: brand("Node.js", "nodedotjs-mono.svg"),
  next: brand("Next.js", "nextdotjs-mono.svg"),
  ts: brand("TypeScript", "typescript-mono.svg"),
  postgres: brand("PostgreSQL", "postgresql-mono.svg"),
  pytorch: {
    title: "PyTorch",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">PyTorch</span>,
  },
  tensorflow: {
    title: "TensorFlow",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">TF</span>,
  },
  flask: {
    title: "Flask",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Flask</span>,
  },
  aws: {
    title: "AWS",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">AWS</span>,
  },
  dash: {
    title: "Dash",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Dash</span>,
  },
  plotly: {
    title: "Plotly",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Plotly</span>,
  },
  materialui: {
    title: "Material-UI",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">MUI</span>,
  },
  stripe: {
    title: "Stripe",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Stripe</span>,
  },
  salesforce: {
    title: "Salesforce",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">SF</span>,
  },
  agentforce: {
    title: "Agentforce",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">AI</span>,
  },
  kafka: {
    title: "Kafka",
    bg: "black",
    fg: "white",
    icon: <span className="text-xs font-bold">Kafka</span>,
  },
  docker: brand("Docker", "docker-mono.svg"),
  tailwind: brand("Tailwind", "tailwind-css-mono.svg"),
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: brand("GSAP", "gsap-mono.svg"),
  motion: brand("Motion", "motion.svg"),
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "roadbuddy",
    category: "Mobile App",
    title: "RoadBuddy",
    src: "",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.swift,
        PROJECT_SKILLS.swiftui,
        PROJECT_SKILLS.materialui,
      ],
      backend: [
        PROJECT_SKILLS.python,
        PROJECT_SKILLS.flask,
        PROJECT_SKILLS.stripe,
      ],
    },
    live: "https://youtu.be/1-CiGIoMZG8",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Intercity carpooling platform connecting Cornell students for shared
            rides, reducing travel costs by 60%
          </TypographyP>
          <TypographyP className="font-mono ">
            Built with Swift/SwiftUI for iOS and Python Flask backend with 40+
            REST endpoints running at 95% uptime. Identified transportation gaps
            among Cornell students seeking shared rides to airports and
            destinations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Full-Stack Mobile Platform</TypographyH3>
          <p className="font-mono mb-2">
            Developed 8 mobile screens with integrated Stripe payments, real-time
            GPS tracking, 5-star rating system, and in-app messaging. Backend
            built with Flask REST API handling ride matching, payment processing,
            and user management.
          </p>

          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Successfully reduced travel costs by 60% for Cornell students while
            streamlining campus mobility solutions. Maintained 95% uptime across
            40+ REST endpoints with scalable architecture.
          </p>
        </div>
      );
    },
  },
  {
    id: "silverstore",
    category: "E-Commerce Platform",
    title: "SilverStore",
    src: "",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.node],
      backend: [
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.pytorch,
        PROJECT_SKILLS.python,
      ],
    },
    live: "https://kpeis695.github.io/SilverStore",
    github: "https://github.com/kpeis695/SilverStore",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Secure e-commerce platform with AI-powered recommendation system
            achieving 94% accuracy
          </TypographyP>
          <TypographyP className="font-mono ">
            Full-stack e-commerce application with integrated payment processing,
            automated inventory management, and machine learning recommendations.
            Successfully handled 30+ orders with streamlined operations.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">AI Recommendation Engine</TypographyH3>
          <p className="font-mono mb-2">
            Built collaborative filtering recommendation system using PyTorch
            that achieved 94% accuracy. Reduced manual oversight by 80% and
            increased user engagement by 76% through intelligent product
            suggestions.
          </p>

          <TypographyH3 className="my-4 mt-8">Secure Payment & Inventory</TypographyH3>
          <p className="font-mono mb-2">
            Implemented secure payment processing with PostgreSQL for reliable
            data storage. Automated inventory management system streamlined
            operations and successfully processed 30+ orders with zero downtime.
          </p>
        </div>
      );
    },
  },
  {
    id: "weather-dashboard",
    category: "Data Analytics",
    title: "Ithaca Weather Dashboard",
    src: "",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.dash, PROJECT_SKILLS.plotly],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.aws],
    },
    live: "https://ithaca-weather-dashboard.onrender.com",
    github: "#",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Interactive weather analytics platform improving rainfall prediction
            accuracy by 40%
          </TypographyP>
          <TypographyP className="font-mono ">
            Built with Python, Dash, and Plotly featuring multithreaded data
            processing from 4 locations in Ithaca. Deployed on AWS for scalable
            performance serving 30,000+ Ithaca residents.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Statistical Analysis Engine</TypographyH3>
          <p className="font-mono mb-2">
            Applied statistical analysis to predict rainfall patterns with 40%
            improved accuracy. Multithreaded data processing aggregates weather
            data from 4 locations for comprehensive analytics.
          </p>

          <TypographyH3 className="my-4 mt-8">Cloud Infrastructure</TypographyH3>
          <p className="font-mono mb-2">
            Deployed on AWS EC2 for scalable, reliable performance. Interactive
            visualizations built with Plotly help 30,000+ residents make better
            daily planning decisions.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio Website",
    title: "3D Interactive Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["landing.png"],
    live: "https://kpeis695.github.io",
    github: "https://github.com/kpeis695/personal-website",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.motion,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Interactive 3D portfolio featuring a keyboard where each keycap
            reveals a different skill. Built with Next.js 16, TypeScript, GSAP
            animations, and Spline 3D graphics.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">3D Interactive Experience</TypographyH3>
          <p className="font-mono mb-2">
            A 3D keyboard rendered with Spline where each key press reveals
            technical skills. Smooth animations powered by GSAP and Motion
            library create an engaging user experience.
          </p>

          <TypographyH3 className="my-4 mt-8">Modern Tech Stack</TypographyH3>
          <p className="font-mono mb-2">
            Built with Next.js 16 App Router, TypeScript for type safety,
            Tailwind CSS for styling, and deployed on Vercel for optimal
            performance. Dark space theme with floating particle effects.
          </p>
        </div>
      );
    },
  },
];

export default projects;
