import React, { useEffect, useRef, useState } from 'react';
import { Code, Database, Palette, Server, Brain, Globe } from 'lucide-react';

const Skills = () => {
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

  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'C/C++', level: 80 }
      ],
      color: 'accent-blue'
    },
    {
      icon: <Brain size={24} />,
      title: 'AI/ML & Data Science',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'XGBoost', level: 85 },
        { name: 'NumPy/Pandas', level: 95 },
        { name: 'Time Series', level: 80 }
      ],
      color: 'accent-purple'
    },
    {
      icon: <Server size={24} />,
      title: 'Web Frameworks',
      skills: [
        { name: 'Next.js/React', level: 90 },
        { name: 'Node.js', level: 85 },
        { name: 'Django/Flask', level: 80 },
        { name: 'Express.js', level: 85 }
      ],
      color: 'accent-green'
    },
    {
      icon: <Database size={24} />,
      title: 'Database & Cloud',
      skills: [
        { name: 'SQL (Postgres)', level: 85 },
        { name: 'Google Cloud', level: 80 },
        { name: 'Microsoft Azure', level: 75 },
        { name: 'Docker', level: 70 }
      ],
      color: 'accent-orange'
    },
    {
      icon: <Globe size={24} />,
      title: 'Developer Tools',
      skills: [
        { name: 'Git/GitHub', level: 95 },
        { name: 'VS Code', level: 90 },
        { name: 'Visual Studio', level: 85 },
        { name: 'Linux/Unix', level: 80 }
      ],
      color: 'accent-red'
    },
    {
      icon: <Palette size={24} />,
      title: 'Creative Tools',
      skills: [
        { name: 'Adobe Photoshop', level: 85 },
        { name: 'After Effects', level: 80 },
        { name: 'Premiere Pro', level: 75 },
        { name: 'DaVinci Resolve', level: 70 }
      ],
      color: 'primary-600'
    }
  ];

  const achievements = [
    { number: '1651', label: 'LeetCode Rating' },
    { number: '1609', label: 'CodeChef Rating' },
    { number: '10+', label: 'Projects Completed' },
    { number: '90%+', label: 'MNIST Accuracy' }
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-24 bg-primary-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary-900 mb-4">
              Technical Skills
            </h2>
            <div className="h-px w-16 bg-accent-blue mx-auto mb-8" />
            <p className="text-lg text-primary-600 max-w-2xl mx-auto leading-relaxed">
              A comprehensive toolkit spanning AI/ML, web development, and creative technologies.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={category.title}
                className={`bg-white rounded-2xl p-8 border border-primary-200 hover:border-accent-blue hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
                  isVisible ? 'animate-slide-up' : ''
                }`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`text-${category.color}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-primary-700 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-primary-500 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Skill Bar */}
                      <div className="w-full bg-primary-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full bg-${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.05)}s`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="bg-white rounded-2xl p-8 border border-primary-200 shadow-lg">
            <h3 className="text-2xl font-semibold text-primary-900 text-center mb-8">
              Achievements & Certifications
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.label}
                  className={`text-center ${isVisible ? 'animate-fade-in' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent-blue mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-primary-600 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 rounded-xl p-6">
                <h4 className="font-semibold text-primary-900 mb-3">Certifications</h4>
                <ul className="space-y-2 text-primary-700">
                  <li>• FreeCodeCamp: Responsive Web Design</li>
                  <li>• Google Cloud Computing Foundations</li>
                  <li>• HackOn with Amazon Season 4 Participant</li>
                </ul>
              </div>
              <div className="bg-primary-50 rounded-xl p-6">
                <h4 className="font-semibold text-primary-900 mb-3">Leadership</h4>
                <ul className="space-y-2 text-primary-700">
                  <li>• Technical Executive at Uthaan</li>
                  <li>• HYP Series Interview Supervisor</li>
                  <li>• Active in competitive programming community</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Fun Skills Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-primary-900 mb-6">
              Beyond Code
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-primary-200">
                <h4 className="font-semibold text-primary-900 mb-2">Algorithm Mastery</h4>
                <p className="text-primary-600 text-sm">
                  Solving complex algorithmic challenges daily. LeetCode and CodeChef are basically my second home at this point.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-primary-200">
                <h4 className="font-semibold text-primary-900 mb-2">Research Mindset</h4>
                <p className="text-primary-600 text-sm">
                  Always diving deep into cutting-edge ML research. Currently obsessed with adversarial attacks and time series forecasting.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-primary-200">
                <h4 className="font-semibold text-primary-900 mb-2">Creative Problem Solving</h4>
                <p className="text-primary-600 text-sm">
                  Building neural networks from scratch because why use libraries when you can understand every gradient step? No cap, it hits different.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;