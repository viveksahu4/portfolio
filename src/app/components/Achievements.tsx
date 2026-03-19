import { Trophy, Star, Target, Users, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import computationalTheoryImage from '../../assets/Computational Theory Badge.png';
import hackathonImage from '../../assets/Hackathon Runner-Up.png';
import ociImage from '../../assets/OCI Foundation Badge.png';
import chatGptApiImage from '../../assets/Building Systems with the ChatGPT API.png';

const achievements = [
  {
    icon: Trophy,
    title: 'OCI Foundation Badge',
    description: 'Earned the OCI Foundation Badge from Oracle University',
    date: 'October 2025',
    category: 'Technology',
    verifyLink: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=8D5AB49623CEB8CB681D87FA6407331BD8EFD84F58531BBFA8B4DC2D5043D686',
    image: ociImage
  },
  {
    icon: Star,
    title: 'Computational Theory Badge',
    description: 'Achieved the Computational Theory: Language Principles & Finite Automata Theory Badge from Skillsoft',
    date: 'August 2025',
    category: 'Technology',
    verifyLink: 'https://skillsoft.digitalbadges.skillsoft.com/6d569c6a-c314-4361-a173-fe7ff8a381b8#acc.6l4Sxy8e',
    image: computationalTheoryImage
  },
  {
    icon: Target,
    title: 'Hackathon Runner-Up',
    description: 'Secured second position in the Trinetra 20-hour Hackathon at Lovely Professional University',
    date: 'February 2025',
    category: 'Competition',
    verifyLink: 'https://drive.google.com/file/d/1x6P8Eh4cts6iTfXC3A24_7ENqufxnyGk/view?usp=sharing',
    image: hackathonImage
  },
  {
    icon: Star,
    title: 'Building Systems with the ChatGPT API',
    description: 'Earned by developing skills in designing and integrating AI-powered applications using the ChatGPT API',
    date: 'DeepLearning.AI',
    category: 'Technology',
    verifyLink: 'https://learn.deeplearning.ai/accomplishments/d8cdf38b-8d08-49df-84c8-41a751effa2c?usp=sharing',
    image: chatGptApiImage
  }
];

export function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 bg-gray-800 overflow-hidden">
      <style>
        {`
          @keyframes carousel-spin {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(-360deg); }
          }
          .carousel-container {
            animation: carousel-spin 25s infinite linear;
            transform-style: preserve-3d;
          }
          .carousel-container:hover {
            animation-play-state: paused;
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
            ACHIEVEMENTS & AWARDS
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Milestones and recognition earned through dedication and hard work
          </p>
        </motion.div>

        {/* 3D Carousel Layout */}
        <div className="w-full flex justify-center items-center py-20" style={{ perspective: '1200px' }}>
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] h-[450px] carousel-container">
            {achievements.map((achievement, idx) => {
              const angle = (idx / achievements.length) * 360;
              const translateZ = 180; // Distance from center

              return (
                <div
                  key={idx}
                  className="absolute inset-0 w-full h-full"
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${translateZ}px)`,
                    // Ensure back cards aren't completely hidden but correctly sorted
                    backfaceVisibility: 'visible',
                  }}
                >
                  <Card className="h-full bg-gray-900 border-gray-700 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-300 hover:border-amber-600/50 hover:-translate-y-1 flex flex-col group/card shadow-xl overflow-hidden">
                    {/* Top 45% Image Container */}
                    <div
                      className="w-full h-[45%] shrink-0 bg-contain bg-center bg-no-repeat bg-gray-900 opacity-80 blur-[2px] transition-all duration-300 group-hover/card:opacity-100 group-hover/card:blur-none"
                      style={{
                        backgroundImage: achievement.image ? `url(${achievement.image})` : 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop")',
                        borderBottom: '2px solid rgba(245, 158, 11, 0.4)'
                      }}
                    ></div>

                    <div className="flex flex-col flex-1 p-4 justify-between">
                      <div className="space-y-2">
                        <div className="flex items-start justify-between mb-1">
                          <div className="w-10 h-10 bg-gradient-to-br from-amber-900 to-amber-950 rounded-lg flex items-center justify-center shadow-lg shadow-amber-900/50">
                            <achievement.icon className="w-5 h-5 text-amber-400" />
                          </div>
                          <Badge variant="secondary" className="bg-gray-800 text-gray-300 border-gray-700">
                            {achievement.category}
                          </Badge>
                        </div>
                        <div>
                          <CardTitle className="text-lg text-white leading-tight">{achievement.title}</CardTitle>
                          <CardDescription className="text-gray-400 text-sm line-clamp-2 mt-1">{achievement.description}</CardDescription>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold mt-1">
                          <span>{achievement.date}</span>
                        </div>
                      </div>

                      {achievement.verifyLink && (
                        <div className="pt-3 mt-auto">
                          <a href={achievement.verifyLink} target="_blank" rel="noopener noreferrer" className="w-full">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full border-amber-800 bg-amber-950/30 text-amber-400 hover:bg-amber-900 hover:text-amber-300 hover:border-amber-500 transition-all"
                            >
                              <ExternalLink className="w-4 h-4 mr-2 group-hover/card:scale-110 transition-transform" />
                              Verify Achievement
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
      </div>
    </section>
  );
}
