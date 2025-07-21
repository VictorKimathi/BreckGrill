import React from 'react';
import { Button } from '../components/Button';
import { CheckIcon, FileTextIcon, BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
export function AboutPage() {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About Breck Grill</h1>
            <p className="text-xl text-gray-200">
              Finance writer passionate about making complex topics accessible
              to everyone.
            </p>
          </div>
        </div>
      </section>
      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Photo */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="Breck Grill" className="w-full rounded-lg shadow-md" />
                <div className="mt-8">
                  <Button to="/contact" variant="secondary" className="w-full mb-4">
                    Contact Me
                  </Button>
                  <Button to="/resume" variant="outline" className="w-full">
                    Download Resume
                  </Button>
                </div>
              </div>
            </div>
            {/* Right Column - Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#1a365d] mb-6">
                My Journey
              </h2>
              <p className="text-gray-700 mb-6">
                My career in finance writing began as a Content Assistant, where
                I developed a passion for transforming complex financial topics
                into clear, engaging content that everyday readers can
                understand and apply to their lives.
              </p>
              <p className="text-gray-700 mb-6">
                Over the years, I've honed my ability to research thoroughly,
                write clearly, and optimize content for both search engines and
                human readers. I've worked with various financial publications
                and brands, helping them connect with their audiences through
                accessible, informative content on topics ranging from budgeting
                and credit scores to cryptocurrency and retirement planning.
              </p>
              <p className="text-gray-700 mb-10">
                Today, as a freelance finance writer, I collaborate with
                financial brands, publications, and financial advisors to create
                content that educates, engages, and empowers readers to make
                better financial decisions.
              </p>
              <h2 className="text-3xl font-bold text-[#1a365d] mb-6">
                My Approach
              </h2>
              <p className="text-gray-700 mb-6">
                I believe that financial literacy shouldn't be gatekept by
                jargon and complexity. My process begins with thorough research,
                ensuring I fully understand the topic and can explain it in
                simple terms without sacrificing accuracy.
              </p>
              <p className="text-gray-700 mb-6">
                When writing, I focus on creating a narrative that connects with
                the reader's real-world needs and questions. I collaborate
                closely with editors and brands to ensure the content aligns
                with their voice while maintaining clarity and engagement.
              </p>
              <p className="text-gray-700 mb-10">
                Every piece I write undergoes rigorous fact-checking and
                optimization for both SEO and readability, ensuring it reaches
                and resonates with the intended audience.
              </p>
              <h2 className="text-3xl font-bold text-[#1a365d] mb-6">
                Skills & Expertise
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="flex items-start">
                  <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={20} />
                  <span className="text-gray-700">
                    Feature writing & content strategy
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={20} />
                  <span className="text-gray-700">
                    Personal finance journalism
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={20} />
                  <span className="text-gray-700">
                    CMS platforms (WordPress, proprietary)
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={20} />
                  <span className="text-gray-700">AP Style & SEO writing</span>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={20} />
                  <span className="text-gray-700">
                    Budgeting & credit literacy
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={20} />
                  <span className="text-gray-700">
                    Google Docs & collaborative editing
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="text-[#ffc940] mr-2 mt-1" size={20} />
                  <span className="text-gray-700">
                    Data interpretation and sourcing
                  </span>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-10">
                <div className="flex items-start mb-8">
                  <div className="bg-[#e6f0ff] p-3 rounded-full mr-4">
                    <GraduationCapIcon className="text-[#1a365d]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a365d]">
                      Education
                    </h3>
                    <p className="text-gray-700">
                      Associate of Arts in Business
                    </p>
                    <p className="text-gray-700">
                      Indian River State College (June 2017, 3.8 GPA)
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#e6f0ff] p-3 rounded-full mr-4">
                    <BriefcaseIcon className="text-[#1a365d]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1a365d]">
                      Experience
                    </h3>
                    <p className="text-gray-700">
                      Freelance Finance Writer (Current)
                    </p>
                    <p className="text-gray-700">
                      Content Assistant at Financial Publications (Previous)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
}