import React from 'react';
import { Button } from '../components/Button';
import { ServiceCard } from '../components/ServiceCard';
import { FileTextIcon, BookOpenIcon, ListIcon, MailIcon, ClipboardCheckIcon } from 'lucide-react';
export function ServicesPage() {
  const services = [{
    title: 'Long-form Articles',
    description: 'In-depth articles (2,000-3,000 words) covering complex personal finance topics with thorough research and clear explanations.',
    icon: <FileTextIcon size={32} />
  }, {
    title: 'Consumer-Facing Explainers',
    description: 'Clear, accessible explanations of financial products like insurance, IRAs, and student loans that help readers make informed decisions.',
    icon: <BookOpenIcon size={32} />
  }, {
    title: 'Listicles & How-To Guides',
    description: 'Engaging, practical guides aimed at younger audiences seeking financial independence, with actionable steps and tips.',
    icon: <ListIcon size={32} />
  }, {
    title: 'Newsletters & Blog Content',
    description: 'Consistent, engaging content for finance coaches and online brands, ghostwritten to match your voice and connect with your audience.',
    icon: <MailIcon size={32} />
  }, {
    title: 'Content Updates & Fact-Checking',
    description: 'Keeping your evergreen content accurate and up-to-date with the latest financial regulations, trends, and best practices.',
    icon: <ClipboardCheckIcon size={32} />
  }];
  return <div className="w-full">
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
            {services.map((service, index) => <ServiceCard key={index} {...service} />)}
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">
            My Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-[#1a365d]"></div>
              {/* Timeline items */}
              <div className="space-y-12">
                {/* Step 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-[#1a365d]">
                      Initial Consultation
                    </h3>
                    <p className="text-gray-700 mt-2">
                      We'll discuss your content needs, target audience, brand
                      voice, and specific goals for the project.
                    </p>
                  </div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-[#ffc940] rounded-full w-10 h-10 flex items-center justify-center text-[#1a365d] font-bold">
                    1
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left"></div>
                </div>
                {/* Step 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right md:hidden">
                    <h3 className="text-xl font-bold text-[#1a365d]">
                      Research & Outline
                    </h3>
                    <p className="text-gray-700 mt-2">
                      I'll conduct thorough research on your topic and create a
                      detailed outline for your approval.
                    </p>
                  </div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-[#ffc940] rounded-full w-10 h-10 flex items-center justify-center text-[#1a365d] font-bold">
                    2
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left">
                    <h3 className="text-xl font-bold text-[#1a365d]">
                      Research & Outline
                    </h3>
                    <p className="text-gray-700 mt-2">
                      I'll conduct thorough research on your topic and create a
                      detailed outline for your approval.
                    </p>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-[#1a365d]">
                      Content Creation
                    </h3>
                    <p className="text-gray-700 mt-2">
                      I'll write the content, focusing on clarity, engagement,
                      and accuracy, tailored to your audience.
                    </p>
                  </div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-[#ffc940] rounded-full w-10 h-10 flex items-center justify-center text-[#1a365d] font-bold">
                    3
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left"></div>
                </div>
                {/* Step 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right md:hidden">
                    <h3 className="text-xl font-bold text-[#1a365d]">
                      Review & Revisions
                    </h3>
                    <p className="text-gray-700 mt-2">
                      You'll review the content and request any revisions to
                      ensure it meets your expectations.
                    </p>
                  </div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-[#ffc940] rounded-full w-10 h-10 flex items-center justify-center text-[#1a365d] font-bold">
                    4
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left">
                    <h3 className="text-xl font-bold text-[#1a365d]">
                      Review & Revisions
                    </h3>
                    <p className="text-gray-700 mt-2">
                      You'll review the content and request any revisions to
                      ensure it meets your expectations.
                    </p>
                  </div>
                </div>
                {/* Step 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex-1 md:pr-8 md:text-right">
                    <h3 className="text-xl font-bold text-[#1a365d]">
                      Final Delivery
                    </h3>
                    <p className="text-gray-700 mt-2">
                      Once approved, I'll deliver the finalized content,
                      optimized for your platform and ready to publish.
                    </p>
                  </div>
                  <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 bg-[#ffc940] rounded-full w-10 h-10 flex items-center justify-center text-[#1a365d] font-bold">
                    5
                  </div>
                  <div className="flex-1 md:pl-8 md:text-left"></div>
                </div>
              </div>
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
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                Detail-Driven Approach
              </h3>
              <p className="text-gray-700">
                I pride myself on thorough research and attention to detail,
                ensuring accurate and valuable content.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                Clarity & Accessibility
              </h3>
              <p className="text-gray-700">
                I transform complex financial concepts into clear, accessible
                content that resonates with your audience.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                SEO Expertise
              </h3>
              <p className="text-gray-700">
                Content is optimized for search engines without sacrificing
                readability or engagement.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-[#1a365d] mb-3">
                Deadline Focused
              </h3>
              <p className="text-gray-700">
                I understand the importance of timely delivery and consistently
                meet agreed-upon deadlines.
              </p>
            </div>
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
    </div>;
}