'use client';

import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Phone, MapPin, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  hoverScale,
  cardHover,
} from '@/lib/animations';

export function Contact() {
  const { ref, controls } = useScrollAnimation();

  const handleEmailClick = () => {
    const email = 'faizal.ardian.putra@gmail.com';
    const subject = "Let's Work Together";
    const body =
      "Hi Faizal,\n\nI'd like to discuss a potential opportunity with you.\n\nBest regards,";

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;

    // Analytics tracking
    console.log('Email contact initiated');
  };

  const handleChatClick = () => {
    // This could integrate with a chat service like Intercom, Crisp, etc.
    // For now, we'll redirect to LinkedIn messages
    const linkedinUrl = 'https://linkedin.com/in/faizal-ardian-putra';
    window.open(linkedinUrl, '_blank', 'noopener,noreferrer');

    // Analytics tracking
    console.log('Chat contact initiated');
  };

  const handlePhoneClick = () => {
    const phoneNumber = '+62-812-3456-7890'; // Replace with actual number
    window.location.href = `tel:${phoneNumber}`;

    // Analytics tracking
    console.log('Phone contact initiated');
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'faizal.ardian.putra@gmail.com',
      action: handleEmailClick,
      color: 'hover:text-red-500',
    },
    {
      icon: MessageSquare,
      title: 'LinkedIn',
      description: "Let's connect professionally",
      action: handleChatClick,
      color: 'hover:text-blue-600',
    },
    {
      icon: Phone,
      title: 'Phone',
      description: '+62-812-3456-7890',
      action: handlePhoneClick,
      color: 'hover:text-green-500',
    },
  ];

  return (
    <section className="py-section bg-muted/50" id="contact">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            className="text-heading-1 text-center mb-12"
            variants={fadeInUp}
          >
            Get In Touch
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8"
            variants={staggerContainer}
          >
            {/* Main Contact Card */}
            <motion.div variants={staggerItem} whileHover={cardHover}>
              <Card className="bg-card border-card-border h-full">
                <CardHeader className="text-center">
                  <CardTitle className="text-heading-2">
                    Let&apos;s Work Together
                  </CardTitle>
                  <CardDescription>
                    I&apos;m always interested in new opportunities and exciting
                    projects. Feel free to reach out!
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-4">
                    <motion.div
                      whileHover={hoverScale}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="w-full bg-gradient-secondary hover:opacity-90 transition-all duration-200"
                        onClick={handleEmailClick}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Send Email
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={hoverScale}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="outline"
                        size="lg"
                        className="w-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-200"
                        onClick={handleChatClick}
                      >
                        <MessageSquare className="w-4 h-4 mr-2" />
                        Connect on LinkedIn
                        <ExternalLink className="w-3 h-3 ml-1" />
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Methods */}
            <motion.div className="space-y-4" variants={staggerContainer}>
              <motion.h3 className="text-heading-3 mb-6" variants={fadeInUp}>
                Contact Methods
              </motion.h3>

              {contactMethods.map((method, index) => {
                const IconComponent = method.icon;

                return (
                  <motion.div
                    key={method.title}
                    variants={staggerItem}
                    whileHover={cardHover}
                  >
                    <Card
                      className="bg-card border-card-border cursor-pointer transition-all duration-200 hover:bg-card/80"
                      onClick={method.action}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <motion.div
                            className={`p-2 rounded-lg bg-primary/10 transition-colors duration-200 ${method.color}`}
                            whileHover={{ scale: 1.1 }}
                          >
                            <IconComponent className="w-5 h-5" />
                          </motion.div>
                          <div className="flex-1">
                            <h4 className="font-medium">{method.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {method.description}
                            </p>
                          </div>
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}

              {/* Location Info */}
              <motion.div variants={staggerItem}>
                <Card className="bg-card border-card-border">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <MapPin className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-sm text-muted-foreground">
                          Jakarta, Indonesia (UTC+7)
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
