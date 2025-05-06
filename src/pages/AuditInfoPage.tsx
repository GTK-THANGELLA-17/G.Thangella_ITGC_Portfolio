
import { useEffect, useState } from 'react';
import { Shield, Server, CheckCircle, FileText, Lock, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const AuditInfoPage = () => {
  const { theme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const auditCategories = [
    {
      title: "IT General Controls (ITGC)",
      icon: Shield,
      color: "from-blue-500/10 to-blue-600/5",
      textColor: "text-blue-500",
      description: "The foundation of IT controls that provide a stable and secure computing environment.",
      details: [
        "Logical access management ensures only authorized users can access systems",
        "Change management ensures changes are properly tested and approved",
        "System development follows appropriate standards and approvals",
        "Backup and recovery processes ensure business continuity"
      ]
    },
    {
      title: "IT Automated Controls (ITAC)",
      icon: Server,
      color: "from-purple-500/10 to-purple-600/5",
      textColor: "text-purple-500",
      description: "Controls built into applications that ensure the accuracy of processed data.",
      details: [
        "System calculations and automatic validations",
        "Interface controls ensuring data transfers correctly",
        "Configuration settings that enforce business rules",
        "Report generation controls ensuring complete and accurate outputs"
      ]
    },
    {
      title: "IT Business Controls",
      icon: CheckCircle,
      color: "from-teal-500/10 to-teal-600/5",
      textColor: "text-teal-500",
      description: "Controls that align IT operations with business objectives and requirements.",
      details: [
        "Business process controls within applications",
        "Data integrity and quality controls",
        "Workflow approvals and segregation of duties",
        "User access based on business roles and responsibilities"
      ]
    },
    {
      title: "SOX Compliance",
      icon: FileText,
      color: "from-amber-500/10 to-amber-600/5",
      textColor: "text-amber-500",
      description: "Controls that ensure financial reporting systems comply with Sarbanes-Oxley Act requirements.",
      details: [
        "Documentation of financial system controls",
        "Regular testing of control effectiveness",
        "Remediation of identified weaknesses",
        "Annual attestation of control effectiveness"
      ]
    },
    {
      title: "Access Management",
      icon: Lock,
      color: "from-green-500/10 to-green-600/5",
      textColor: "text-green-500",
      description: "Controls over who can access systems and what they can do within those systems.",
      details: [
        "User provisioning and deprovisioning processes",
        "Periodic user access reviews",
        "Password configuration and security",
        "High privilege access management",
        "Generic account management"
      ]
    },
    {
      title: "Risk Assessment",
      icon: AlertTriangle,
      color: "from-red-500/10 to-red-600/5",
      textColor: "text-red-500",
      description: "Processes to identify, analyze, and mitigate IT-related risks.",
      details: [
        "Identifying potential system vulnerabilities",
        "Assessing impact and likelihood of threats",
        "Prioritizing risks based on business impact",
        "Implementing controls to mitigate identified risks",
        "Continuous monitoring of risk environment"
      ]
    }
  ];
  
  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#403E43]' : 'bg-white'} transition-colors duration-300 relative overflow-hidden`}>
      {/* Animated particles background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="particle w-40 h-40 rounded-full bg-primary/5 absolute top-[10%] right-[10%] floating-element" style={{ animationDelay: '0s', animationDuration: '15s' }}></div>
        <div className="particle w-32 h-32 rounded-full bg-purple-500/5 absolute top-[60%] left-[5%] floating-element" style={{ animationDelay: '3s', animationDuration: '14s' }}></div>
        <div className="particle w-24 h-24 rounded-full bg-blue-500/5 absolute top-[30%] left-[20%] floating-element" style={{ animationDelay: '1s', animationDuration: '18s' }}></div>
        <div className="particle w-36 h-36 rounded-full bg-teal-500/5 absolute bottom-[15%] right-[15%] floating-element" style={{ animationDelay: '2s', animationDuration: '16s' }}></div>
      </div>
    
      {/* Fixed navigation button */}
      <div 
        className={`fixed top-4 left-4 z-50 transition-all duration-300 ${
          isScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}
      >
        <Button 
          variant="outline" 
          size="sm"
          className={`flex items-center gap-2 rounded-full ${
            theme === 'dark' ? 'bg-zinc-800/80 border-zinc-700 text-white hover:bg-zinc-700/80' : 'bg-white/80 hover:bg-white'
          } backdrop-blur-md`}
          asChild
        >
          <Link to="/">
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </Button>
      </div>
      
      <div className="container mx-auto px-4 py-10 relative z-10">
        <div className="mb-12 animate-fade-in">
          {!isScrolled && (
            <Button 
              variant="outline" 
              className="flex items-center gap-2 mb-10"
              asChild
            >
              <Link to="/">
                <ArrowLeft size={16} />
                Back to Portfolio
              </Link>
            </Button>
          )}
          
          <div className="max-w-3xl mx-auto text-center mb-16">
            <Badge variant="outline" className="px-4 py-1.5 text-sm font-medium mb-4 animate-fade-in border-primary/30 text-primary">Knowledge Base</Badge>
            <h1 className="text-4xl md:text-6xl font-bold gradient-heading animate-scale-in">IT Audit & Compliance</h1>
            <div className="w-20 h-1 bg-primary mx-auto mt-4 mb-6 rounded-full"></div>
            <p className={`text-lg ${theme === 'dark' ? 'text-white/70' : 'text-foreground/70'} animate-fade-in max-w-2xl mx-auto`}>
              A comprehensive guide to understanding the world of IT audit and compliance controls,
              frameworks, and best practices for maintaining regulatory standards.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {auditCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`overflow-hidden relative group hover:shadow-lg transition-all duration-500 hover:-translate-y-2 card-3d ${
                theme === 'dark' ? 'bg-zinc-800/90 border-zinc-700' : 'bg-white/90 border-primary/10'
              } animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-50 transition-opacity duration-300 group-hover:opacity-100`}></div>
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <CardHeader className="relative z-10">
                <div className={`absolute right-4 top-4 ${category.textColor} opacity-80 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={24} />
                </div>
                <CardTitle className={theme === 'dark' ? 'text-white' : ''}>
                  {category.title}
                </CardTitle>
                <CardDescription className={theme === 'dark' ? 'text-white/60' : ''}>
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3">
                  {category.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start group/item transition-all duration-300 hover:translate-x-1 px-2 py-1 rounded-lg hover:bg-primary/5">
                      <CheckCircle className={`h-5 w-5 ${category.textColor} mr-3 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`} />
                      <span className={theme === 'dark' ? 'text-white/80' : 'text-foreground/80'}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* References section */}
        <div className="mt-16 max-w-3xl mx-auto animate-slide-up animation-delay-700">
          <Card className={`${theme === 'dark' ? 'bg-zinc-800/90 border-zinc-700' : 'bg-white/90 border-primary/10'}`}>
            <CardHeader>
              <CardTitle className={theme === 'dark' ? 'text-white' : ''}>
                Framework References
              </CardTitle>
              <CardDescription className={theme === 'dark' ? 'text-white/60' : ''}>
                Industry-standard frameworks that inform IT audit practices
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary font-semibold">1</span>
                  </div>
                  <div>
                    <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>COBIT (Control Objectives for Information and Related Technologies)</h4>
                    <p className={theme === 'dark' ? 'text-white/70' : 'text-foreground/70'}>
                      A framework for governance and management of enterprise IT
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary font-semibold">2</span>
                  </div>
                  <div>
                    <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>ITIL (Information Technology Infrastructure Library)</h4>
                    <p className={theme === 'dark' ? 'text-white/70' : 'text-foreground/70'}>
                      Best practices for IT service management and alignment with business needs
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                    <span className="text-primary font-semibold">3</span>
                  </div>
                  <div>
                    <h4 className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-foreground'}`}>ISO 27001</h4>
                    <p className={theme === 'dark' ? 'text-white/70' : 'text-foreground/70'}>
                      International standard for information security management systems
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuditInfoPage;
