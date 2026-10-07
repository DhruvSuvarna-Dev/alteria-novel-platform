'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Alteria?",
    answer: "Alteria is an original fantasy light novel project, blending deep worldbuilding, magic, and mystery. It is exclusively published on this premium digital platform."
  },
  {
    question: "Which chapters are free?",
    answer: "The Prologue and the first two chapters are completely free to read. This gives you a chance to enter the world and decide if you'd like to continue the journey."
  },
  {
    question: "How do I purchase the full novel?",
    answer: "You can purchase the full digital edition of Book I by creating an account and visiting the Buy page. It is a one-time purchase that unlocks all current and future chapters for Book I."
  },
  {
    question: "Can I read it on mobile?",
    answer: "Yes! Our custom reader is fully responsive and designed to provide a comfortable, distraction-free reading experience on phones, tablets, and desktop computers."
  },
  {
    question: "Will new chapters be added?",
    answer: "Yes, Book I is currently ongoing. Purchasing the book gives you instant access to all newly published chapters as they are released."
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">FAQ</h1>
          <p className="text-slate-400 text-lg">
            Answers to common questions about the novel and the platform.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`glass-card overflow-hidden transition-all duration-300 ${openIndex === index ? 'border-violet-primary/50' : 'border-white/5'}`}
            >
              <button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-serif text-lg ${openIndex === index ? 'text-white' : 'text-slate-300'}`}>
                  {faq.question}
                </span>
                {openIndex === index ? (
                  <ChevronUp size={20} className="text-violet-primary flex-shrink-0" />
                ) : (
                  <ChevronDown size={20} className="text-slate-500 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`px-6 pb-6 text-slate-400 text-sm leading-relaxed transition-all duration-300 ${
                  openIndex === index ? 'block opacity-100' : 'hidden opacity-0'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
