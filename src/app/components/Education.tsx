import { GraduationCap, Calendar, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { motion } from 'framer-motion';

const education = [
  {
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Lovely Professional University',
    location: 'Jalandhar, Punjab',
    period: '2023 - Ongoing',
    grade: 'CGPA: 6.92/10',
    highlights: [
      'Focused on Cloud Computing, designing scalable and reliable cloud-based solutions using modern cloud platforms.',
      'Exploring full-stack and cloud-native development, building applications that integrate \nwith cloud services and distributed systems.',
      'Passionate about optimizing performance, automation, and infrastructure management using cloud technologies and efficient system design.'
    ]
  },
  {
    degree: 'Higher Secondary Education (12th)',
    institution: 'Phoenix Public School',
    location: 'Narsinghpur, Madhya Pradesh',
    period: '2022 - 2023',
    grade: 'Percentage: 75%',
    highlights: [
      'Completed higher secondary education in the Science stream with Computer Science,\n building a strong foundation in programming and analytical thinking.',
      'Achieved School Topper recognition in Computer Science for outstanding academic\n performance.',
      'Participated in regional sports competitions, developing teamwork and discipline.'
    ]
  },
  {
    degree: 'Secondary Education (10th)',
    institution: 'Phoenix Public School',
    location: 'Narsinghpur, Madhya Pradesh',
    period: '2020 - 2021',
    grade: 'Percentage: 85%',
    highlights: [
      'Built a strong academic foundation in Mathematics and Science, strengthening\n analytical and logical thinking skills.',
      'Participated in the school science fair, showcasing interest in experimentation\n and scientific learning.',
      'Active member of the Sports Club, promoting teamwork and cultural participation.'
    ]
  }
];

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-gray-900">
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
            EDUCATION
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Academic foundation and continuous learning journey
          </p>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-teal-500 to-blue-500 hidden md:block"></div>

          <div className="space-y-8 group">
            {education.map((edu, idx) => (
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

                <Card className="bg-gray-800 border-gray-700 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:border-blue-600/50 md:ml-20">
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-950 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-900/50">
                        <GraduationCap className="w-8 h-8 text-blue-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between flex-wrap gap-4">
                          <div>
                            <CardTitle className="text-2xl text-white mb-2">{edu.degree}</CardTitle>
                            <CardDescription className="text-lg text-gray-300 mb-1">{edu.institution}</CardDescription>
                            <p className="text-gray-400">{edu.location}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 text-gray-400 mb-2">
                              <Calendar className="w-4 h-4" />
                              <span className="text-sm">{edu.period}</span>
                            </div>
                            <div className="flex items-center gap-2 text-teal-400">
                              <Award className="w-4 h-4" />
                              <span className="font-semibold">{edu.grade.replace('%', '')}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="ml-[88px] space-y-2">
                      {edu.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-gray-300 flex items-start gap-2">
                          <span className="text-teal-400 mt-1">•</span>
                          <span style={{ whiteSpace: 'pre-line' }}>{highlight}</span>
                        </li>
                      ))}
                    </ul>
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