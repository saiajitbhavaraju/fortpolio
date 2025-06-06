import React, { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      title: 'Research Projects',
      company: 'Independent Research',
      location: 'Various',
      period: 'May 2024 - Present',
      type: 'Research',
      description: 'Conducting cutting-edge research in machine learning, NLP, and time series forecasting.',
      highlights: [
        'Power Generation Forecasting for Odisha using LSTM + XGBoost hybrid model with 6+ years of historical data',
        'Optimizing models with BEATS and NHiTS architectures to achieve <5% MAPE for accurate predictions',
        'Investigated adversarial attacks on 4 BERT-based NLP models using TextAttack library',
        'Compared model robustness using character/word level perturbation frameworks'
      ],
      color: 'accent-purple'
    },
    {
      title: 'AI/ML Engineering Intern',
      company: 'QuadricIT',
      location: 'Hyderabad, Telangana',
      period: 'May 2025 - Present',
      type: 'Internship',
      description: 'Engineering end-to-end AI solutions for speech processing and intelligent content analysis.',
      highlights: [
        'Engineered Speech-to-Text platform with Microsoft Azure supporting 2-hour audio files',
        'Integrated Google Gemini-2.0-Flash for automated summarization of transcribed content',
        'Built Next.js web interface for audio control and transcript display',
        'Implemented speaker diarization for multi-speaker audio processing'
      ],
      color: 'accent-blue'
    },
    {
      title: 'Bachelor of Technology - CSE',
      company: 'IIITM Gwalior',
      location: 'Gwalior, Madhya Pradesh',
      period: 'Nov 2022 - Apr 2026',
      type: 'Education',
      description: 'Pursuing Computer Science Engineering with focus on AI/ML, algorithms, and software development.',
      highlights: [
        'Strong academic performance in core CS subjects with focus on machine learning and algorithms',
        'Active participation in competitive programming (LeetCode: 1651, CodeChef: 1609)',
        'Technical Executive at Uthaan, supervised HYP series interviews',
        'Completed certifications in Google Cloud Computing and Responsive Web Design'
      ],
      color: 'accent-green'
    }
  ];

  return (
    <section ref={sectionRef} id="experience" className="py-24 bg-primary-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary-900 mb-4">
              Experience & Research
            </h2>
            <div className="h-px w-16 bg-accent-blue mx-auto mb-8" />
            <p className="text-lg text-primary-600 max-w-2xl mx-auto leading-relaxed">
              My journey through AI/ML engineering, research, and continuous learning.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-px bg-primary-300" />

            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row items-start mb-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-${exp.color} rounded-full border-4 border-primary-50 shadow-lg z-10`} />

                {/* Content Card */}
                <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'} md:w-1/2`}>
                  <div 
                    className={`bg-primary-100 rounded-2xl p-8 shadow-lg border border-primary-300 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                      isVisible ? 'animate-slide-up' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`px-3 py-1 bg-${exp.color}/10 text-${exp.color} rounded-full text-sm font-medium`}>
                          {exp.type}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-primary-900 mb-2">
                        {exp.title}
                      </h3>
                      
                      <h4 className="text-lg text-primary-700 mb-3">
                        {exp.company}
                      </h4>

                      <div className="flex flex-wrap gap-4 text-sm text-primary-500">
                        <div className="flex items-center gap-1">
                          <Calendar size={16} />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-primary-700 mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex} className="flex items-start gap-3 text-primary-600">
                          <div className={`w-1.5 h-1.5 bg-${exp.color} rounded-full mt-2 flex-shrink-0`} />
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-primary-600 mb-6">
              Want to know more about my journey?
            </p>
            <a 
              href="mailto:saiajit.b@gmail.com" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-900 text-black rounded-full hover:bg-primary-800 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;