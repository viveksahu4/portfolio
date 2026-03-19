import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'vickysv1610@gmail.com',
    link: 'mailto:vickysv1610@gmail.com'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/viveksahu4/',
    link: 'https://www.linkedin.com/in/viveksahu4/'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/viveksahu4',
    link: 'https://github.com/viveksahu4'
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'India',
    link: null
  }
];

export function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');

    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
    const mailtoLink = `mailto:vickysv1610@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="py-24 px-6 bg-gray-800">
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
            GET IN TOUCH
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Let's connect and discuss opportunities for collaboration and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <p className="text-gray-400 mb-6">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat about technology and innovation.
              </p>
            </div>

            <div className="space-y-4 group">
              {contactInfo.map((info, idx) => (
                <div key={idx} className="transition-all duration-300 group-hover:blur-[2px] group-hover:opacity-50 hover:!blur-none hover:!opacity-100 hover:!scale-105 hover:z-10">
                  <Card className="border-gray-700 bg-gray-900 group/card hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-teal-950 rounded-lg flex items-center justify-center group-hover/card:scale-110 transition-transform">
                          <info.icon className="w-5 h-5 text-teal-400" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">{info.label}</p>
                          {info.link ? (
                            <a
                              href={info.link}
                              className="text-white hover:text-teal-400 transition-colors font-medium"
                            >
                              {info.value}
                            </a>
                          ) : (
                            <p className="text-white font-medium">{info.value}</p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Card className="border-gray-700 bg-gray-900 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-white">Send a Message</CardTitle>
                <CardDescription className="text-gray-400">
                  I'll respond as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 hover:border-teal-500/50 focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 hover:border-teal-500/50 focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 hover:border-teal-500/50 focus:border-teal-500 transition-colors"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={6}
                      required
                      className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 hover:border-teal-500/50 focus:border-teal-500 transition-colors resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-teal-600 hover:bg-teal-700 shadow-lg shadow-teal-600/30 transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}