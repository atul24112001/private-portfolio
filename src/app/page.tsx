import { Github, Globe, Linkedin, Mail, Phone, X } from "lucide-react";
import Image from "next/image";
import profileImage from "./assets/Profile.jpg";
import LinkButton from "@/components/LinkButton";
import Wrapper from "@/components/Wrapper";
import WorkExperience from "@/components/WorkExperience";
import PullRequest from "@/components/PullRequest";
import Head from "next/head";
import Chip from "@/components/Chip";
import FreelanceWork from "@/components/FreelanceWork";

const WE = [
  {
    id: "3",
    designation: "Full-Stack Engineer",
    companyName: "Tenantpe",
    date: "Feb 2024 - Present",
    location: "Remote",
    companyLink: "https://dev.tenantpe.com",
    skills: [
      "React",
      "Nodejs",
      "Express",
      "Postgres",
      "Typescript",
      "NextJs",
      "CI/CD",
      "Cypress",
      "AWS Devops",
    ],
  },
  {
    id: "2",
    designation: "Full-Stack Engineer",
    companyName: "Settyl",
    date: "Jan 2023 - Dec 2023",
    location: "Remote",
    companyLink: "https://settyl.com",
    skills: [
      "React",
      "Nodejs",
      "Express",
      "MongoDb",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Microservices",
      "Azure Devops",
    ],
  },
  {
    id: "1",
    designation: "Full-Stack Engineer Intern",
    companyName: "Settyl",
    date: "May 2022 - Dec 2022",
    location: "Remote",
    companyLink: "https://settyl.com",
    skills: ["React", "Nodejs", "Express", "MongoDb"],
  },
];

const PRs = [
  {
    id: "1",
    title: "code100x/muzer #43",
    link: "https://github.com/code100x/muzer/pull/43",
    addition: "+5,079",
    subtraction: "−2,586",
  },
  {
    id: "1",
    title: "code100x/muzer #89",
    link: "https://github.com/code100x/muzer/pull/89 ",
    addition: "+142",
    subtraction: "−54",
  },
];

const SKILLS = [
  "ReactJs",
  "NodeJs",
  "Typescript",
  "SQL/NoSQL",
  "NextJs",
  "Redis",
  "AWS",
  "Devops",
  "Docker",
  "Kubernetes",
  "CI/CD",
  "Cypress",
  "Jest",
  "Dart/Flutter",
];

const FREELANCE = [
  {
    id: "1",
    label: "Wynter dreams",
    link: "https://www.wyntersdreams.com",
    date: "Jan 2024",
    skills: ["React", "Go", "Razorpay", "CI/CD", "Docker", "Postgres"],
  },
  {
    id: "2",
    label: "My Ai Teacher",
    link: "https://play.google.com/store/apps/details?id=com.mmbg.myaiteacher&hl=en_IN",
    date: "Dec 2023",
    skills: ["React", "Flutter", "Razorpay", "Nodejs", "Postgres"],
  },
];

export default function Home() {
  return (
    <div className="py-12">
      <Head>
        <title>Atul Morchhlay</title>
        <meta
          property="og:title"
          content="Atul Morchhlay portfolio"
          key="title"
        />
      </Head>
      <div className="w-11/12 md:w-2/3 lg:w-2/5 mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-2 ">
            <div className="flex items-center gap-2">
              <h1 className="text-xl md:text-2xl font-bold m-0">
                Atul Morchhlay
              </h1>
              {/* <a
                className="flex items-center gap-2 bg-slate-300 text-black px-2 py-1 rounded-sm text-xs mt-1 font-bold font-mono"
                href="mailto:atulmorchhlay204@gmail.com"
              >
                <Mail size={14} /> Hire me!
              </a> */}
            </div>
            <p className="font-mono text-pretty font-normal text-xs md:text-sm text-muted-foreground">
              Crafting scalable, user-centric digital solutions with full-stack
              expertise and modern technology.
            </p>
            <a
              href="https://maps.app.goo.gl/jkwfRw9YxYa6sEyR8"
              target="_blank"
              className="flex hover:underline items-center gap-2 text-xs md:text-sm text-muted-foreground"
              id="current-location"
            >
              <Globe size={14} /> Indore, Madhya Pradesh, India
            </a>
            <div className="flex gap-3">
              <LinkButton
                tooltip="Mail"
                href="mailto:atulmorchhlay204@gmail.com"
              >
                <Mail width={14} className="text-muted-foreground" />
              </LinkButton>
              <LinkButton tooltip="Phone" href="tel:+919669801746">
                <Phone width={14} className="text-muted-foreground" />
              </LinkButton>
              <LinkButton
                tooltip="Github"
                href="https://github.com/atul24112001"
              >
                <Github width={14} className="text-muted-foreground" />
              </LinkButton>
              <LinkButton
                tooltip="Linkedin"
                href="https://www.linkedin.com/in/atul-morchhlay"
              >
                <Linkedin width={14} className="text-muted-foreground" />
              </LinkButton>
              <LinkButton
                tooltip="Twitter/X"
                href="https://x.com/MorchhlayAtul"
              >
                <X width={14} className="text-muted-foreground" />
              </LinkButton>
              {/* <LinkButton href="">
                <ScrollText width={14} className="text-muted-foreground" />
              </LinkButton> */}
            </div>
          </div>
          <div className=" flex justify-end w-[150px]">
            <Image
              className="rounded-sm"
              width={150}
              height={150}
              alt="profile"
              src={profileImage}
            />
          </div>
        </div>
        <Wrapper heading="Skills">
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill, index) => {
              return <Chip key={`skill-${index + 1}`}>{skill}</Chip>;
            })}
          </div>
        </Wrapper>
        <Wrapper heading="Work Experience">
          {WE.map((we) => {
            return <WorkExperience {...we} key={we.id} />;
          })}
        </Wrapper>
        <Wrapper heading="Open Source">
          {PRs.map((pr) => {
            return <PullRequest key={pr.id} {...pr} />;
          })}
        </Wrapper>
        <Wrapper heading="Freelance work">
          {FREELANCE.map((work) => {
            return <FreelanceWork key={work.id} {...work} />;
          })}
        </Wrapper>
      </div>
    </div>
  );
}
