import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-section" id="contact">
      <div className="container mx-auto px-4">
        <h2 className="text-heading-1 text-center mb-12">Get In Touch</h2>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-card-border">
            <CardHeader className="text-center">
              <CardTitle className="text-heading-2">
                Let&apos;s Work Together
              </CardTitle>
              <CardDescription>
                I&apos;m always interested in new opportunities and exciting
                projects
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <Button size="lg" className="bg-gradient-secondary">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
                <Button variant="outline" size="lg">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Start Chat
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
