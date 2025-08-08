import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Users, Lightbulb, MessageCircle } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "AWS", level: "Advanced" },
    { name: "Docker", level: "Advanced" },
    { name: "ServiceNow", level: "Expert" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "JavaScript", level: "Advanced" },
  ];

  const softSkills = [
    { name: "Communication", icon: MessageCircle, description: "Clear and effective communication with teams and stakeholders" },
    { name: "Problem Solving", icon: Lightbulb, description: "Analytical thinking and creative solutions to complex challenges" },
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A blend of technical proficiency and soft skills that drive successful project delivery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <Card className="shadow-medium hover:shadow-strong transition-shadow border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full hero-gradient flex items-center justify-center">
                <Code className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {technicalSkills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/50 hover:bg-background/80 transition-colors"
                  >
                    <span className="font-semibold text-foreground">{skill.name}</span>
                    <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {skill.level}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <Card className="shadow-medium hover:shadow-strong transition-shadow border-0 bg-card/50 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full secondary-gradient flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-foreground">Soft Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div 
                      key={skill.name}
                      className="p-6 rounded-lg bg-background/50 border border-border/50 hover:bg-background/80 transition-colors"
                    >
                      <div className="flex items-center gap-4 mb-3">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>
                        <h3 className="font-bold text-lg text-foreground">{skill.name}</h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;