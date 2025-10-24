import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, HelpCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 text-center">
            <Mail className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--apk-orange))]" />
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-sm text-muted-foreground">support@apkmirror.com</p>
          </Card>

          <Card className="p-6 text-center">
            <MessageSquare className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--apk-orange))]" />
            <h3 className="font-semibold mb-2">Live Chat</h3>
            <p className="text-sm text-muted-foreground">Available 24/7</p>
          </Card>

          <Card className="p-6 text-center">
            <HelpCircle className="h-12 w-12 mx-auto mb-4 text-[hsl(var(--apk-orange))]" />
            <h3 className="font-semibold mb-2">Help Center</h3>
            <p className="text-sm text-muted-foreground">Browse FAQs</p>
          </Card>
        </div>

        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <Input id="name" required placeholder="Your name" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <Input id="email" type="email" required placeholder="your@email.com" />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject *
              </label>
              <Input id="subject" required placeholder="How can we help?" />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <Textarea
                id="message"
                required
                placeholder="Tell us more about your question or issue..."
                rows={6}
              />
            </div>

            <Button type="submit" className="bg-[hsl(var(--apk-orange))] hover:bg-[hsl(var(--apk-orange-dark))]">
              Send Message
            </Button>
          </form>
        </Card>
      </main>

      <footer className="bg-card border-t mt-12 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 APKMirror. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
