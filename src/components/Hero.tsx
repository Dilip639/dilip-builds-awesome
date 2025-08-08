import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";
import dilipPhoto from "@/assets/dilip-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-90"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-white/10 animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 rounded-full bg-white/15 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/3 right-20 w-12 h-12 rounded-full bg-white/10 animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left text-white">
            <div className="animate-slide-up">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                Adurthi Sai Narisimha{" "}
                <span className="text-warm font-extrabold">Dilip</span>
              </h1>
            </div>
            
            <div className="animate-slide-up-delay-1">
              <p className="text-xl lg:text-2xl mb-8 text-white/90 font-medium">
                DevOps Engineer | Web Developer | ServiceNow Developer
              </p>
            </div>
            
            <div className="animate-slide-up-delay-2">
              <p className="text-lg mb-8 text-white/80 max-w-2xl mx-auto lg:mx-0">
                "You already know me — now let's build something amazing together!"
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" variant="secondary" className="shadow-medium hover:shadow-strong transition-shadow">
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex-shrink-0 animate-slide-up-delay-1">
            <div className="relative">
              <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-strong border-8 border-white/20 backdrop-blur-sm">
                <img 
                  src={dilipPhoto} 
                  alt="Adurthi Sai Narisimha Dilip" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative rings */}
              <div className="absolute -inset-4 rounded-full border-2 border-white/10 animate-pulse"></div>
              <div className="absolute -inset-8 rounded-full border border-white/5 animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-8 w-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;