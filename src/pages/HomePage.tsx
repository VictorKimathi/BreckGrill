import React from 'react';
import { ArrowRightIcon, FileTextIcon, PencilIcon, BarChartIcon, BookOpenIcon } from 'lucide-react';
import { Button } from '../components/Button';
import { ProjectCard } from '../components/ProjectCard';
export function HomePage() {
  const featuredProjects =  [ {
    id: '1',
    title: 'How to Build a Stable Budget on an Unpredictable Income',
    description: 'A stable budget is possible without a fixed paycheck. Freelancers, gig workers, and contractors can stay in control by setting clear limits on spending and planning around actual earnings. A baseline of essential costs, combined with a clear account system, helps prevent shortfalls when income dips.',
    category: 'Budgeting & Money Management',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    href: 'How_to_Build_a_Stable_Budget.pdf'
  }, {
    id: '2',
    title: 'Why High Earners Should Rethink Their Debt Strategy Right After a Surge',
    description: 'A spike in income changes more than the size of your bank balance. It shifts your leverage. For freelancers, consultants, and commission-based professionals, a high-earning period can temporarily strengthen your financial profile. Lenders often respond by offering better refinancing terms, lower interest rates, or faster payoff options. Overlooking this opportunity can mean missing a narrow window to reduce long-term debt costs and improve financial stability.',
    category: 'Debt Management & Strategic Spending',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    href: 'Why_High_Earners_Should_Rethink.pdf'
  }, {
    id: '3',
    title: 'The Financial Checklist Every Blended Family Should Complete in Year One',
    description: 'Blended families face money challenges that most traditional budgeting advice does not cover. When two homes come together, there are often financial ties to the past that continue to affect the present. These may include child support, spousal maintenance, shared custody costs, outstanding debts, and commitments to former partners. In many cases, both individuals bring different money habits, income levels, and expectations into the new arrangement. This makes managing household finances more complex in the first year.',
    category: 'Family Finance & Life Transitions',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    href: 'The_Financial_Checklist_Every_Blended_Family.pdf'
  }];
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#1a365d] to-[#2d5a8c] text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Breck Grill: Demystifying Finance, One Article at a Time
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Detail-driven finance writer crafting accessible, engaging, and
              real-world relevant content.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button to="/portfolio" variant="secondary" size="lg">
                View Portfolio
              </Button>
              <Button to="/contact" variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white/10">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-6">
              Making Finance Accessible
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              I'm passionate about helping people make smarter money decisions
              through clear, informative content. With experience in personal
              finance journalism and content strategy, I transform complex
              financial concepts into engaging, actionable advice that readers
              can actually use.
            </p>
            <Button to="/about" variant="outline">
              Learn More About Me <ArrowRightIcon size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
      {/* Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">
            Key Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e6f0ff] text-[#1a365d] mb-4">
                <FileTextIcon size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                Personal Finance Journalism
              </h3>
              <p className="text-gray-600">
                Creating accessible content that helps readers navigate their
                financial lives.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e6f0ff] text-[#1a365d] mb-4">
                <PencilIcon size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                Content Strategy
              </h3>
              <p className="text-gray-600">
                Developing comprehensive content plans that engage readers and
                drive results.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e6f0ff] text-[#1a365d] mb-4">
                <BarChartIcon size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                SEO & AP Style
              </h3>
              <p className="text-gray-600">
                Optimizing content for search engines while maintaining
                journalistic standards.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e6f0ff] text-[#1a365d] mb-4">
                <BookOpenIcon size={32} />
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                Debt & Investment Strategies
              </h3>
              <p className="text-gray-600">
                Breaking down complex financial products and strategies into
                actionable advice.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-3xl font-bold text-[#1a365d] mb-4 md:mb-0">
              Featured Projects
            </h2>
            <Button to="/portfolio" variant="outline">
              View All Projects <ArrowRightIcon size={16} className="ml-2" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map(project => <ProjectCard key={project.id} {...project} />)}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 bg-[#1a365d] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Clarify Your Finance Content?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let's work together to transform complex financial topics into
            engaging, accessible content that resonates with your audience.
          </p>
          <Button to="/contact" variant="secondary" size="lg">
            Let's Discuss Your Content Needs
          </Button>
        </div>
      </section>
    </div>;
}
