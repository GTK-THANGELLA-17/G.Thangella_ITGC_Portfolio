
import { Shield, FileText, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from './ui/badge';

const AuditInfo = () => {
  const { theme } = useTheme();
  
  return (
    <section id="audit-info" className={`py-20 ${theme === 'dark' ? 'bg-zinc-900' : 'bg-white'} relative overflow-hidden`}>
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-purple-500/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-primary/30 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium mb-4 border-primary/30 text-primary">Specialized Knowledge</Badge>
          <h2 className="text-3xl md:text-5xl font-bold gradient-heading">IT Audit & Compliance</h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
          <p className={`${theme === 'dark' ? 'text-white/70' : 'text-foreground/70'}`}>
            Explore my specialized knowledge in IT audit and compliance controls
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card 
            className={`overflow-hidden relative hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group ${
              theme === 'dark' ? 'bg-zinc-800/90 border-zinc-700' : 'bg-white/90 border-primary/10'
            } backdrop-blur-sm`}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
            
            <CardHeader className="relative z-10 pb-0">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className={`text-center text-2xl md:text-3xl ${theme === 'dark' ? 'text-white' : ''}`}>
                IT Audit & Compliance
              </CardTitle>
              <CardDescription className={`text-center ${theme === 'dark' ? 'text-white/60' : ''}`}>
                Comprehensive knowledge base about IT audit concepts, compliance frameworks, and control methodologies
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 flex flex-col items-center p-8">
              <div className={`mb-6 p-6 rounded-xl ${theme === 'dark' ? 'bg-zinc-700/50' : 'bg-primary/5'} w-full`}>
                <h4 className={`text-lg font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>What You'll Find Inside:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className={theme === 'dark' ? 'text-white/80' : 'text-foreground/80'}>
                      IT General Controls (ITGC) frameworks and best practices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className={theme === 'dark' ? 'text-white/80' : 'text-foreground/80'}>
                      IT Automated Controls (ITAC) implementation guidelines
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span className={theme === 'dark' ? 'text-white/80' : 'text-foreground/80'}>
                      SOX compliance requirements and audit methodologies
                    </span>
                  </li>
                </ul>
              </div>
              
              <Button className="group relative overflow-hidden rounded-full px-8 py-6 bg-gradient-to-r from-primary to-purple-600" asChild>
                <Link to="/audit-info" className="flex items-center gap-2">
                  <span className="relative z-10">Explore Audit Knowledge</span>
                  <ArrowRight className="h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

// Helper component for the Check Circle icon
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

export default AuditInfo;
