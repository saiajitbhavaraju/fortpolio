import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-primary-50">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent-blue/5 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-24 h-24 bg-accent-purple/5 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-10 w-16 h-16 bg-accent-green/5 rounded-full animate-float" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Main Content */}
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl md:text-8xl font-light mb-2 tracking-tight leading-tight">
            <span className="block text-primary-900">Sai Ajit</span>
            <span className="block text-primary-600">Bhavaraju</span>
          </h1>
          
          <div className="h-px w-24 bg-accent-blue mx-auto mb-6" />
          
          <p className="text-xl md:text-2xl text-primary-600 mb-2 font-light leading-tight">
            AI/ML Engineer & Full-Stack Developer
          </p>
          
          <p className="text-lg text-primary-500 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building intelligent solutions with machine learning and modern web technologies. Currently pursuing B.Tech at{' '}
            <span className="text-accent-blue font-medium">IIITM Gwalior</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-primary-900 text-white rounded-full hover:bg-primary-800 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-primary-900 text-primary-900 rounded-full hover:bg-primary-900 hover:text-white transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            <a 
              href="https://github.com/saiajitbhavaraju" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary-300 hover:border-accent-blue hover:text-accent-blue transition-all duration-300 hover:scale-110"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/saiajitb" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-primary-300 hover:border-accent-blue hover:text-accent-blue transition-all duration-300 hover:scale-110"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:saiajit.b@gmail.com"
              className="p-3 rounded-full border border-primary-300 hover:border-accent-blue hover:text-accent-blue transition-all duration-300 hover:scale-110"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="animate-bounce hover:text-accent-blue transition-colors duration-300"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;