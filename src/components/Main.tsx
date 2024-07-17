import React from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub, FaDocker, FaAngular, FaLinux, FaSass } from 'react-icons/fa';
import { SiNextdotjs, SiVercel, SiNetlify, SiTailwindcss, SiFirebase, SiElectron, SiRedux, SiPostman, SiMongodb, SiMysql } from 'react-icons/si';
import { FaEnvelope, FaUser, FaPaperPlane, FaExternalLinkAlt } from 'react-icons/fa';

const Main = () => {

  const projects = [
    {
      id: 1,
      title: "Portfolio Site",
      description: "A modern web application built with React and Node.js, featuring real-time data updates and responsive design.",
      image: "/placeholder.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      githubLink: "https://github.com/yourusername/project-one",
      liveLink: "https://project-one.example.com"
    },
    {
      id: 2,
      title: "News App",
      description: "An e-commerce platform developed using Next.js and Stripe, offering a seamless shopping experience with secure payments.",
      image: "/placeholder.png",
      technologies: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
      githubLink: "https://github.com/yourusername/project-two",
      liveLink: "https://news-app-gsp.netlify.app"
    },
    {
      id: 3,
      title: "Project Three",
      description: "A mobile app built with React Native, allowing users to track their fitness goals and connect with personal trainers.",
      image: "/placeholder.png",
      technologies: ["React Native", "Firebase", "Redux", "Expo"],
      githubLink: "https://github.com/yourusername/project-three",
      liveLink: "https://project-three.example.com"
    }
  ];

  return (
    <main>
      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
  <div className="container mx-auto w-full max-w-screen-xl px-4">
    <h2 className="text-5xl font-extrabold mb-16 text-center text-gray-800">
      About Me
      <div className="w-24 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
    </h2>
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-2/5 mb-12 lg:mb-0">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <Image
            src="/placeholder.png"
            alt="Varun Jadhav"
            width={400}
            height={400}
            className="relative rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </div>
      <div className="lg:w-1/2">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">
        Hello, I&apos;m <span className="text-blue-600">Varun Jadhav</span>
        </h3>
        <p className="text-xl text-gray-600 mb-6 leading-relaxed">
        I&apos;m a passionate Frontend Developer with a keen eye for design. 
          My mission is to create beautiful, functional websites that solve real-world problems and deliver exceptional user experiences.
        </p>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          With <span className="font-semibold text-gray-800">1.6 years</span> of experience in the field, I&apos;ve had the privilege of working on a diverse range of projects, 
          from small business websites to complex web applications. Each project has honed my skills and fueled my passion for web development.
        </p>
      </div>
    </div>
  </div>
</section>

<section id="experience-education" className="py-24 bg-gradient-to-tl from-gray-50 to-gray-100">
  <div className="container mx-auto w-full max-w-screen-xl px-4">
    <h2 className="text-5xl font-extrabold mb-16 text-center text-gray-800">
      Experience & Education
      <div className="w-32 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
    </h2>

    <div className="grid lg:grid-cols-2 gap-12">
      {/* Experience Column */}
      <div>
        <h3 className="text-3xl font-bold text-blue-600 mb-8">Experience</h3>
        <div className="space-y-10">
          {/* Experience Item 1 */}
          <div className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
            <h4 className="text-xl font-semibold text-gray-800">Frontend Developer</h4>
            <p className="text-lg text-gray-600">Syntags Consultancy & Services Pvt. Ltd.</p>
            <p className="text-md text-gray-500">June 2024 - Present</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Developed responsive web applications using React and Next.js</li>
              <li>Collaborated with UX designers to implement pixel-perfect designs</li>
            </ul>
          </div>
          
          {/* Experience Item 2 */}
          <div className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
            <h4 className="text-xl font-semibold text-gray-800">Frontend Developer</h4>
            <p className="text-lg text-gray-600">Unipolar Technologies Pvt. Ltd.</p>
            <p className="text-md text-gray-500">Aug 2023 - June 2024</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Built and maintained client websites using WordPress and custom PHP</li>
              <li>Optimized website performance, improving load times by 30%</li>
            </ul>
          </div>

          {/* Experience Item 3 */}
          <div className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
            <h4 className="text-xl font-semibold text-gray-800">Software Developer Intern</h4>
            <p className="text-lg text-gray-600">Unipolar Technologies Pvt. Ltd.</p>
            <p className="text-md text-gray-500">Feb 2023 - July 2023</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>Assisted in building and maintaining client websites</li>
              <li>Learned and applied best practices in web development</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education Column */}
      <div>
        <h3 className="text-3xl font-bold text-blue-600 mb-8">Education</h3>
        <div className="space-y-12">
          {/* Education Item 1 */}
          <div className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
            <h4 className="text-xl font-semibold text-gray-800">Masters of Computer Application.</h4>
            <p className="text-lg text-gray-600">Sterling Institue of Management Studies</p>
            <p className="text-md text-gray-500">June 2023</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>CGPA: 8.11</li>
              <li>Relevant coursework: Web Development, Data Structures, Algorithms</li>
              <li>Senior project: Developed a full-stack e-commerce platform</li>
            </ul>
          </div>
          
          {/* Education Item 2 */}
          <div className="relative pl-8 border-l-2 border-blue-500">
            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
            <h4 className="text-xl font-semibold text-gray-800">Bachelors of Commerce.</h4>
            <p className="text-lg text-gray-600">Sydenham College of Commerce & Economics</p>
            <p className="text-md text-gray-500">May 2021</p>
            <ul className="mt-2 list-disc list-inside text-gray-600">
              <li>CGPA: 6.60</li>
              <li>Mastered HTML, CSS, JavaScript, and React</li>
              <li>Built 5 projects as part of the curriculum</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[
            { icon: <FaHtml5 size={50} />, name: 'HTML5' },
            { icon: <FaCss3Alt size={50} />, name: 'CSS3' },
            { icon: <FaJs size={50} />, name: 'JavaScript' },
            { icon: <FaReact size={50} />, name: 'React' },
            { icon: <FaNodeJs size={50} />, name: 'Node.js' },
            { icon: <FaGithub size={50} />, name: 'Git' },
            { icon: <SiNextdotjs size={50} />, name: 'Next.js' },
            { icon: <FaAngular size={50} />, name: 'Angular' },
            { icon: <FaDocker size={50} />, name: 'Docker' },
            { icon: <SiVercel size={50} />, name: 'Vercel' },
            { icon: <SiNetlify size={50} />, name: 'Netlify' },
            { icon: <SiTailwindcss size={50} />, name: 'Tailwind CSS' },
            { icon: <SiFirebase size={50} />, name: 'Firebase' },
            { icon: <FaLinux size={50} />, name: 'Linux' },
            { icon: <SiElectron size={50} />, name: 'Electron' },
            { icon: <FaSass size={50} />, name: 'Sass' },
            { icon: <SiRedux size={50} />, name: 'Redux' },
            { icon: <SiPostman size={50} />, name: 'Postman' },
            { icon: <SiMongodb size={50} />, name: 'MongoDB' },
            { icon: <SiMysql size={50} />, name: 'SQL' },
          ].map((skill, index) => (
            <div key={index} className="flex flex-col items-center">
              {skill.icon}
              <span className="mt-2 text-lg text-center">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <h2 className="text-4xl font-bold mb-4 text-center text-gray-800">My Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each one presented unique challenges and opportunities for growth.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition duration-300">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-2">Technologies used:</h4>
                  <div className="flex flex-wrap">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex justify-between">
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition duration-300 flex items-center">
                    <FaGithub className="mr-2" /> View Code
                  </a>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600 transition duration-300 flex items-center">
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        I&apos;m always open to new opportunities and collaborations. Feel free to reach out if you have any questions or just want to say hello!
        </p>
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="mb-4">Fill out the form and I will get back to you within 24 hours.</p>
              <div className="flex items-center mb-4">
                <FaEnvelope className="mr-2" />
                <span>jadhavvarun67@gmail.com</span>
              </div>
              <div className="flex items-center mb-4">
                <FaUser className="mr-2" />
                <span>Varun Jadhav</span>
              </div>
              {/* Add more contact details or social media links here */}
            </div>
            <div className="md:w-1/2 p-8">
              <form>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" required />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center">
                  <FaPaperPlane className="mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Main;