import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  const educationItems = [
    {
      title: "Bachelor of Technology",
      year: "2022",
      type: "Degree",
      icon: GraduationCap,
      description: "Completed comprehensive engineering program with focus on technology and innovation",
      color: "primary"
    },
    {
      title: "DevOps Course Completion Certificate",
      year: "2022",
      type: "Certification",
      icon: Award,
      description: "Specialized training in DevOps practices, tools, and methodologies",
      color: "warm"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Education & <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building a strong foundation through continuous learning and professional development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index}
                className="shadow-medium hover:shadow-strong transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-105"
              >
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full ${
                    item.color === 'primary' ? 'hero-gradient' : 'bg-warm'
                  } flex items-center justify-center`}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </CardTitle>
                  <div className="flex items-center justify-center gap-2">
                    <Badge 
                      variant="secondary" 
                      className={`${
                        item.color === 'primary' 
                          ? 'bg-primary/10 text-primary border-primary/20' 
                          : 'bg-warm/10 text-warm border-warm/20'
                      }`}
                    >
                      {item.type}
                    </Badge>
                    <Badge variant="outline" className="border-border/50">
                      {item.year}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;