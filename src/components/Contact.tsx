import React, { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    alert('Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'saiajit.b@gmail.com',
      link: 'mailto:saiajit.b@gmail.com'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'Gwalior, Madhya Pradesh',
      link: 'https://maps.google.com/?q=Gwalior,Madhya Pradesh'
    }
  ];

  const socialLinks = [
    {
      icon: <Github size={20} />,
      name: 'GitHub',
      url: 'https://github.com/saiajitbhavaraju',
      username: '@saiajitbhavaraju'
    },
    {
      icon: <Linkedin size={20} />,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/saiajitb',
      username: 'saiajitb'
    },
    {
      icon: <ExternalLink size={20} />,
      name: 'LeetCode',
      url: 'https://leetcode.com',
      username: 'saijitb'
    }
  ];

  return (
    <section ref={sectionRef} id="contact" className="py-24 bg-primary-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-primary-900 mb-4">
              Let's Connect
            </h2>
            <div className="h-px w-16 bg-accent-blue mx-auto mb-8" />
            <p className="text-lg text-primary-600 max-w-2xl mx-auto leading-relaxed">
              Interested in AI/ML collaboration, full-stack development, or just want to discuss tech? Let's build something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-primary-900 mb-6">
                  Get in Touch
                </h3>
                <p className="text-primary-700 leading-relaxed mb-8">
                  Whether you have a machine learning project in mind, need help with full-stack development, 
                  want to collaborate on research, or just want to discuss the latest in AI/ML, I'm always 
                  excited to connect with fellow developers and researchers.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.title}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : '_self'}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                    className={`flex items-center gap-4 p-4 bg-primary-100 rounded-2xl hover:bg-primary-200 transition-all duration-300 transform hover:-translate-y-1 group ${
                      isVisible ? 'animate-slide-in-left' : ''
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-accent-blue group-hover:scale-110 transition-transform duration-200">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-primary-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary-600">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-8">
                <h4 className="text-lg font-semibold text-primary-900 mb-6">
                  Connect Online
                </h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 p-4 bg-primary-100 rounded-2xl hover:bg-accent-blue hover:text-white transition-all duration-300 transform hover:-translate-y-1 group ${
                        isVisible ? 'animate-fade-in' : ''
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      title={`${social.name} - ${social.username}`}
                    >
                      <div className="group-hover:scale-110 transition-transform duration-200">
                        {social.icon}
                      </div>
                      <div className="hidden sm:block">
                        <div className="font-medium text-sm">{social.name}</div>
                        <div className="text-xs opacity-75">{social.username}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className={`${isVisible ? 'animate-slide-in-right' : ''}`}>
              <form onSubmit={handleSubmit} className="bg-primary-100 rounded-2xl p-8 border border-primary-300">
                <h3 className="text-2xl font-semibold text-primary-900 mb-6">
                  Send a Message
                </h3>

                <div className="space-y-6">
                  {/* Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-primary-700 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-primary-50 border border-primary-400 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-primary-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-primary-50 border border-primary-400 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-primary-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-primary-50 border border-primary-400 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200"
                      placeholder="What's this about?"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-primary-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-primary-50 border border-primary-400 rounded-xl focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell me about your project, research idea, or just say hi!"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary-900 text-black rounded-xl hover:bg-primary-800 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
