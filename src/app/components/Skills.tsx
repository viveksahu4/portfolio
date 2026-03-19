import { Code2, Wrench, Brain, Shield, Layers } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    icon: Code2,
    title: 'Languages',
    skills: ['Python', 'C/C++', 'Java', 'JavaScript']
  },
  {
    icon: Layers,
    title: 'Frameworks & Libraries',
    skills: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'Flask', 'HTML and CSS']
  },
  {
    icon: Wrench,
    title: 'Tools & Platforms',
    skills: ['Linux', 'AWS', 'Docker', 'Git', 'GitHub', 'Visual studio', 'Kubernetes (K8s)', 'Postman']
  },
  {
    icon: Shield,
    title: 'Authentication & Security',
    skills: ['JWT (JSON Web Token)', 'bcrypt']
  },
  {
    icon: Brain,
    title: 'Soft Skills',
    skills: ['Time Management', 'Leadership', 'Problem-Solving', 'Adaptability', 'Quick Learner']
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-gray-900">
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
            SKILLS & EXPERTISE
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies, frameworks, and concepts I use to build impactful solutions
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 group"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 20 },
                visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
              }}
              className="transition-all duration-300 group-hover:blur-[2px] group-hover:opacity-50 hover:!blur-none hover:!opacity-100 hover:!scale-105 hover:z-10"
            >
              <Card className="h-full border-gray-700 bg-gray-800 hover:shadow-2xl hover:shadow-teal-500/20 transition-all duration-300 hover:border-teal-600/50">
                <CardHeader>
                  <div className="w-14 h-14 bg-gradient-to-br from-teal-900 to-teal-950 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-teal-900/50">
                    <category.icon className="w-7 h-7 text-teal-400" />
                  </div>
                  <CardTitle className="text-xl text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge
                        key={skillIdx}
                        variant="secondary"
                        className="bg-gray-700 text-gray-200 hover:bg-teal-950 hover:text-teal-300 transition-colors border border-gray-600 px-3 py-1.5 h-auto whitespace-normal break-words text-left"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}