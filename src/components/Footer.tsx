import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">Varun Jadhav</h3>
            <p className="mb-4">Passionate frontend developer creating beautiful and functional web experiences.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-blue-400 transition duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition duration-300">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition duration-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get in Touch</h4>
            <p className="mb-2">Email: jadhavvarun67@gmail.com</p>
            <p>Location: Mumbai, India</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
                <FaGithub className="text-2xl" />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition duration-300">
                <FaTwitter className="text-2xl" />
              </a>
              <a href="mailto:varun@example.com" className="text-gray-300 hover:text-white transition duration-300">
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Varun Jadhav. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;