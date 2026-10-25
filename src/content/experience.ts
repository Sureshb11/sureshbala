import { CareerExperience } from "@/types";

export const careerTimeline: CareerExperience[] = [
  {
    period: "2022 — Present",
    role: "Lead Networking Engineer, DevOps & AI Developer",
    company: "Nalam Healthcare IT Solutions Pvt. Ltd.",
    location: "Chennai, Tamil Nadu, India",
    isCurrent: true,
    summary:
      "Expanded engineering leadership bridging AI application engineering, cloud DevOps, and healthcare IT infrastructure for 500+ hospital clients across web and mobile platforms.",
    responsibilities: [
      "Architected and engineered AI-powered healthcare web (React.js) and mobile (React Native) applications with LLM integrations for clinical note summarization and patient triage.",
      "Accelerated engineering workflows using AI IDEs (Cursor and Antigravity) for rapid code generation, intelligent refactoring, and AI-assisted debugging.",
      "Delivered end-to-end applications from requirements gathering, system design, CI/CD pipeline setup, to production multi-cloud deployments on AWS and Azure.",
      "Engineered FHIR/HL7 data exchange interfaces connecting hospital information systems (HIS) with patient-facing mobile apps.",
      "Reduced patient intake processing time by 40% through AI-driven diagnostic questionnaire modules and appointment scheduling.",
      "Architected high-availability multi-cloud solutions on AWS (EC2, S3, Lambda, ACM) and Azure (VMs, Blob Storage, Azure DevOps) maintaining 99.9% uptime for mission-critical hospital workloads.",
      "Maintained enterprise-level Active Directory, Microsoft 365, and Exchange Server infrastructure across 500+ hospital endpoint environments.",
    ],
    techStack: [
      "React.js",
      "React Native",
      "Node.js",
      "OpenAI API",
      "FHIR/HL7",
      "Azure DevOps",
      "AWS",
      "Docker",
      "PostgreSQL",
      "Antigravity",
    ],
  },
  {
    period: "Jan 2018 — 2022",
    role: "Lead Networking Engineer & DevOps Engineer",
    company: "Nalam Healthcare IT Solutions Pvt. Ltd.",
    location: "Chennai, Tamil Nadu, India",
    summary:
      "Directed core IT networking, server reliability, and cloud modernization initiatives across 500+ hospital client endpoints, laying the groundwork for cloud migration.",
    responsibilities: [
      "Led network infrastructure design, configuration, and troubleshooting across hospital campus environments including Cisco routers, switches, VLANs, and IP routing.",
      "Administered AWS cloud environments (EC2, S3, Certificate Manager) and spearheaded Azure service integration for hybrid enterprise networking.",
      "Managed enterprise-scale Active Directory, Microsoft 365, and Exchange Server (2003-2016) deployments.",
      "Automated infrastructure maintenance routines and introduced CI/CD deployment pipelines on Azure DevOps.",
      "Provided L1/L2 enterprise escalation management, improving SLA compliance by 35%.",
    ],
    techStack: [
      "AWS",
      "Azure",
      "Cisco Networking",
      "Active Directory",
      "Microsoft 365",
      "Exchange Server",
      "VLAN / TCP/IP",
      "Linux / Windows Server",
    ],
  },
  {
    period: "Mar 2015 — Dec 2017",
    role: "Technical Engineer / Network Engineer",
    company: "Technobees Solutions Pvt. Ltd. (later Nalam Healthcare)",
    location: "Chennai, Tamil Nadu, India",
    summary:
      "Provided foundational technical engineering and networking administration for hospital clients across server, desktop, and communication systems.",
    responsibilities: [
      "Configured Cisco routers, managed switches, VLANs, DNS, DHCP, and enterprise subnets for medical campus networks.",
      "Commissioned and maintained Windows Server, Active Directory domain controllers, and Exchange Server installations.",
      "Delivered first-line systems engineering and on-site hardware/networking troubleshooting.",
    ],
    techStack: ["Cisco Routers & Switches", "Windows Server", "Active Directory", "DNS/DHCP", "LAN/WAN"],
  },
  {
    period: "Jun 2013 — Mar 2015",
    role: "Technical Engineer",
    company: "vServe Systems",
    location: "Chennai, Tamil Nadu, India",
    summary:
      "Initiated professional engineering career executing hardware, biometric access control systems, surveillance, and corporate network deployments.",
    responsibilities: [
      "Designed and commissioned complete biometric access control, attendance systems, and security surveillance networks for commercial enterprise clients.",
      "Handled hardware assembly, operating system deployments, driver configurations, and network printer sharing.",
      "Delivered technical support for enterprise LAN networking and client workstation maintenance.",
    ],
    techStack: ["Biometric Systems", "CCTV & Security Networks", "Hardware Assembly", "LAN/WAN", "System Administration"],
  },
];
