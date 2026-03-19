import { useState } from 'react';
import { Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'CSTech Gym — Subscription & Fitness Management System',
    description: [
      'Built a MERN-based Gym Subscription & Fitness Management System for digital membership and subscription management.',
      'Implemented JWT authentication with role-based access (Admin & Member) and developed RESTful APIs with MongoDB CRUD operations',
      'Integrated UPI payments, admin analytics, and responsive React dashboards with protected routes.',
    ],
    techStack: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'bcrypt', 'REST API', 'Mongoose', 'UPI Integration'],
    link: '#',
    github: 'https://github.com/viveksahu4/Subscription-Management-System',
    date: 'January 2026 - February 2026'
  },
  {
    title: 'Academic Content Management System Using AWS Services',
    description: [
      'Designed a secure academic content management system using Amazon S3 and Amazon RDS for scalable file storage and metadata management.',
      'Built a custom Amazon VPC with private subnets and IAM access controls for secure and isolated communication.',
      'Implemented a cost-efficient and scalable cloud architecture with automated file handling and high availability.'
    ],
    techStack: ['AWS S3', 'RDS', 'VPC', 'IAM', 'EC2', 'Sandbox'],
    link: '#',
    github: 'https://drive.google.com/file/d/1DwvBD_EhwH990QC2xUMt7p1Vpn_K1jsS/view?usp=sharing',
    date: 'January 2025 - April 2025'
  },
  {
    title: 'Snake Game – Intelligent Path Visualization',
    description: [
      'Built an interactive and optimized Snake Game leveraging advanced data structures and algorithms for smooth, real-time gameplay.',
      'Implemented optimized snake movement, growth management, and collision detection using efficient data structures.',
      'Used coordinate hashing for valid apple generation and automated tracking of every movement, apple pickup, and distance covered.',
      'Designed clean, scalable algorithms to handle grid updates and game logic effectively.',
      'Produced a fully functional Snake Game supported by post-game visual analytics using Matplotlib, showcasing movement paths and apple positions for performance analysis.'
    ],
    techStack: ['Python', 'Matplotlib', 'Data Structure & Algorithms'],
    link: '#',
    github: 'https://github.com/viveksahu4/Snake-Game-Using-DSA-Python-PYgame-',
    date: 'July 2025 - August 2025'
  },
  {
    title: 'Music Recommendation System',
    description: [
      'Built a real-time Music Recommendation System that suggests songs dynamically based on user interactions.',
      'Implemented a Queue data structure to manage user requests and recently played tracks for smooth and fair song recommendation flow.',
      'Designed logic to process incoming song preferences in FIFO order, ensuring efficient handling of multiple user sessions.',
      'Developed a Flask-based web application to allow users to search, play, and receive music recommendations through a simple UI.',
      'Integrated Flask APIs with backend logic to efficiently store, process, and deliver personalized music recommendations.'
    ],
    techStack: ['Python', 'Flask', 'Data Structures (Queue)', 'Pandas', 'Machine Learning', 'HTML', 'CSS'],
    link: '#',
    github: 'https://github.com/sathishprasad/Music-Recommendation-System',
    date: 'July 2025 - August 2025'
  }
];

export function Projects() {
  const [rotation, setRotation] = useState(0);

  const handleDragEnd = (e: any, info: any) => {
    if (info.offset.x > 50) {
      setRotation((r) => r + 90);
    } else if (info.offset.x < -50) {
      setRotation((r) => r - 90);
    }
  };

  const slideNext = () => setRotation((r) => r - 90);
  const slidePrev = () => setRotation((r) => r + 90);

  return (
    <section id="projects" className="py-24 px-6 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
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
            FEATURED PROJECTS
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-world applications and academic projects showcasing my technical abilities
          </p>
        </motion.div>

        <div className="relative w-full max-w-6xl mx-auto flex justify-center items-center py-10 md:py-20 overflow-hidden" style={{ perspective: '1500px' }}>
          <style>{`
            .tz-translate {
              transform: rotateY(var(--rotY)) translateZ(300px);
              backface-visibility: hidden;
            }
            .custom-scrollbar::-webkit-scrollbar {
              width: 4px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: rgba(20, 184, 166, 0.5);
              border-radius: 10px;
            }
            @media (min-width: 768px) {
              .tz-translate {
                transform: rotateY(var(--rotY)) translateZ(450px);
              }
            }
          `}</style>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-2 md:left-10 z-50">
            <Button onClick={slidePrev} variant="outline" className="w-10 h-10 md:w-14 md:h-14 rounded-full border-teal-500 text-teal-400 bg-gray-900/80 hover:bg-teal-900 p-0 flex items-center justify-center pointer-events-auto">
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </Button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-2 md:right-10 z-50">
            <Button onClick={slideNext} variant="outline" className="w-10 h-10 md:w-14 md:h-14 rounded-full border-teal-500 text-teal-400 bg-gray-900/80 hover:bg-teal-900 p-0 flex items-center justify-center pointer-events-auto">
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </Button>
          </div>

          <motion.div
            className="relative w-[300px] md:w-[600px] h-[580px] md:h-[500px] cursor-grab active:cursor-grabbing"
            style={{ transformStyle: 'preserve-3d' }}
            animate={{ rotateY: rotation }}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.05}
            onDragEnd={handleDragEnd}
          >
            {projects.map((project, idx) => {
              const angle = idx * 90;
              return (
                <div
                  key={idx}
                  className="absolute inset-0 w-full h-full tz-translate"
                  style={{ '--rotY': `${angle}deg` } as React.CSSProperties}
                >
                  <Card className="h-full flex flex-col bg-gray-900 border-gray-700 hover:shadow-2xl hover:shadow-teal-500/20 hover:border-teal-600/50 transition-all duration-300">
                    <CardHeader className="space-y-3 pb-4">
                      <div className="flex justify-between items-start gap-4 flex-col md:flex-row">
                        <CardTitle className="text-xl md:text-2xl text-white leading-tight">{project.title}</CardTitle>
                        {project.date && <span className="text-sm text-teal-400 whitespace-nowrap mt-1">{project.date}</span>}
                      </div>
                    </CardHeader>
                    
                    <CardContent className="flex-1 flex flex-col gap-4 overflow-hidden pt-0">
                      <div className="text-gray-400 text-sm md:text-base leading-relaxed overflow-y-auto pr-2 custom-scrollbar flex-1">
                        {Array.isArray(project.description) ? (
                          <ul className="list-disc pl-5 space-y-2">
                            {project.description.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          project.description
                        )}
                      </div>

                      {project.techStack.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-800/60 mt-auto shrink-0">
                          {project.techStack.map((tech, techIdx) => (
                            <Badge key={techIdx} variant="secondary" className="bg-teal-950 text-teal-300 border border-teal-800 hover:bg-teal-900 transition-colors">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>

                    <CardFooter className="pt-4 mt-auto border-t border-gray-800/60">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-full">
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-gray-600 text-black hover:bg-teal-950 hover:text-teal-300 hover:border-teal-600 transition-all"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          View on GitHub
                        </Button>
                      </a>
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Swipe instruction */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2 text-teal-400/70 text-sm animate-pulse">
            <span className="w-12 h-[1px] bg-teal-400/50"></span>
            Drag or Use Arrows to spin the 3D Carousel
            <span className="w-12 h-[1px] bg-teal-400/50"></span>
          </div>
        </div>
      </div>
    </section>
  );
}