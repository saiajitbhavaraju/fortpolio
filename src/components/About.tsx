import React, { useEffect, useRef, useState } from 'react';
import { Code, Lightbulb, Target, Zap } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const traits = [
    {
      icon: <Code size={24} />,
      title: 'AI/ML Engineering',
      description: 'Building intelligent systems with TensorFlow, LSTM, and XGBoost for real-world applications'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Research & Innovation',
      description: 'Investigating adversarial attacks on NLP models and developing robust ML solutions'
    },
    {
      icon: <Target size={24} />,
      title: 'Full-Stack Development',
      description: 'Creating end-to-end applications with Next.js, React, and modern web technologies'
    },
    {
      icon: <Zap size={24} />,
      title: 'Problem Solving',
      description: 'Competitive programming expertise with 1651 LeetCode rating and strong algorithmic skills'
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-primary-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary-900 mb-4">
              About Me
            </h2>
            <div className="h-px w-16 bg-accent-blue mx-auto mb-8" />
            <p className="text-lg text-primary-600 max-w-2xl mx-auto leading-relaxed">
              A passionate AI/ML engineer and full-stack developer building intelligent solutions for tomorrow.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-medium text-primary-900">
                Engineering the future with AI and code
              </h3>
              
              <p className="text-primary-700 leading-relaxed">
                I'm a Computer Science student at IIITM Gwalior with a passion for artificial intelligence 
                and machine learning. Currently working as an AI/ML Engineering Intern at QuadricIT, 
                where I develop end-to-end speech-to-text platforms and intelligent summarization systems.
              </p>
              
              <p className="text-primary-700 leading-relaxed">
                My research focuses on adversarial attacks in NLP models and time series forecasting 
                for power generation. I love building things from scratch - whether it's neural networks 
                using pure NumPy or full-stack web applications with modern frameworks.
              </p>

              <p className="text-primary-700 leading-relaxed">
                When I'm not training models or debugging code, you'll find me solving algorithmic 
                challenges on LeetCode and CodeChef, or working on creative projects that blend 
                technology with real-world impact.
              </p>

              {/* Fun Fact */}
              <div className="bg-primary-200 rounded-2xl p-6 border border-primary-300">
                <p className="text-primary-800 font-medium mb-2">Fun Fact:</p>
                <p className="text-primary-700">
                  I built a neural network from scratch using only NumPy that achieved 90%+ accuracy on MNIST. 
                  No cap, implementing backpropagation manually hits different when you understand every gradient step! 🔥
                </p>
              </div>
            </div>

            {/* Right Column - Traits Grid */}
            <div className="grid grid-cols-2 gap-6">
              {traits.map((trait, index) => (
                <div 
                  key={trait.title}
                  className={`bg-primary-50 rounded-2xl p-6 border border-primary-300 hover:border-accent-blue hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                    isVisible ? 'animate-fade-in' : ''
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-accent-blue mb-4">
                    {trait.icon}
                  </div>
                  <h4 className="text-lg font-medium text-primary-900 mb-3">
                    {trait.title}
                  </h4>
                  <p className="text-primary-600 text-sm leading-relaxed">
                    {trait.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;