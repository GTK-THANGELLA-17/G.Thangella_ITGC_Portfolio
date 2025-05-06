import {
  User, Mail, Phone, Linkedin, Instagram, Twitter,
  MessageSquare, MapPin, Calendar, Briefcase, Download
} from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';
import { Button } from './ui/button';

const About = () => {
  const { theme } = useTheme();

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/gthangella/' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/g_thangella_k?igsh=aWczdnVtaDR1N280' },
    { name: 'Twitter', icon: Twitter, url: 'https://x.com/i/flow/login?redirect_after_login=%2FGtk947' },
    { name: 'WhatsApp', icon: MessageSquare, url: 'https://wa.me/8499090369' },
  ];

  return (
    <section
      id="about"
      className={`py-20 ${theme === 'dark' ? 'bg-zinc-900/80' : 'bg-gradient-to-br from-secondary/30 to-white'} relative overflow-hidden`}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-64 h-64 bg-primary/5 rounded-full absolute -top-32 -left-32 blur-3xl"></div>
        <div className="w-64 h-64 bg-purple-500/5 rounded-full absolute top-1/2 -right-32 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-slide-up">
          <span className="inline-block text-sm font-medium text-primary px-3 py-1 rounded-full bg-primary/10 mb-4">About Me</span>
          <h2 className="text-3xl md:text-5xl font-bold gradient-heading">Professional Profile</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-foreground/70'}`}>
            I'm an IT audit professional with expertise in IT general controls, automated controls, and SOX compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Profile Card */}
          <div className="animate-slide-up order-1 md:order-1">
            <div className={`${theme === 'dark' ? 'bg-zinc-800/90' : 'bg-white/90'} backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-primary/10 relative overflow-hidden card-3d`}>
              <div className="absolute -top-10 -right-10 w-10 h-10 bg-primary/5 rounded-full blur-xl rotate-bg"></div>

              <div className="relative">
                {/* AspectRatio with Profile Image */}
                <div className="aspect-ratio-container relative w-full max-w-xs mx-auto mb-8 rounded-2xl overflow-hidden gradient-border">
                  <AspectRatio ratio={1 / 1}>
                    <div className={`w-full h-full flex items-center justify-center ${theme === 'dark' ? 'bg-zinc-700' : 'bg-primary/5'} rounded-xl`}>
                      <div className="w-full h-full rounded-xl relative overflow-hidden">
                        <img
                          src="/G.Thangella.jpg" // ✅ Update with actual image path
                          alt="Thangella G. Profile"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/20 animate-pulse-soft"></div>
                      </div>
                    </div>
                  </AspectRatio>
                </div>

                <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-foreground'} mb-4 text-center`}>Thangella G.</h3>
                <p className="text-primary font-medium text-center mb-6">IT Audit & Compliance Specialist</p>

                <div className="space-y-4">
                  <div className="flex items-center border-b border-primary/10 pb-3">
                    <Mail className="h-5 w-5 text-primary mr-3" />
                    <a href="mailto:imgtk17@gmail.com" className={`hover:text-primary transition-colors ${theme === 'dark' ? 'text-white/80' : 'text-foreground/80'}`}>
                      imgtk17@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center border-b border-primary/10 pb-3">
                    <Phone className="h-5 w-5 text-primary mr-3" />
                    <a href="tel:8008133117" className={`hover:text-primary transition-colors ${theme === 'dark' ? 'text-white/80' : 'text-foreground/80'}`}>
                      8008133117
                    </a>
                  </div>
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-primary mr-3" />
                    <span className={theme === 'dark' ? 'text-white/80' : 'text-foreground/80'}>Status: Single</span>
                  </div>
                </div>

                {/* Social Icons */}
                <div className="mt-8">
                  <div className="flex justify-center space-x-3">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1 group"
                        aria-label={link.name}
                      >
                        <link.icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                    ))}
                    {/* Naukri Icon */}
                    <a
                      href="https://www.naukri.com/mnjuser/profile?id=&altresid"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:-translate-y-1 group"
                      aria-label="Naukri"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor" className="text-primary group-hover:scale-110 transition-transform">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h2v-2h-2v2zm0-4h2V7h-2v7z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Resume Download */}
                <div className="mt-6 text-center">
                  <Button variant="outline" className="rounded-full px-6 py-2 border-primary/30 button-shine relative overflow-hidden group" asChild>
                    <a href="/Thangella_ITGC_Resume.pdf" download="Thangella_ITGC_Resume.pdf">
                      <Download className="h-4 w-4 mr-2" />
                      <span className="relative z-10 group-hover:text-primary transition-colors duration-300">Download Resume</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Overview */}
          <div className="animate-slide-up animation-delay-200 order-2 md:order-2">
            <h3 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-foreground'} mb-6`}>Professional Overview</h3>

            <div className={`p-6 rounded-xl ${theme === 'dark' ? 'bg-zinc-800/80' : 'bg-white/80'} backdrop-blur-sm shadow-lg border border-primary/10 card-3d mb-8`}>
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-foreground/80'} leading-relaxed mb-4`}>
                I have experience in conducting comprehensive IT audits, identifying risks, and implementing
                remediation strategies. Throughout my career, I have developed a deep understanding of IT auditing
                processes and regulations, allowing me to provide valuable insights into an organization's compliance status.
              </p>
              <p className={`${theme === 'dark' ? 'text-white/80' : 'text-foreground/80'} leading-relaxed`}>
                My expertise includes IT general controls, IT automated controls, IT business controls, and SOX compliance.
                I am passionate about ensuring organizations maintain proper security measures and compliance with regulatory requirements.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className={`overflow-hidden hover-lift ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-white'}`}>
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Calendar className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Born</h4>
                  </div>
                  <p className={theme === 'dark' ? 'text-white/70' : 'text-foreground/70'}>May 17, 2002</p>
                </CardContent>
              </Card>

              <Card className={`overflow-hidden hover-lift ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-white'}`}>
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <MapPin className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Location</h4>
                  </div>
                  <p className={theme === 'dark' ? 'text-white/70' : 'text-foreground/70'}>Hyderabad, India</p>
                </CardContent>
              </Card>

              <Card className={`overflow-hidden hover-lift ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-white'}`}>
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <Briefcase className="h-4 w-4 text-primary" />
                    </div>
                    <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Experience</h4>
                  </div>
                  <p className={theme === 'dark' ? 'text-white/70' : 'text-foreground/70'}>1+ Years</p>
                </CardContent>
              </Card>

              <Card className={`overflow-hidden hover-lift ${theme === 'dark' ? 'bg-zinc-800 border-zinc-700' : 'bg-white'}`}>
                <CardContent className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                      </svg>
                    </div>
                    <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Languages</h4>
                  </div>
                  <p className={theme === 'dark' ? 'text-white/70' : 'text-foreground/70'}>English, Hindi & Telugu</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
