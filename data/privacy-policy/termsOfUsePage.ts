import { commonPolicyHeader, type PolicyPageData } from "./types";

export const termsOfUsePage: PolicyPageData = {
  headerProps: {
    ...commonPolicyHeader,
    title: "Terms of Use",
    intro:
      'Welcome to the HawkStack Technologies Consulting Platform ("Platform"), operated by Hawkstack Technologies Private Limited. By accessing or using https://hawkstack.com/ (the "Site") and engaging our associated project discovery, systems architecture, or engineering delivery tools (collectively, the "Services"), you agree to be bound by these Terms of Use. If you do not agree to these terms, you must discontinue use of the Site immediately.',
  },
  sections: [
    {
      title: "Scope of Services and Eligibility",
      description:
        "Hawkstack Technologies Private Limited provides enterprise IT consulting, custom automation design, microservices orchestration, and hybrid-cloud infrastructure deployment engineering focusing on open-source ecosystems including RHEL 10, Ansible, OpenShift, and OpenStack.",
      points: [
        {
          heading: "Eligibility:",
          description:
            "To access this Site or submit corporate project details, you must possess the legal authority to bind your organization or employer to these terms.",
        },
        {
          heading: "Service Evolution:",
          description:
            "We reserve the right to modify, update, or optimize any aspect of the consulting portal, resource tools, or service offerings at any time without prior notice.",
        },
      ],
    },
    {
      title: "Account Responsibilities",
      description:
        "To access certain secure client portals or project tracking repositories, you must register for an authorized account. You agree to:",
      points: [
        { description: "Provide completely accurate, current, and true information during registration." },
        { description: "Maintain the strict confidentiality of your project login credentials." },
        {
          description:
            "Accept full responsibility for all activities that occur under your organizational account.",
        },
        {
          description:
            "Notify us immediately at support@hawkstack.com if you suspect any unauthorized use or security breach of your project workspace.",
        },
      ],
    },
    {
      title: "Payments, Corporate Billing, and Financial Integrity",
      points: [
        {
          heading: "Fees & Taxes:",
          description:
            "Access to consulting scopes, technical architectures, or tailored deployment models is subject to the fees specified within your executed Statement of Work (SOW) or digital ordering page. All fees are exclusive of applicable regional taxes, including GST, CGST, SGST, or IGST, which remain the client's responsibility.",
        },
        {
          heading: "No Refunds & Statutory Exceptions:",
          description:
            "Except as explicitly set forth in a signed Master Services Agreement (MSA) or Statement of Work (SOW), all fees, retainers, and milestone payments made toward HawkStack's consulting services are final and non-refundable. Refunds or contract liquidations will only be processed where explicitly mandated by applicable statutory local laws or consumer protection regulations that cannot be contractually waived or overridden by an enterprise agreement.",
        },
        {
          heading: "Payment Disputes:",
          description:
            "Initiating an unauthorized chargeback or payment dispute with your financial institution without first contacting our billing team will result in the immediate, permanent termination of platform access, freezing of active staging infrastructure, and legal review for breach of contract.",
        },
        {
          heading: "Anti-Corruption:",
          description:
            "Hawkstack Technologies Private Limited maintains a zero-tolerance policy for bribery and corruption. By using this Site or engaging in associated business activities, you agree to comply with applicable anti-corruption laws. Users, partners, and subcontractors shall not offer, give, solicit, or receive bribes, kickbacks, improper gifts, or unauthorized financial advantages.",
        },
      ],
    },
    {
      title: "Intellectual Property and Usage Restrictions",
      description:
        "All content hosted on this Site, including but not limited to open-source configuration blueprints, custom playbooks, reference architectures, text, graphics, logos, software dashboards, and proprietary technical code, is the exclusive property of Hawkstack Technologies Private Limited or its licensors and is protected by international intellectual property laws.",
      points: [
        {
          heading: "Export Control and Global Sanctions Compliance:",
          description:
            "You represent and warrant that your organization, its subsidiaries, and its deploying engineers are not located in, under the control of, or a national or resident of any country subject to comprehensive international trade sanctions, UN embargoes, or restricted lists.",
        },
        {
          heading: "Acceptable Use & Restrictions:",
          description:
            "You are granted a limited, personal, non-exclusive, non-transferable license to access our public-facing tools for business evaluation purposes.",
        },
        {
          description:
            "You may not copy, record, redistribute, resell, or publicly exploit any platform code, custom configuration designs, or proprietary consulting frameworks.",
        },
        {
          description:
            "You may not share client portal credentials or allow unauthorized third-party teams to access non-public consulting workspaces.",
        },
        {
          description:
            "You may not use any consulting site content, structural code snippets, or technical documentation to train, fine-tune, or test Large Language Models (LLMs) or artificial intelligence systems without explicit written consent.",
        },
      ],
    },
    {
      title: "Disclaimers and Limitation of Liability",
      points: [
        {
          heading: '"As-Is" Basis:',
          description:
            'The Site and its engineering resources are provided on an "as-is" and "as-available" basis. Hawkstack Technologies Private Limited makes no warranties, express or implied, regarding continuous availability, error-free operation, compatibility with all external enterprise environments, or specific commercial outcomes.',
        },
        {
          heading: "Limitation of Liability:",
          description:
            "To the maximum extent permitted by applicable law, Hawkstack Technologies Private Limited, its directors, employees, or partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of your use or inability to use the consulting Site.",
        },
      ],
    },
    {
      title: "Termination",
      description:
        "We reserve the right, in our sole discretion, to suspend, restrict, or terminate your portal access, without notice or liability, for behavior that violates these Terms, breaches our corporate code of conduct, or harms other clients, our partners, or our broader business interests.",
    },
    {
      title: "Governing Law and Dispute Resolution",
      description:
        "These Terms shall be governed by, construed, and enforced in accordance with the laws of the State of Karnataka and the federal laws of the Republic of India, without regard to conflict of law principles. Any dispute shall be referred to and finally resolved by binding arbitration in accordance with the Arbitration and Conciliation Act, 1996.",
      points: [
        { heading: "Seat & Venue:", description: "The seat and venue of the arbitration shall be Bengaluru, India." },
        {
          heading: "Tribunal Configuration:",
          description:
            "The tribunal shall consist of a sole arbitrator mutually appointed by both parties. If the parties fail to agree within thirty (30) days of the dispute notice, the arbitrator shall be appointed by the appropriate judicial authority.",
        },
        {
          heading: "Language:",
          description:
            "The language of the arbitration proceedings shall be English. The arbitral award shall be final, binding, and enforceable upon both parties.",
        },
      ],
    },
    {
      title: "Contact Information",
      note: "For questions regarding these Terms, please contact us at: ",
      noteEmail: "support@hawkstack.com",
    },
  ],
};
