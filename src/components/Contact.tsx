import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Download, Send, MapPin } from "lucide-react";

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:adurthidilip@gmail.com";
  };

  const handleResumeDownload = () => {
    // In a real implementation, this would download the resume file
    console.log("Resume download clicked");
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full hero-gradient opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full secondary-gradient opacity-10 translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on your next project? I'd love to hear from you!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-strong border-0 bg-card/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-3xl font-bold text-foreground mb-4">
                Get in Touch
              </CardTitle>
              <p className="text-muted-foreground text-lg">
                Whether you have a project in mind or just want to say hello, I'm always open to new opportunities
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/50">
                    <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">adurthidilip@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 rounded-lg bg-background/50 border border-border/50">
                    <div className="w-12 h-12 rounded-full secondary-gradient flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Location</h3>
                      <p className="text-muted-foreground">Available for Remote Work</p>
                    </div>
                  </div>
                </div>
                
                {/* Call to Action */}
                <div className="flex flex-col justify-center space-y-6">
                  <div className="text-center p-6 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
                    <h3 className="font-bold text-xl text-foreground mb-3">
                      Ready to start something great?
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Let's discuss how I can help bring your vision to life
                    </p>
                    
                    <div className="space-y-4">
                      <Button 
                        onClick={handleEmailClick}
                        size="lg" 
                        className="w-full shadow-medium hover:shadow-strong transition-shadow"
                      >
                        <Send className="mr-2 h-5 w-5" />
                        Send Email
                      </Button>
                      
                      <Button 
                        onClick={handleResumeDownload}
                        variant="outline" 
                        size="lg" 
                        className="w-full"
                      >
                        <Download className="mr-2 h-5 w-5" />
                        Download Resume
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;