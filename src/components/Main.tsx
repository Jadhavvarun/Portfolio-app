import React from 'react';
import Image from 'next/image';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGithub } from 'react-icons/fa';

const Main = () => {
  return (
    <main>
      {/* About Section */}
      <section id="about" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/your-profile-picture.jpg"
                alt="Your Name"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <p className="text-xl mb-4">
                Hello! I'm [Your Name], a passionate web developer with a keen eye for design. 
                I love creating beautiful, functional websites that solve real-world problems.
              </p>
              <p className="text-xl">
                With [X] years of experience in the field, I've worked on a variety of projects 
                ranging from small business websites to complex web applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { icon: <FaHtml5 size={50} />, name: 'HTML5' },
              { icon: <FaCss3Alt size={50} />, name: 'CSS3' },
              { icon: <FaJs size={50} />, name: 'JavaScript' },
              { icon: <FaReact size={50} />, name: 'React' },
              { icon: <FaNodeJs size={50} />, name: 'Node.js' },
              { icon: <FaGithub size={50} />, name: 'Git' },
            ].map((skill, index) => (
              <div key={index} className="flex flex-col items-center">
                {skill.icon}
                <span className="mt-2 text-lg">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={`/project-${project}.jpg`}
                  alt={`Project ${project}`}
                  width={400}
                  height={250}
                  className="w-full"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">
                    Brief description of project {project}. Highlight key features and technologies used.
                  </p>
                  <a href="#" className="text-blue-500 hover:underline">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Get In Touch</h2>
          <div className="max-w-md mx-auto">
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;