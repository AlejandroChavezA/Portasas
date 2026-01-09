import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "alex.rodriguez@example.com",
    description: "I respond within 24 hours",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+34 123 456 789",
    description: "Mon - Fri, 9:00 - 18:00",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Madrid, Spain",
    description: "Available for remote work",
  },
  {
    icon: Clock,
    title: "Availability",
    value: "Open to new projects",
    description: "Ready to start immediately",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="text-neon-green/60 font-mono text-sm mb-4">{"// Get in touch"}</div>
          <h2 className="text-5xl serif-neon-display mb-6 text-neon-cyan neon-text">Let's Work Together</h2>
          <p className="text-xl max-w-2xl mx-auto text-white/80 font-sans">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon
                return (
                  <Card key={info.title} className="neon-card hover:shadow-neon-cyan transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <IconComponent className="h-6 w-6 text-vintage-neon mt-1 neon-text" />
                        <div>
                          <h4 className="serif-neon text-neon-cyan neon-text">{info.title}</h4>
                          <p className="text-neon-pink font-medium neon-text">{info.value}</p>
                          <p className="text-sm text-white/60 font-sans">{info.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>

          <div className="lg:col-span-2">
            <Card className="neon-card">
              <CardHeader>
                <CardTitle className="serif-neon text-neon-cyan text-xl neon-text">Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-neon-orange mb-2 block neon-text">Full Name</label>
                      <Input
                        type="text"
                        placeholder="Your name"
                        className="border-neon-cyan/30 focus:border-vintage-neon bg-dark-surface/50 text-white"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-neon-orange mb-2 block neon-text">Email</label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        className="border-neon-cyan/30 focus:border-vintage-neon bg-dark-surface/50 text-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neon-orange mb-2 block neon-text">Subject</label>
                    <Input
                      type="text"
                      placeholder="What can I help you with?"
                      className="border-neon-cyan/30 focus:border-vintage-neon bg-dark-surface/50 text-white"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-neon-orange mb-2 block neon-text">Message</label>
                    <Textarea
                      placeholder="Tell me about your project..."
                      rows={6}
                      className="border-neon-cyan/30 focus:border-vintage-neon bg-dark-surface/50 text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full vintage-neon-border bg-neon-cyan text-dark-bg hover:bg-neon-pink serif-neon"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
