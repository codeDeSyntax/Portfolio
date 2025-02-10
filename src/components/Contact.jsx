import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/codeDeSyntax" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/jozzyinc/" },
    { icon: <FaTwitter />, href: "https://twitter.com" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-background via-background to-primary py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-5/12 space-y-8"
          >
            <div className="text-center lg:text-left">
              <h2 className="text-lg font-light text-accent mb-2">GET IN TOUCH</h2>
              <h1 className="text-3xl sm:text-4xl font-bold text-text mb-6">
                Let's Build Something Amazing Together
              </h1>
              <p className="text-text/80">
                Ready to start your next project? I'm here to turn your ideas into reality. 
                Drop me a message and let's create something extraordinary.
              </p>
            </div>

            {/* Profile Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-background/50 backdrop-blur p-6 rounded-2xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src="https://avatars.githubusercontent.com/u/157339009?v=4"
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-bold text-text">Josiah Ok</h3>
                  <p className="text-text/70">Full stack Developer</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <a href="mailto:contact@example.com" className="flex items-center gap-3 text-text/80 hover:text-accent transition-colors">
                  <FaEnvelope />
                  minwidth49@gmail.com
                </a>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="text-xl text-text/70 hover:text-accent transition-colors"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:w-7/12 w-full"
          >
            <div className="bg-background/50 backdrop-blur p-8 rounded-2xl shadow-lg">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-text/70 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-text/10 text-text placeholder-text/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text/70 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg bg-background/50 border border-text/10 text-text placeholder-text/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text/70 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-text/10 text-text placeholder-text/50 focus:outline-none focus:ring-2 focus:ring-accent/50"
                    placeholder="Project discussion"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text/70 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-text/10 text-text placeholder-text/50 focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-accent text-background rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;