'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { contactSchema, ContactFormData } from '@/lib/validations';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';
import { useState } from 'react';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // In a real application, you would send the data to a server action or API endpoint
    console.log(data);

    // Simulate a successful submission
    setSubmitStatus({ success: true, message: 'Message sent successfully!' });
    setIsSubmitting(false);
    reset();
  }

  return (
    <motion.form
      variants={fadeIn}
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input placeholder="Your Name" {...register('name')} />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Input placeholder="Your Email" {...register('email')} />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>
      <div>
        <Input placeholder="Subject" {...register('subject')} />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
        )}
      </div>
      <div>
        <Textarea placeholder="Your Message" {...register('message')} />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>
      <div className="text-center">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
      {submitStatus && (
        <p
          className={`text-center mt-4 ${submitStatus.success ? 'text-green-500' : 'text-red-500'}`}
        >
          {submitStatus.message}
        </p>
      )}
    </motion.form>
  );
}
