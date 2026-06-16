import { commonPolicyHeader, type PolicyPageData } from "./types";

export const cookiePolicyPage: PolicyPageData = {
  headerProps: {
    ...commonPolicyHeader,
    title: "Cookie Policy",
    intro:
      "Welcome to the Hawkstack Technologies Consulting Website, operated by Hawkstack Technologies Private Limited. This Cookie Policy explains how we use cookies and similar tracking technologies when you visit or interact with https://hawkstack.com/.",
  },
  sections: [
    {
      title: "What Are Cookies?",
      description:
        "Cookies are small text files stored on your local device when you access a website. They help websites function properly, remember secure environment preferences, improve access security, and enhance the browsing experience.",
      points: [
        {
          heading: "Session Cookies:",
          description: "Automatically deleted when you close your browser session.",
        },
        {
          heading: "Persistent Cookies:",
          description:
            "Remain on your device until they explicitly expire or are manually deleted.",
        },
      ],
    },
    {
      title: "Why We Use Cookies",
      description: "We use cookies across our consulting infrastructure to:",
      points: [
        { description: "Keep corporate clients securely logged into our private dashboards." },
        { description: "Save technical preferences and custom UI system layouts." },
        { description: "Improve overall website navigation and portal functionality." },
        { description: "Analyze site traffic patterns and platform responsiveness." },
        { description: "Enhance security, validation, and advanced fraud prevention." },
        {
          description:
            "Personalize technical delivery experiences for returning organizations.",
        },
      ],
    },
    {
      title: "Types of Cookies We Use",
      points: [
        {
          heading: "Essential Cookies:",
          description:
            "Required for core platform functionality, including secure corporate single sign-on (SSO) authentication, workspace session management, and firewall protection. Without these cookies, the consulting workspace cannot function properly.",
        },
        {
          heading: "Performance & Analytics Cookies:",
          description:
            "These cookies help us anonymously track how corporate visitors interact with our content, such as discovery page visits, session duration, structural guide engagement, and device or browser types. This data helps us improve user experience and interface performance.",
        },
        {
          heading: "Functional Cookies:",
          description:
            "These cookies remember user preferences such as language settings, dark/light theme preferences, and recently viewed consulting scopes or technical whitepapers.",
        },
        {
          heading: "Third-Party Cookies:",
          description:
            "Some third-party business services integrated into our site may place cookies on your device, including video presentation providers, deployment monitoring tools, payment networks, and customer support helpdesks. These providers manage their tracking mechanisms according to their own independent privacy policies.",
        },
      ],
    },
    {
      title: "Managing Cookies",
      description:
        "Most modern enterprise web browsers allow you to view stored cookies, delete individual tracking cookies, block third-party cookies entirely, or configure granular cookie acceptance preferences.",
      points: [
        {
          description:
            "Please note that disabling essential or functional cookies may disrupt features of your secure client workspace.",
        },
      ],
    },
    {
      title: "Changes to This Policy",
      description:
        "We may update this Cookie Policy periodically to reflect changes in infrastructure technology, emerging legal requirements, or new site capabilities. Updates will be posted directly on this page with a revised effective date.",
    },
    {
      title: "User Consent and Control",
      description:
        "By continuing to use our website, you consent to the use of cookies as described in this Cookie Policy. Where required by applicable data protection laws, such as the GDPR or CCPA/CPRA, users will be provided with explicit cookie consent options via a cookie banner or preference center before any non-essential cookies, such as analytics, marketing, or tracking cookies, are activated or deployed on their device.",
      points: [
        {
          description:
            "You may modify your consent preferences or opt out of non-essential tracking at any time through your browser settings or our integrated cookie management tools.",
        },
      ],
    },
    {
      title: "Contact Us",
      note: "If you have questions about this Cookie Policy, contact us at: ",
      noteEmail: "support@hawkstack.com",
    },
  ],
};
