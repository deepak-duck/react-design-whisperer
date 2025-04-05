
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What does lorem ipsum actually mean?",
      answer: "Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. It's often used in the printing and typesetting industry."
    },
    {
      question: "How do we know what kind of sounds dinosaurs made?",
      answer: "Scientists study fossils, particularly the structure of dinosaur throats and nasal passages. They also use computer models to simulate sounds based on these anatomical features."
    },
    {
      question: "Why work from home is not as fun as we thought it would be?",
      answer: "Working from home can blur the boundaries between personal and professional life. The lack of social interaction, possible distractions, and difficulties in separating work space from living space can affect the experience."
    },
    {
      question: "In what way did human beings started using words?",
      answer: "Language evolution is believed to be a gradual process that developed over thousands of years, starting with simple vocalizations and gestures that became increasingly complex and symbolic over time."
    },
    {
      question: "Who is the best developer/team in the world",
      answer: "This is subjective and depends on many factors, including specific technologies, project requirements, and metrics used to evaluate performance. Many teams excel in different areas of development."
    }
  ];

  return (
    <section id="faq" className="bg-akcess-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center animate-fade-in">Frequently Asked Questions</h2>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-800">
              <AccordionTrigger className="py-4 text-left hover:text-akcess-yellow">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
