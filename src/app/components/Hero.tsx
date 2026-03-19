import { Download, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import profileImage from '@/assets/e20e0825b3d4d3455deb2b9839298254237ec597.png';

export function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h1
                className="text-5xl md:text-7xl font-bold text-white tracking-wider cursor-pointer transition-all duration-300 hover:scale-105"
                style={{
                  fontFamily: 'var(--font-heading)',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.textShadow = '0 0 20px rgba(20, 184, 166, 0.8), 0 0 40px rgba(20, 184, 166, 0.6), 0 0 60px rgba(20, 184, 166, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.textShadow = 'none';
                }}
              >
                VIVEK SAHU
              </h1>
              <p className="text-2xl text-teal-400 font-medium" style={{ fontFamily: 'var(--font-body)' }}>
                Computer Science Student | Cloud Computing | Scalable Systems | Problem Solver
              </p>
            </div>

            <p className="text-lg text-gray-300 leading-relaxed">
              I enjoy building cloud-based solutions and deploying applications on modern cloud platforms. My focus lies in designing scalable infrastructure, cloud-native applications, and reliable backend systems. I'm continuously learning cloud technologies, DevOps practices, and distributed systems while improving my problem-solving skills through real-world projects and development work.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <Button
                size="lg"
                className="bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-600/30 hover:shadow-teal-600/50 transition-all duration-300 hover:scale-105"
                onClick={() => scrollToSection('projects')}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-teal-500 text-teal-400 hover:bg-teal-950 hover:text-teal-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 transition-all duration-300 hover:scale-105"
                onClick={() => window.open('https://drive.google.com/file/d/1gBTQ760aCtxcsmWhAfXFb9Pjb8dpnAxE/view?usp=sharing', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                View/Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center md:justify-end"
          >
            <div
              className="relative cursor-pointer group"
              onMouseEnter={(e) => {
                const glowDiv = e.currentTarget.querySelector('.glow-effect') as HTMLElement;
                if (glowDiv) {
                  glowDiv.style.opacity = '0.7';
                  glowDiv.style.transform = 'scale(1.1)';
                }
              }}
              onMouseLeave={(e) => {
                const glowDiv = e.currentTarget.querySelector('.glow-effect') as HTMLElement;
                if (glowDiv) {
                  glowDiv.style.opacity = '0.4';
                  glowDiv.style.transform = 'scale(1)';
                }
              }}
            >
              <div
                className="glow-effect absolute -inset-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-40 blur-3xl animate-pulse"
                style={{ transition: 'all 0.5s ease' }}
              ></div>
              <img
                src={profileImage}
                alt="Profile"
                className="relative w-[450px] h-[450px] object-cover rounded-full border-[12px] border-teal-500/30 shadow-2xl ring-4 ring-teal-400/50 transition-all duration-500 group-hover:scale-105 group-hover:ring-8 group-hover:ring-teal-300/60 group-hover:border-teal-400/50"
                style={{
                  objectPosition: 'center 20%',
                  transform: 'scale(1.3)'
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}