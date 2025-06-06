import React, { useEffect, useRef, useState } from 'react';
import { Github, ExternalLink, Calendar, Code, Zap } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'LyriSync: Spotify Lyrics Overlay',
      description: 'Real-time lyrics overlay app that syncs with Spotify playback, supporting over 100K songs.',
      longDescription: 'LyriSync is an innovative overlay application that displays real-time lyrics synchronized with Spotify playback. The app integrates both Spotify API for playback control and Genius API for fetching lyrics, creating a seamless music experience.',
      image: 'https://images.pexels.com/photos/167092/pexels-photo-167092.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Spotify API', 'Genius API', 'Tkinter', 'Real-time Sync'],
      features: ['Real-time lyrics sync', 'Spotify integration', '100K+ song support', 'Customizable themes'],
      github: 'https://github.com/saiajitbhavaraju',
      demo: '#',
      status: 'Completed',
      year: '2024'
    },
    {
      title: 'Neural Network from Scratch',
      description: 'Fully-connected neural network built using only NumPy, achieving 90%+ accuracy on MNIST dataset.',
      longDescription: 'This project demonstrates deep understanding of neural network fundamentals by implementing a complete neural network from scratch using only NumPy and mathematical principles. The network successfully recognizes handwritten digits with high accuracy.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'NumPy', 'MNIST', 'Mathematics', 'Deep Learning'],
      features: ['Forward propagation', 'Backpropagation', 'Gradient descent', '90%+ accuracy'],
      github: 'https://github.com/saiajitbhavaraju',
      demo: '#',
      status: 'Completed',
      year: '2024'
    },
    {
      title: 'Algorithm Visualizer',
      description: 'Interactive web-based visualizer for sorting algorithms and shortest path algorithms with smooth animations.',
      longDescription: 'A comprehensive algorithm visualization tool built with Next.js and Tailwind CSS. Features interactive controls for 4 sorting algorithms and 2 shortest path algorithms, supporting up to 1000 elements with real-time animations.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Next.js', 'JavaScript', 'TailwindCSS', 'Algorithms', 'Visualization'],
      features: ['4 sorting algorithms', '2 pathfinding algorithms', 'Smooth animations', 'Interactive controls'],
      github: 'https://github.com/saiajitbhavaraju',
      demo: '#',
      status: 'Completed',
      year: '2024'
    },
    {
      title: 'Power Generation Forecasting',
      description: 'LSTM + XGBoost hybrid model for predicting power consumption in Odisha using 6+ years of historical data.',
      longDescription: 'Advanced time series forecasting project developing a hybrid model combining LSTM and XGBoost to predict power consumption patterns. Currently optimizing with BEATS and NHiTS architectures to achieve sub-5% MAPE.',
      image: 'https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'TensorFlow', 'XGBoost', 'LSTM', 'Time Series'],
      features: ['Hybrid ML model', '6+ years data', 'BEATS optimization', '<5% MAPE target'],
      github: 'https://github.com/saiajitbhavaraju',
      demo: '#',
      status: 'In Progress',
      year: '2025'
    }
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-24 bg-primary-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary-900 mb-4">
              Featured Projects
            </h2>
            <div className="h-px w-16 bg-accent-blue mx-auto mb-8" />
            <p className="text-lg text-primary-600 max-w-2xl mx-auto leading-relaxed">
              A showcase of my work in AI/ML, web development, and algorithm implementation.
            </p>
          </div>

          {/* Project Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedProject === index
                    ? 'bg-accent-blue text-white shadow-lg transform scale-105'
                    : 'bg-primary-200 text-primary-700 hover:bg-primary-300'
                }`}
              >
                {project.title.split(':')[0]}
              </button>
            ))}
          </div>

          {/* Featured Project */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-2xl group">
              <img 
                src={projects[selectedProject].image}
                alt={projects[selectedProject].title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  projects[selectedProject].status === 'Completed' 
                    ? 'bg-accent-green text-white' 
                    : 'bg-accent-orange text-white'
                }`}>
                  {projects[selectedProject].status}
                </span>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl font-semibold text-primary-900">
                    {projects[selectedProject].title}
                  </h3>
                  <div className="flex items-center gap-1 text-primary-500">
                    <Calendar size={16} />
                    <span className="text-sm">{projects[selectedProject].year}</span>
                  </div>
                </div>
                
                <p className="text-primary-700 leading-relaxed mb-6">
                  {projects[selectedProject].longDescription}
                </p>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-lg font-medium text-primary-900 mb-3 flex items-center gap-2">
                  <Code size={20} />
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary-200 text-primary-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-medium text-primary-900 mb-3 flex items-center gap-2">
                  <Zap size={20} />
                  Key Features
                </h4>
                <ul className="grid grid-cols-2 gap-2">
                  {projects[selectedProject].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-primary-600">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a 
                  href={projects[selectedProject].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-primary-900 text-white rounded-full hover:bg-primary-800 transition-all duration-300 transform hover:scale-105"
                >
                  <Github size={18} />
                  View Code
                </a>
                {projects[selectedProject].demo !== '#' && (
                  <a 
                    href={projects[selectedProject].demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 border-2 border-primary-900 text-primary-900 rounded-full hover:bg-primary-900 hover:text-white transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="mt-20">
            <h3 className="text-2xl font-medium text-primary-900 mb-8 text-center">
              All Projects
            </h3>
            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className={`bg-primary-50 rounded-2xl overflow-hidden border border-primary-300 hover:border-accent-blue hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer ${
                    isVisible ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => setSelectedProject(index)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completed' 
                          ? 'bg-accent-green text-white' 
                          : 'bg-accent-orange text-white'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-primary-900 mb-2">
                      {project.title}
                    </h4>
                    <p className="text-primary-600 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-primary-500">{project.year}</span>
                      <div className="flex gap-2">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-primary-200 transition-colors duration-200"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github size={16} />
                        </a>
                        {project.demo !== '#' && (
                          <a 
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full hover:bg-primary-200 transition-colors duration-200"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;