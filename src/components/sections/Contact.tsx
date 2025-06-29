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
import { ContactForm } from '@/components/common/ContactForm';
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

          <motion.div className="max-w-lg mx-auto" variants={staggerItem}>
            <ContactForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
