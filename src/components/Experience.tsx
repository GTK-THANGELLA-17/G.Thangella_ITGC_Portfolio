
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Experience = () => {
  const { theme } = useTheme();

  const experiencePoints = [
    "Tested the segregation of duties (SOD) and obtained justification for noted conflicts.",
    "Worked on user termination processes to ensure access revocation and asset management audits.",
    "Inspected windows on user creation, termination, and privileged access to admin groups.",
    "Evaluated the design and effectiveness of IT controls throughout business processes.",
    "Examined high privileged access (HPA) on Windows systems.",
    "Assisted in planning and execution of internal controls over financial reporting, focusing on SOX testing.",
    "Executed IT control evaluation including walkthroughs, document requests, and tests of design and operating effectiveness.",
    "Facilitated internal and external IT control audits, managing evidence gathering and coordination.",
    "Examined control efficiency by testing selected samples for specified periods.",
    "Prepared audit summaries for senior IT management with observations and recommendations.",
    "Performed assessments of IT internal controls as part of compliance and operational audits.",
    "Executed all audit stages from planning to follow-up.",
    "Performed quarterly and semi-annual HPA reviews, user access management, and password configuration checks."
  ];
  
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-20 bg-gradient-to-b from-background to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        <div className="particle w-32 h-32 rounded-full bg-primary/5 absolute -top-10 -left-10 blur-3xl"></div>
        <div className="particle w-40 h-40 rounded-full bg-purple-500/5 absolute -bottom-10 -right-10 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium mb-4 animate-fade-in border-primary/30 text-primary">My Professional Journey</Badge>
          <h2 className="text-3xl md:text-5xl font-bold gradient-heading animate-fade-in">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-foreground/70'} animate-fade-in`}>
            My professional journey in IT Audit and Compliance
          </p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 via-primary/50 to-primary/20 transform md:translate-x-[-0.5px] hidden md:block"></div>
        
          <div className="relative">
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              <div className="hidden md:flex justify-end">
                <div className="text-right pr-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                  <Badge variant="outline" className="px-3 py-1 mb-2 text-xs border-primary/30 text-primary">April 2024 - Present</Badge>
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Consultant</h3>
                  <h4 className="text-lg font-medium text-primary">UI Softech Pvt, Ltd</h4>
                </div>
              </div>
              
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary z-10 mt-2 animate-pulse-soft"></div>
              
              <Card className={`overflow-hidden relative hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group md:ml-10 animate-slide-up ${
                theme === 'dark' ? 'bg-zinc-800/90 border-zinc-700' : 'bg-white/90'
              } backdrop-blur-sm`} style={{ animationDelay: '0.3s' }}>
                <div className="md:hidden p-4 border-b border-primary/10">
                  <Badge variant="outline" className="px-3 py-1 mb-2 text-xs border-primary/30 text-primary">April 2024 - Present</Badge>
                  <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>Consultant</h3>
                  <h4 className="text-lg font-medium text-primary">UI Softech Pvt, Ltd</h4>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg pointer-events-none"></div>
                
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {experiencePoints.slice(0, 5).map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3 group/item hover:bg-primary/5 p-2 rounded-lg transition-colors duration-300">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform" />
                        <span className={theme === 'dark' ? 'text-white/80' : 'text-foreground/80'}>
                          {point}
                        </span>
                      </div>
                    ))}
                    
                    <Card className={`${theme === 'dark' ? 'bg-zinc-700/80 border-zinc-600' : 'bg-secondary/30 border-primary/10'} group-hover:border-primary/30 transition-colors duration-300`}>
                      <CardContent className="p-4 text-sm">
                        <div className="flex items-center mb-2">
                          <div className="mr-2 text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                              <circle cx="12" cy="12" r="10"></circle>
                              <line x1="12" y1="16" x2="12" y2="12"></line>
                              <line x1="12" y1="8" x2="12.01" y2="8"></line>
                            </svg>
                          </div>
                          <h5 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>
                            Additional Responsibilities
                          </h5>
                        </div>
                        <p className={theme === 'dark' ? 'text-white/70' : 'text-foreground/70'}>
                          Click to view {experiencePoints.length - 5} more responsibilities
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
