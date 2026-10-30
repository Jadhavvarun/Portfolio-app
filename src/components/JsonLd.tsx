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
      "name": "invocreto",
      "url": "https://invocreto.com"
    },
    "email": "jadhavvarun67@gmail.com",
    "url": "https://varunjadhav.in",
    "image": "https://varunjadhav.in/hi.jpg",
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
      "https://www.linkedin.com/in/varun-jadhav-3a958b218/",
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
    "description": "Portfolio of Varun Jadhav — Full Stack Developer & Frontend Lead at invocreto. Crafting scalable full-stack architectures, enterprise design systems, and high-performance React & Next.js applications."
  };

  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Varun Jadhav Portfolio",
    "alternateName": "Varun Jadhav - Frontend Lead & Full Stack Developer",
    "url": "https://varunjadhav.in",
    "author": {
      "@type": "Person",
      "name": "Varun Jadhav"
    },
    "description": "Official engineering portfolio of Varun Jadhav, Frontend Lead at invocreto and Full Stack Developer."
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
