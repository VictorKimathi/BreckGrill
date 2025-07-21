import React from 'react';
import { Button } from '../components/Button';
import { FileDownIcon, CheckIcon } from 'lucide-react';
export function ResumePage() {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Resume</h1>
            <p className="text-xl text-gray-200">
              Over three years of experience transforming complex finance topics
              into accessible content.
            </p>
          </div>
        </div>
      </section>
      {/* Resume Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Resume Header */}
            <div className="bg-gray-100 p-8 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-[#1a365d]">
                    Breck Grill
                  </h2>
                  <p className="text-xl text-gray-600">Finance Writer</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <Button href="/breck-grill-resume.pdf" variant="secondary" className="flex items-center">
                    <FileDownIcon size={18} className="mr-2" />
                    Download PDF
                  </Button>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700">
                    <strong>Email:</strong> breckgrill434@gmail.com
                  </p>
                  <p className="text-gray-700">
                    <strong>Phone:</strong> (206) 750-4766
                  </p>
                </div>
                <div>
                  <p className="text-gray-700">
                    <strong>Location:</strong> Florida, USA
                  </p>
                  <p className="text-gray-700">
                    <strong>LinkedIn:</strong> linkedin.com/in/breckgrill
                  </p>
                </div>
              </div>
            </div>
            {/* Resume Body */}
            <div className="p-8">
              {/* Summary */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-4">
                  Professional Summary
                </h3>
                <p className="text-gray-700">
                  Detail-driven finance writer with over three years of
                  experience creating accessible, engaging content on complex
                  financial topics. Skilled in translating technical concepts
                  into clear, actionable advice for diverse audiences.
                  Consistently meets tight deadlines while maintaining high
                  standards of accuracy and readability.
                </p>
              </div>
              {/* Experience */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-6">
                  Professional Experience
                </h3>
                <div className="mb-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-800">
                      Freelance Finance Writer
                    </h4>
                    <p className="text-gray-600">Jan 2022 - Present</p>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Creating accessible financial content for various
                    publications and brands.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                      <span className="text-gray-700">
                        Produce long-form articles (2,000-3,000 words) on
                        personal finance topics including budgeting, credit,
                        investing, and debt management.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                      <span className="text-gray-700">
                        Create consumer-facing explainers for financial products
                        like insurance, IRAs, and student loans.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                      <span className="text-gray-700">
                        Develop SEO-optimized content that consistently ranks
                        well in search results.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                      <span className="text-gray-700">
                        Ghostwrite newsletters and blog content for finance
                        coaches and online brands.
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-800">
                      Content Assistant, Financial Publication
                    </h4>
                    <p className="text-gray-600">Jun 2019 - Dec 2021</p>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Supported content creation for a leading financial education
                    platform.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                      <span className="text-gray-700">
                        Researched and fact-checked financial information for
                        articles and guides.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                      <span className="text-gray-700">
                        Drafted and edited content on personal finance topics
                        under senior writer guidance.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                      <span className="text-gray-700">
                        Optimized existing content for SEO and updated articles
                        with current information.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                      <span className="text-gray-700">
                        Managed content in CMS platforms and collaborated with
                        editorial team on content strategy.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Education */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-6">
                  Education
                </h3>
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-800">
                      Associate of Arts in Business
                    </h4>
                    <p className="text-gray-600">June 2017</p>
                  </div>
                  <p className="text-gray-700">Indian River State College</p>
                  <p className="text-gray-700">GPA: 3.8</p>
                </div>
              </div>
              {/* Skills */}
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-[#1a365d] mb-6">
                  Skills
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      Writing & Content
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                        <span className="text-gray-700">
                          Feature writing & content strategy
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                        <span className="text-gray-700">
                          Personal finance journalism
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                        <span className="text-gray-700">
                          AP Style & SEO writing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                        <span className="text-gray-700">
                          Data interpretation and sourcing
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-800 mb-3">
                      Technical & Subject Matter
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                        <span className="text-gray-700">
                          CMS platforms (WordPress, proprietary)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                        <span className="text-gray-700">
                          Budgeting & credit literacy
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                        <span className="text-gray-700">
                          Google Docs & collaborative editing
                        </span>
                      </li>
                      <li className="flex items-start">
                        <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={18} />
                        <span className="text-gray-700">
                          Investment & retirement planning concepts
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* References */}
              <div>
                <h3 className="text-2xl font-bold text-[#1a365d] mb-4">
                  References
                </h3>
                <p className="text-gray-700">
                  Professional references available upon request.
                </p>
              </div>
            </div>
          </div>
          <div className="max-w-4xl mx-auto mt-8 text-center">
            <Button href="/breck-grill-resume.pdf" variant="secondary" size="lg" className="flex items-center justify-center mx-auto">
              <FileDownIcon size={20} className="mr-2" />
              Download My Full Resume (PDF)
            </Button>
          </div>
        </div>
      </section>
    </div>;
}