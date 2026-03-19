import { Award, Calendar, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import legacyImage from '../../assets/Legacy Responsive Web Design.png';
import awsImage from '../../assets/AWS - Solutions Architecture Job Simulation.png';
import dsaPythonImage from '../../assets/Data Structures And Algorithms using Python.png';
import oopImage from '../../assets/Object Oriented Programming.png';
import dsaCImage from '../../assets/Data Structures And Algorithms using C.png';
import hardwareOsImage from '../../assets/Introduction to Hardware and Operating Systems.png';

const certificates = [
  {
    title: 'Data Structures And Algorithms using Python',
    organization: 'CSE Pathshala',
    year: 'July 2025',
    category: 'DSA',
    verifyLink: 'https://drive.google.com/file/d/16IvH3kIxIN6RCiFFKJYiN67f347R2qCr/view?usp=drive_link',
    image: dsaPythonImage
  },
  {
    title: 'AWS - Solutions Architecture Job Simulation',
    organization: 'Forage',
    year: 'June 2025',
    category: 'Cloud',
    verifyLink: 'https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/pmnMSL4QiQ9JCgE3W/kkE9HyeNcw6rwCRGw_pmnMSL4QiQ9JCgE3W_XZx5XtbruFCFdHqaY_1751093512221_completion_certificate.pdf',
    image: awsImage
  },
  {
    title: 'Object Oriented Programming',
    organization: 'Neocolab',
    year: 'December 2024',
    category: 'Programming',
    verifyLink: 'https://lpucolab438.examly.io/certificate/U2FsdGVkX19tyS%2FhvK9xUO5ytLD8wqzL%2FJE0KslKd8g%3D',
    image: oopImage
  },
  {
    title: 'Data Structures And Algorithms using C',
    organization: 'CSE Pathshala',
    year: 'October 2024',
    category: 'DSA',
    verifyLink: 'https://drive.google.com/file/d/1O5ktJgHtPx-Cxo6GWuKj-1dp4TA43he9/view?usp=sharing',
    image: dsaCImage
  },
  {
    title: 'Legacy Responsive Web Design',
    organization: 'FreeCodeCamp',
    year: 'October 2023',
    category: 'Web Dev',
    verifyLink: 'https://www.freecodecamp.org/certification/fccf7752e26-abec-4a11-8957-6852d3c625fa/responsive-web-design',
    image: legacyImage
  },
  {
    title: 'Introduction to Hardware and Operating Systems',
    organization: 'Coursera',
    year: 'September 2024',
    category: 'IT Support',
    verifyLink: 'https://www.coursera.org/account/accomplishments/verify/1RE19I8RS7WH',
    image: hardwareOsImage
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="py-24 px-6 bg-gray-800 overflow-hidden">
      <style>
        {`
          @keyframes carousel-spin-certs {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(-360deg); }
          }
          .carousel-container-certs {
            animation: carousel-spin-certs 30s infinite linear;
            transform-style: preserve-3d;
          }
          .carousel-container-certs:hover {
            animation-play-state: paused;
          }
          @keyframes border-morph {
            0% {
              border-radius: 8px;
              border-color: rgba(20, 184, 166, 0.2);
            }
            33% {
              border-radius: 30px;
              border-color: rgba(20, 184, 166, 0.8);
            }
            66% {
              border-radius: 50%;
              border-color: rgba(45, 212, 191, 1);
            }
            100% {
              border-radius: 8px;
              border-color: rgba(20, 184, 166, 0.2);
            }
          }
          .animate-morph {
            animation: border-morph 6s infinite ease-in-out;
            border-style: dashed;
            border-width: 3px;
          }
        `}
      </style>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl font-bold text-white mb-6 tracking-wide cursor-pointer transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'var(--font-section)' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textShadow = '0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textShadow = 'none';
            }}
          >
            CERTIFICATES & CERTIFICATIONS
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Continuous learning and skill validation through professional certifications
          </p>
        </motion.div>

        {/* 3D Carousel Layout */}
        <div className="w-full flex justify-center items-center py-20" style={{ perspective: '1200px' }}>
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] h-[450px] carousel-container-certs">
            {certificates.map((cert, idx) => {
              const angle = (idx / certificates.length) * 360;
              const translateZ = 320; // Distance from center

              return (
                <div
                  key={idx}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                    backfaceVisibility: 'visible',
                  }}
                >
                  <Card className="h-full bg-gray-900 border-gray-700 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 border-l-4 border-l-teal-500 hover:border-teal-400 flex flex-col group/card shadow-xl overflow-hidden">
                    {/* Top 45% Image Container */}
                    <div 
                      className="w-full h-[45%] shrink-0 bg-cover bg-center opacity-80 blur-[2px] transition-all duration-300 group-hover/card:opacity-100 group-hover/card:blur-none"
                      style={{ 
                        backgroundImage: cert.image ? `url(${cert.image})` : 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop")',
                        borderBottom: '2px solid rgba(20, 184, 166, 0.4)'
                      }}
                    ></div>

                    <div className="flex flex-col flex-1 p-4 justify-between">
                      <div className="space-y-3">
                        <div className="flex items-start justify-between">
                          <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">{cert.category}</Badge>
                        </div>
                        <div>
                          <CardTitle className="text-lg text-white leading-snug">{cert.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2 mt-1 text-gray-400 text-sm">
                            <span>{cert.organization}</span>
                          </CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-teal-400 font-semibold">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.year}</span>
                        </div>
                      </div>
                      
                      {cert.verifyLink && (
                        <div className="pt-3 mt-auto">
                          <a href={cert.verifyLink} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full border-teal-800 bg-teal-950/30 text-teal-400 hover:bg-teal-900 hover:text-teal-300 hover:border-teal-500 transition-all"
                            >
                              <ExternalLink className="w-4 h-4 mr-2 group-hover/card:scale-110 transition-transform" />
                              Verify
                            </Button>
                          </a>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 flex justify-center w-full"
        >
          <Card className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors cursor-pointer animate-morph overflow-hidden w-64 h-64 md:w-72 md:h-72 flex flex-col items-center justify-center relative z-10">
            <CardContent className="p-4 md:p-8 flex flex-col items-center justify-center text-center">
              <Award className="w-10 h-10 md:w-12 md:h-12 text-gray-600 mb-4" />
              <p className="text-gray-300 font-medium">More certifications coming soon</p>
              <p className="text-xs md:text-sm text-gray-500 mt-2">Actively pursuing additional professional development</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}