import React from 'react';
import { ContactForm } from '../components/ContactForm';
import { Mail, Phone, Clock, MapPin } from 'lucide-react';
export function ContactPage() {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-200">
              Ready to clarify your finance content? Let's discuss how I can
              help.
            </p>
          </div>
        </div>
      </section>
      {/* Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-bold text-[#1a365d] mb-6">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#e6f0ff] p-2 rounded-full mr-4">
                      <Mail className="text-[#1a365d]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Email</h3>
                      <a href="mailto:breckgrill434@gmail.com" className="text-[#1a365d] hover:text-[#ffc940] transition-colors">
                        breckgrill434@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#e6f0ff] p-2 rounded-full mr-4">
                      <Phone className="text-[#1a365d]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Phone</h3>
                      <a href="tel:2067504766" className="text-[#1a365d] hover:text-[#ffc940] transition-colors">
                        (206) 750-4766
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#e6f0ff] p-2 rounded-full mr-4">
                      <Clock className="text-[#1a365d]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">
                        Working Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday: 9AM - 5PM EST
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-[#e6f0ff] p-2 rounded-full mr-4">
                      <MapPin className="text-[#1a365d]" size={20} />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Location</h3>
                      <p className="text-gray-600">
                        Working remotely from Florida, USA
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-[#1a365d] mb-4">
                  Follow Me
                </h2>
                <p className="text-gray-600 mb-4">
                  Connect with me on professional networks for updates and
                  insights.
                </p>
                <div className="flex space-x-4">
                  <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="bg-[#e6f0ff] p-3 rounded-full text-[#1a365d] hover:bg-[#1a365d] hover:text-white transition-colors" aria-label="LinkedIn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-[#1a365d] mb-6">
                  Send Me a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                What types of financial content do you write?
              </h3>
              <p className="text-gray-700">
                I specialize in a range of financial content including long-form
                articles, consumer explainers, listicles, how-to guides,
                newsletters, and blog posts on topics like personal finance,
                investing, debt management, and more.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                What is your turnaround time?
              </h3>
              <p className="text-gray-700">
                Turnaround time depends on the scope and complexity of the
                project. Typically, shorter pieces (under 1,000 words) take 2-3
                business days, while longer articles may take 5-7 business days.
                Rush services are available upon request.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                Do you offer revisions?
              </h3>
              <p className="text-gray-700">
                Yes, all projects include up to two rounds of revisions to
                ensure you're completely satisfied with the final content.
                Additional revisions can be arranged as needed.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                How do you handle research for complex financial topics?
              </h3>
              <p className="text-gray-700">
                I conduct thorough research using reputable sources, industry
                publications, and verified data. For specialized topics, I may
                consult with subject matter experts to ensure accuracy while
                maintaining accessibility.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                What is your pricing structure?
              </h3>
              <p className="text-gray-700">
                Pricing varies based on the project scope, complexity, research
                required, and turnaround time. I offer both per-word and
                project-based pricing. Contact me for a custom quote tailored to
                your specific needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
}