import { Briefcase, GraduationCap, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';

const experiences = [
  {
    icon: GraduationCap,
    type: 'Academic Project',
    title: 'Database Management System Project',
    period: 'Sep 2024 - Dec 2024',
    description: 'Designed and implemented a complete DBMS for university library management with advanced SQL queries and optimization.',
    skills: ['SQL', 'Database Design', 'Query Optimization', 'ER Modeling']
  },
  {
    icon: Briefcase,
    type: 'Internship',
    title: 'Data Analytics Intern',
    period: 'Jun 2024 - Aug 2024',
    description: 'Analyzed customer data and created interactive dashboards in Power BI. Improved data quality and reporting efficiency by 30%.',
    skills: ['Power BI', 'Data Cleaning', 'SQL', 'Data Visualization']
  },
  {
    icon: Lightbulb,
    type: 'Training Program',
    title: 'Full Stack Development Bootcamp',
    period: 'Jan 2024 - Apr 2024',
    description: 'Intensive training in web development covering front-end and back-end technologies. Built multiple real-world projects.',
    skills: ['React', 'Node.js', 'Git', 'RESTful APIs']
  },
  {
    icon: GraduationCap,
    type: 'Academic Project',
    title: 'Algorithm Complexity Analysis',
    period: 'Mar 2024 - May 2024',
    description: 'Researched and compared sorting algorithms, analyzing time and space complexity with empirical testing and visualization.',
    skills: ['C++', 'DSA', 'Algorithm Analysis', 'Data Visualization']
  },
  {
    icon: Briefcase,
    type: 'Freelance',
    title: 'UI/UX Design Consultant',
    period: 'Dec 2023 - Feb 2024',
    description: 'Redesigned mobile app interface for local startup, improving user engagement and app store ratings significantly.',
    skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems']
  },
  {
    icon: Lightbulb,
    type: 'Workshop',
    title: 'Cloud Computing Fundamentals',
    period: 'Nov 2023',
    description: 'Participated in intensive workshop covering AWS services, cloud architecture, and deployment strategies.',
    skills: ['Cloud Computing', 'AWS Basics', 'DevOps Principles']
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-gray-900">
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
            EXPERIENCE & TRAINING
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Building expertise through practical learning and real-world applications
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-8 group">
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                className="relative transition-all duration-300 group-hover:blur-[2px] group-hover:opacity-50 hover:!blur-none hover:!opacity-100 hover:!scale-105 hover:z-10"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-5 h-5 bg-blue-500 rounded-full border-4 border-gray-900 hidden md:block z-10 transition-transform duration-300"></div>

                <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 hover:border-teal-600/50 md:ml-20">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/50">
                        <exp.icon className="w-7 h-7 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                          <span className="text-sm text-teal-400 font-semibold uppercase tracking-wide">{exp.type}</span>
                          <span className="text-sm text-gray-500 font-medium">{exp.period}</span>
                        </div>
                        <CardTitle className="text-2xl mb-2 text-white">{exp.title}</CardTitle>
                        <CardDescription className="text-gray-400 text-base leading-relaxed">{exp.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 md:ml-[72px]">
                      {exp.skills.map((skill, skillIdx) => (
                        <span
                          key={skillIdx}
                          className="px-3 py-1.5 bg-gray-700 text-gray-200 rounded-lg text-sm border border-gray-600 hover:bg-gray-600 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}