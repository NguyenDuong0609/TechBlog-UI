'use client';
import React from 'react';
import { Button } from '@/components/portfolio/ui/button';
import { Input } from '@/components/portfolio/ui/input';
import { Textarea } from '@/components/portfolio/ui/textarea';
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';

const Form = () => {
  return (
    <form className="flex flex-col gap-6" action="" method="">
      
      {/* Form Grid: Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="relative flex items-center">
          <Input type="text" id="name" placeholder="Your Name *" className="pl-4 pr-10 py-6 rounded-full" required />
          <User className="absolute right-4 text-muted-foreground" size={18}/>
        </div>
        <div className="relative flex items-center">
          <Input type="email" id="email" placeholder="Your Email *" className="pl-4 pr-10 py-6 rounded-full" required />
          <MailIcon className="absolute right-4 text-muted-foreground" size={18}/>
        </div>
      </div>

      {/* Purpose / Service Category */}
      <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-muted-foreground pl-1">Inquiry Purpose</label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <label className="flex items-center gap-2 px-3 py-3 rounded-xl border border-border bg-card cursor-pointer transition-colors text-sm hover:border-primary">
                  <input defaultChecked className="text-primary focus:ring-primary h-4 w-4 border-input" name="inquiry_type" type="radio" value="job_opportunity" />
                  <span>Job Opportunity</span>
              </label>
              <label className="flex items-center gap-2 px-3 py-3 rounded-xl border border-border bg-card cursor-pointer transition-colors text-sm hover:border-primary">
                  <input className="text-primary focus:ring-primary h-4 w-4 border-input" name="inquiry_type" type="radio" value="freelance" />
                  <span>Freelance Project</span>
              </label>
              <label className="flex items-center gap-2 px-3 py-3 rounded-xl border border-border bg-card cursor-pointer transition-colors text-sm hover:border-primary">
                  <input className="text-primary focus:ring-primary h-4 w-4 border-input" name="inquiry_type" type="radio" value="networking" />
                  <span>Technical Chat</span>
              </label>
          </div>
      </div>

      {/* Textarea: Message */}
      <div className="relative flex items-start">
        <Textarea id="message" placeholder="Type your message or project requirements here... *" className="pl-4 pr-10 py-4 rounded-2xl min-h-[120px] resize-none" required />
        <MessageSquare className="absolute right-4 top-4 text-muted-foreground" size={18}/>
      </div>

      {/* Action Submit Button */}
      <div className="pt-2">
        <Button className="w-full sm:w-auto group inline-flex items-center justify-center gap-2 px-8 py-6 rounded-full shadow-md text-[15px]">
          Let's Talk
          <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-1" size={18}/>
        </Button>
      </div>

    </form>
  )
}

export default Form
