import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-foreground">Brendan Mathis</h1>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#experience" className="text-muted-foreground hover:text-foreground transition-colors">Experience</a>
              <a href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">Skills</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Hello, I'm <span className="text-primary">Brendan Mathis</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl">
                A passionate professional dedicated to creating meaningful solutions and building lasting relationships. 
                Welcome to my corner of the internet where I share my journey, experiences, and insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8">
                  <Mail className="mr-2 h-5 w-5" />
                  Get In Touch
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  <Briefcase className="mr-2 h-5 w-5" />
                  View My Work
                </Button>
              </div>
            </div>
            <div className="flex-shrink-0">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <img 
                  src="/placeholder.svg?key=ozesl" 
                  alt="Brendan Mathis" 
                  className="w-72 h-72 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">About Me</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                I'm a dedicated professional with a passion for innovation and excellence. Throughout my career, 
                I've focused on building meaningful connections and delivering impactful results that make a difference.
              </p>
              <p className="text-lg text-muted-foreground mb-6 text-pretty">
                When I'm not working, you can find me exploring new technologies, reading about industry trends, 
                or spending time with family and friends. I believe in continuous learning and always strive to 
                grow both personally and professionally.
              </p>
              <div className="flex items-center gap-4 text-muted-foreground">
                <MapPin className="h-5 w-5" />
                <span>Based in [Your Location]</span>
              </div>
            </div>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Quick Facts</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Years of Experience: [X] years</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Education: [Your Education]</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <span className="text-muted-foreground">Current Role: [Your Current Position]</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Professional Experience</h2>
          <div className="space-y-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">[Current Position]</h3>
                    <p className="text-primary font-medium">[Company Name]</p>
                  </div>
                  <Badge variant="secondary">[Start Date] - Present</Badge>
                </div>
                <p className="text-muted-foreground text-pretty">
                  Brief description of your current role, key responsibilities, and notable achievements. 
                  Highlight the impact you've made and skills you've developed in this position.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">[Previous Position]</h3>
                    <p className="text-primary font-medium">[Company Name]</p>
                  </div>
                  <Badge variant="secondary">[Start Date] - [End Date]</Badge>
                </div>
                <p className="text-muted-foreground text-pretty">
                  Description of your previous role, key accomplishments, and how it contributed to your 
                  professional growth. Focus on measurable results and skills gained.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">[Earlier Position]</h3>
                    <p className="text-primary font-medium">[Company Name]</p>
                  </div>
                  <Badge variant="secondary">[Start Date] - [End Date]</Badge>
                </div>
                <p className="text-muted-foreground text-pretty">
                  Overview of an earlier role that helped shape your career path. Mention key learnings 
                  and experiences that have influenced your professional development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Skill 1</Badge>
                  <Badge variant="outline">Skill 2</Badge>
                  <Badge variant="outline">Skill 3</Badge>
                  <Badge variant="outline">Skill 4</Badge>
                  <Badge variant="outline">Skill 5</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Leadership</Badge>
                  <Badge variant="outline">Communication</Badge>
                  <Badge variant="outline">Problem Solving</Badge>
                  <Badge variant="outline">Team Collaboration</Badge>
                  <Badge variant="outline">Project Management</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-foreground">Interests</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Interest 1</Badge>
                  <Badge variant="outline">Interest 2</Badge>
                  <Badge variant="outline">Interest 3</Badge>
                  <Badge variant="outline">Interest 4</Badge>
                  <Badge variant="outline">Interest 5</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 text-pretty">
            I'm always interested in new opportunities and meaningful conversations. 
            Feel free to reach out if you'd like to connect or collaborate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="text-lg px-8">
              <Mail className="mr-2 h-5 w-5" />
              Send Email
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2025 Brendan Mathis. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}
