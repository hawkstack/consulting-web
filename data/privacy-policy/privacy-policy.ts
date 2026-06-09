import { PrivacySection } from "@/app/types/privacy-policy/privacy-policy";

export const privacySections: PrivacySection[] = [
  {
    title: "Information We Collect",
    points: [
      {
        heading: "Corporate & Personal Information:",
        description:
          "Full name, business email address, phone number, job title, company/organizational affiliation, corporate billing details, and project requirements submitted via discovery forms.",
      },
      {
        heading: "Consulting & Technical Infrastructure Data:",
        description:
          "System logs, architectural data templates, project tracking inputs, deployment metrics, IP addresses, browser types, and interface analytics gathered during client discovery and environment staging.",
      },
      {
        heading: "Data Controller Identification & Registered Office:",
        description:
          "Hawkstack Technologies Private Limited, a company incorporated under the laws of India, with its registered office address at 2nd Floor, 780, 16th Main Rd, Kuvempu Nagar, BTM Layout 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076, acts as the statutory Data Controller for all personal data collected, processed, and stored through https://hawkstack.com/.",
      },
    ],
  },
  {
    title: "Legal Basis for Processing (GDPR & Global Compliance)",
    description:
      "If your organization or its representatives reside within the European Economic Area (EEA) or jurisdictions with equivalent data protection frameworks, our legal bases for processing data include:",
    points: [
      {
        heading: "Performance of a Contract:",
        description:
          "Necessary to execute master services agreements (MSAs), statements of work (SOWs), configure active cloud engineering pipelines, and manage corporate consulting accounts.",
      },
      {
        heading: "Legitimate Interests:",
        description:
          "Necessary to improve corporate network security, analyze usage trends on our architectural portals, prevent corporate fraud, and optimize our technical deployment solutions.",
      },
      {
        heading: "Consent:",
        description:
          "Where individual corporate stakeholders have explicitly opted-in to receive enterprise insights, red papers, or marketing updates, which can be withdrawn at any time.",
      },
    ],
  },
  {
    title: "How We Use Your Information",
    description:
      "We utilize your data to fulfill enterprise consulting agreements, architect and manage active Red Hat staging or production environments, process secure business transactions, send critical infrastructure updates, maintain network security, and analyze performance trends to improve our enterprise delivery workflows.",
  },
  {
    title: "Data Sharing, Confidentiality, and International Transfers",
    points: [
      {
        heading: "No Sale of Corporate Data:",
        description:
          "Hawkstack Technologies Private Limited does not sell, rent, or trade your personal or organizational information to third parties.",
      },
      {
        heading: "Enterprise Service Providers:",
        description:
          "We may share data with trusted data processors who assist us in operating our enterprise portals, including cloud infrastructure providers, sandboxed lab hosts, and secure payment processing networks. All third parties are contractually bound to maintain strict confidentiality and equivalent security standards.",
      },
      {
        heading: "International Transfers:",
        description:
          "Project and contact data may be transferred to, and maintained on, servers located outside your home jurisdiction. By executing consulting discovery, you consent to the transfer of information to countries where our hybrid-cloud infrastructure operates, ensuring that appropriate Standard Contractual Clauses (SCCs) or data protection safeguards are securely in place.",
      },
    ],
  },
  {
    title: "Data Security and Enterprise Retention",
    points: [
      {
        heading: "Security Measures:",
        description:
          "We implement rigid industry-standard technical, administrative, and physical safeguards, including comprehensive SSL/TLS encryption and access-controlled repositories, to protect active project data from unauthorized access, loss, or alteration.",
      },
      {
        heading: "Retention:",
        description:
          "We retain corporate personal information only for as long as your enterprise account remains active, as needed to fulfill multi-year engineering contracts, or as required to comply with legal, tax, and corporate auditing obligations.",
      },
    ],
  },
  {
    title: "Your Rights (GDPR / CCPA / Global Privacy Rights)",
    description:
      "Depending on your geographic location, your corporate representatives may possess the following rights regarding their data:",
    points: [
      {
        heading: "Right to Access/Portability:",
        description: "Request a copy of the corporate personal data we hold.",
      },
      {
        heading: "Right to Correction:",
        description:
          "Request that we update or correct inaccurate profile information.",
      },
      {
        heading: "Right to Erasure:",
        description:
          "Request the permanent deletion of account data, subject to active contractual or legal retention overrides.",
      },
      {
        heading: "Right to Object/Restrict:",
        description:
          "Object to or restrict certain data processing activities.",
      },
    ],
    note: "To exercise any of these rights, please contact our dedicated data privacy desk at: ",
    noteEmail: "support@hawkstack.com",
  },
  {
    title: "Children's Privacy",
    description: [
      "HawkStack Technologies consulting website, enterprise portals, and architectural services are strictly intended for, marketed to, and designed for corporate clients and adult professionals over eighteen (18) years of age. We do not knowingly collect, request, or maintain personal information from individuals under the age of 18.",

      "If we discover or are notified that an individual under 18 has submitted personal information through our platform, we will take immediate operational steps to delete such data securely from our active repositories.",
    ],
  },
  {
    title: "Contact Us",
    contactInfo: {
      company: "HawkStack Technologies",
      website: "https://hawkstack.com/",
      email: "support@hawkstack.com",
    },
  },
];
