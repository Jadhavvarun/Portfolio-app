import React from "react";
import Head from "next/head";

export const JsonLd: React.FC = () => {
  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Varun Jadhav",
    "alternateName": ["Varun", "Varun Jadhav"],
    "jobTitle": "Full Stack Developer & Frontend Lead",
    "worksFor": {
      "@type": "Organization",
      "name": "InvoCreto",
      "url": "https://invocreto.com"
    },
    "email": "jadhavvarun67@gmail.com",
    "telephone": "+917738412722",
    "url": "https://varunjadhav.dev",
    "image": "https://varunjadhav.dev/placeholder.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "alumniOf": [
      {
        "@type": "CollegeOrUniversity",
        "name": "Mumbai University"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/varun-jadhav-620814152/",
      "https://github.com/Jadhavvarun"
    ],
    "knowsAbout": [
      "Next.js",
      "React.js",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "RabbitMQ",
      "Microservices",
      "Docker",
      "CI/CD",
      "Tailwind CSS",
      "Framer Motion",
      "MongoDB",
      "PostgreSQL",
      "MySQL",
      "RESTful APIs",
      "GraphQL",
      "Web Performance Optimization",
      "Frontend Architecture",
      "Design Systems"
    ],
    "description": "Portfolio of Varun Jadhav — Full Stack Developer & Frontend Lead at InvoCreto. Crafting scalable full-stack architectures, enterprise design systems, and high-performance React & Next.js applications."
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Varun Jadhav Portfolio",
    "alternateName": "Varun Jadhav - Frontend Lead @ InvoCreto",
    "url": "https://varunjadhav.dev",
    "author": {
      "@type": "Person",
      "name": "Varun Jadhav"
    },
    "description": "Official engineering portfolio of Varun Jadhav, Frontend Lead at InvoCreto and Full Stack Developer."
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personStructuredData) }}
        key="person-jsonld"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }}
        key="website-jsonld"
      />
    </Head>
  );
};

export default JsonLd;
