import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { FilterIcon } from 'lucide-react';
export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const portfolioProjects = [ {
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
  const filters = [{
    value: 'all',
    label: 'All Projects'
  }, {
    value: 'Budgeting',
    label: 'Budgeting'
  }, {
    value: 'Investing',
    label: 'Investing'
  }, {
    value: 'Debt Management',
    label: 'Debt Management'
  }, {
    value: 'Retirement',
    label: 'Retirement'
  }, {
    value: 'Credit',
    label: 'Credit'
  }, {
    value: 'Insurance',
    label: 'Insurance'
  }];
  const filteredProjects = activeFilter === 'all' ? portfolioProjects : portfolioProjects.filter(project => project.category === activeFilter);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="bg-[#1a365d] text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">My Portfolio</h1>
            <p className="text-xl text-gray-200">
              A collection of my work making complex financial topics accessible
              and engaging.
            </p>
          </div>
        </div>
      </section>
      {/* Portfolio Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FilterIcon size={20} className="text-[#1a365d] mr-2" />
              <h2 className="text-xl font-bold text-[#1a365d]">
                Filter by Topic
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => <button key={filter.value} onClick={() => setActiveFilter(filter.value)} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter.value ? 'bg-[#1a365d] text-white' : 'bg-white text-[#1a365d] hover:bg-gray-100'}`}>
                  {filter.label}
                </button>)}
            </div>
          </div>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => <ProjectCard key={project.id} {...project} />)}
          </div>
          {/* Empty State */}
          {filteredProjects.length === 0 && <div className="text-center py-16">
              <p className="text-xl text-gray-500">
                No projects found with this filter.
              </p>
              <button onClick={() => setActiveFilter('all')} className="mt-4 text-[#1a365d] font-medium hover:text-[#ffc940]">
                View all projects
              </button>
            </div>}
        </div>
      </section>
    </div>;
}
