import React from 'react';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import {
  FileTextIcon,
  BookOpenIcon,
  ListIcon,
  MailIcon,
  ClipboardCheckIcon,
} from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      title: 'Long-form Articles',
      description:
        'In-depth articles (2,000–3,000 words) covering complex personal finance topics with thorough research and clear explanations.',
      icon: <FileTextIcon size={32} />,
    },
    {
      title: 'Consumer-Facing Explainers',
      description:
        'Clear, accessible explanations of financial products like insurance, IRAs, and student loans that help readers make informed decisions.',
      icon: <BookOpenIcon size={32} />,
    },
    {
      title: 'Listicles & How-To Guides',
      description:
        'Engaging, practical guides aimed at younger audiences seeking financial independence, with actionable steps and tips.',
      icon: <ListIcon size={32} />,
    },
    {
      title: 'Newsletters & Blog Content',
      description:
        'Consistent, engaging content for finance coaches and online brands, ghostwritten to match your voice and connect with your audience.',
      icon: <MailIcon size={32} />,
    },
    {
      title: 'Content Updates & Fact-Checking',
      description:
        'Keeping your evergreen content accurate and up-to-date with the latest financial regulations, trends, and best practices.',
      icon: <ClipboardCheckIcon size={32} />,
    },
  ];

  const steps = [
    {
      step: 1,
      title: 'Initial Consultation',
      description:
        'We\'ll discuss your content needs, target audience, brand voice, and specific goals for the project.',
    },
    {
      step: 2,
      title: 'Research & Outline',
      description:
        'I\'ll conduct thorough research on your topic and create a detailed outline for your approval.',
    },
    {
      step: 3,
      title: 'Content Creation',
      description:
        'I\'ll write the content, focusing on clarity, engagement, and accuracy, tailored to your audience.',
    },
    {
      step: 4,
      title: 'Review & Revisions',
      description:
        'You\'ll review the content and request any revisions to ensure it meets your expectations.',
    },
    {
      step: 5,
      title: 'Final Delivery',
      description:
        'Once approved, I\'ll deliver the finalized content, optimized for your platform and ready to publish.',
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">My Services</h1>
            <p className="text-xl text-gray-200">
              Professional finance writing services that make complex topics
              accessible and engaging.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section (FIXED) */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">
            My Process
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-[#1a365d] transform -translate-x-1/2"></div>

            <div className="space-y-12">
              {steps.map((step, index) => {
                const isLeft = index % 2 === 0;

                return (
                  <div
                    key={step.step}
                    className="relative flex flex-col md:flex-row items-center"
                  >
                    {/* Left column (desktop only) */}
                    <div
                      className={`hidden md:block flex-1 ${
                        isLeft ? 'text-right pr-8' : 'pl-8'
                      }`}
                    >
                      {isLeft && (
                        <div>
                          <h3 className="text-xl font-bold text-[#1a365d]">
                            {step.title}
                          </h3>
                          <p className="text-gray-700 mt-2">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Step Marker */}
                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-[#ffc940] rounded-full w-10 h-10 flex items-center justify-center text-[#1a365d] font-bold z-10">
                      {step.step}
                    </div>

                    {/* Right column (desktop only) */}
                    <div
                      className={`hidden md:block flex-1 ${
                        isLeft ? 'pl-8' : 'text-left pr-8'
                      }`}
                    >
                      {!isLeft && (
                        <div>
                          <h3 className="text-xl font-bold text-[#1a365d]">
                            {step.title}
                          </h3>
                          <p className="text-gray-700 mt-2">
                            {step.description}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Mobile view (stacked) */}
                    <div className="md:hidden text-center mt-4">
                      <h3 className="text-xl font-bold text-[#1a365d]">
                        {step.title}
                      </h3>
                      <p className="text-gray-700 mt-2">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">
            Why Work With Me
          </h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Detail-Driven Approach',
                text: 'I pride myself on thorough research and attention to detail, ensuring accurate and valuable content.',
              },
              {
                title: 'Clarity & Accessibility',
                text: 'I transform complex financial concepts into clear, accessible content that resonates with your audience.',
              },
              {
                title: 'SEO Expertise',
                text: 'Content is optimized for search engines without sacrificing readability or engagement.',
              },
              {
                title: 'Deadline Focused',
                text: 'I understand the importance of timely delivery and consistently meet agreed-upon deadlines.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Let's Discuss Your Content Needs
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Ready to create finance content that engages your audience and
            drives results?
          </p>
          <Button to="/contact" variant="secondary" size="lg">
            Contact Me Today
          </Button>
        </div>
      </section>
    </div>
  );
}
