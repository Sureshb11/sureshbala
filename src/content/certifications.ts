import { Certification, Education } from "@/types";

export const certifications: Certification[] = [
  {
    name: "Microsoft Desktop Support Associate (MDSA)",
    issuer: "Microsoft Certified",
    status: "Certified",
    description: "Enterprise desktop systems administration, Active Directory, endpoint configuration, and network diagnostics.",
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    status: "Certified",
    description: "AWS cloud architecture, EC2, S3, IAM, Lambda, VPC networking, security controls, and cloud billing management.",
  },
  {
    name: "AI for Healthcare",
    issuer: "Coursera / DeepLearning.AI",
    status: "Completed",
    description: "Application of machine learning to clinical datasets, medical imaging evaluation, and healthcare NLP systems.",
  },
];

export const educations: Education[] = [
  {
    degree: "Bachelor of Engineering (B.E)",
    specialization: "Electrical & Electronics Engineering (EEE)",
    institution: "Anna University",
    year: "2009 — 2013",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    specialization: "Computer Science & Mathematics",
    institution: "State Board",
    year: "2007 — 2009",
  },
  {
    degree: "Secondary School Leaving Certificate (SSLC)",
    specialization: "Mathematics & Science",
    institution: "State Board",
    year: "2006 — 2007",
  },
];
