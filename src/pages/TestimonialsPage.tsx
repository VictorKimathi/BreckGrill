import React from 'react';
import { TestimonialCard } from '../components/TestimonialCard';
export function TestimonialsPage() {
  const testimonials = [{
    quote: 'Breck has a remarkable ability to transform complex financial concepts into clear, engaging content that our readers love. His attention to detail and commitment to accuracy make him a valuable asset to our team.',
    author: 'Sarah Johnson',
    position: 'Editor at Financial Education Platform'
  }, {
    quote: 'Working with Breck has been a game-changer for our blog. His articles on personal finance consistently perform well and have helped us build trust with our audience. He always delivers quality content on time.',
    author: 'Michael Chen',
    position: 'Content Manager at Personal Finance App'
  }, {
    quote: "Breck's ability to explain complicated investment strategies in simple terms has been invaluable for our newsletter. Our subscribers frequently comment on how helpful and clear his articles are.",
    author: 'Jessica Williams',
    position: 'Finance Coach & Newsletter Publisher'
  }, {
    quote: "I've worked with many finance writers, but Breck stands out for his thorough research and ability to make dry topics interesting. He consistently delivers content that exceeds expectations.",
    author: 'David Rodriguez',
    position: 'Digital Marketing Director, Financial Services'
  }, {
    quote: "Breck's articles on cryptocurrency have helped our readers navigate this complex space with confidence. His clear explanations and balanced approach are exactly what we needed.",
    author: 'Amanda Lee',
    position: 'Editor at Crypto News Blog'
  }, {
    quote: 'The content Breck created for our website has significantly improved our user engagement metrics. His ability to write with both expertise and accessibility is rare and incredibly valuable.',
    author: 'Robert Thompson',
    position: 'CEO of Financial Literacy Startup'
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-gray-200">
              What others say about working with me on their financial content.
            </p>
          </div>
        </div>
      </section>
      {/* Testimonials Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
          </div>
        </div>
      </section>
      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Let me help you create clear, engaging financial content that
            resonates with your audience and achieves your goals.
          </p>
          <div className="flex justify-center">
            <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-[#ffc940] text-[#1a365d] font-medium rounded-md hover:bg-[#ffbd1f] transition-colors">
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>;
}