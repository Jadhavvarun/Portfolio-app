import Image from 'next/image';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 min-h-screen flex items-center">
      <div className="container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-yellow-300">Varun Jadhav</span>
          </h1>
          <h2 className="text-3xl mb-6">Frontend Developer</h2>
          <p className="text-xl mb-8 max-w-md">
            I create beautiful, responsive websites that drive results. 
            Let's bring your vision to life!
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mb-8">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 hover:text-blue-800 transition duration-300">
              View My Work
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition duration-300">
              Contact Me
            </button>
          </div>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="#" className="text-white hover:text-yellow-300 transition duration-300">
              <FaGithub size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition duration-300">
              <FaLinkedin size={24} />
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition duration-300">
              <FaTwitter size={24} />
            </a>
          </div>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0">
          <div className="relative w-64 h-64 mx-auto md:w-96 md:h-96">
            <Image
              src="/hello-1.avif"
              alt="hello"
              layout="fill"
              objectFit="contain"
              className="rounded-full shadow-2xl bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;