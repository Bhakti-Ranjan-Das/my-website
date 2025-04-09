import React from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-indigo-600">BHAKTI RANJAN DAS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Full Stack Developer passionate about creating beautiful and functional web applications
          </p>
          <div className="flex justify-center gap-6">
            <a href="https://github.com/BHAKTI-RANJAN-DAS" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/bhakti-ranjan-das-a87094275" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:john.doe@example.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={24} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-6">
            <p>
              With over 5 years of experience in full-stack development, I specialize in building scalable web applications using modern technologies. My passion lies in creating intuitive user experiences backed by robust, efficient backend systems.
            </p>
            <p>
              I'm currently based in San Francisco, working as a Senior Developer at Tech Solutions Inc., where I lead the development of enterprise-level applications.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
              },
              {
                title: 'Backend Development',
                skills: ['Node.js', 'Python', 'PostgreSQL', 'REST APIs'],
              },
              {
                title: 'DevOps & Tools',
                skills: ['Git', 'Docker', 'AWS', 'CI/CD'],
              },
            ].map((category) => (
              <div key={category.title} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Let's Connect</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600 mb-8">
              I'm always interested in hearing about new projects and opportunities.
              Feel free to reach out through any of the following channels:
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a
                href="mailto:john.doe@example.com"
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
              >
                <Mail size={20} />
                john.doe@example.com
              </a>
              <a
                href="https://linkedin.com/in/johndoe"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800"
              >
                <Linkedin size={20} />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}