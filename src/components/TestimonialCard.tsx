import React from 'react';
import { Quote } from 'lucide-react';
interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
}
export function TestimonialCard({
  quote,
  author,
  position
}: TestimonialCardProps) {
  return <div className="bg-white p-6 rounded-lg shadow-md">
      <Quote className="text-[#ffc940] mb-4" size={32} />
      <p className="text-gray-700 italic mb-6">{quote}</p>
      <div>
        <h4 className="font-bold text-[#1a365d]">{author}</h4>
        <p className="text-gray-500 text-sm">{position}</p>
      </div>
    </div>;
}