import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { FilterIcon } from 'lucide-react';

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const portfolioProjects = [
    {
      id: '1',
      title: 'How to Build a Stable Budget on an Unpredictable Income',
      description:
        'A stable budget is possible without a fixed paycheck. Freelancers, gig workers, and contractors can stay in control by setting clear limits on spending and planning around actual earnings...',
      category: 'Budgeting & Money Management',
      image:
        'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      href: 'How_to_Build_a_Stable_Budget.pdf',
    },
    {
      id: '2',
      title: 'Why High Earners Should Rethink Their Debt Strategy Right After a Surge',
      description:
        'A spike in income shifts your leverage. High-earning periods can offer better refinancing terms. Ignoring this opportunity may increase long-term debt costs...',
      category: 'Debt Management & Strategic Spending',
      image:
        'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      href: 'Why_High_Earners_Should_Rethink.pdf',
    },
    {
      id: '3',
      title: 'The Financial Checklist Every Blended Family Should Complete in Year One',
      description:
        'Blended families face financial complexities that traditional advice overlooks. From child support to shared custody, this guide covers essential steps in year one...',
      category: 'Family Finance & Life Transitions',
      image:
        'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
      href: 'The_Financial_Checklist_Every_Blended_Family.pdf',
    },
  ];

  const filters = [
    { value: 'all', label: 'All Projects' },
    { value: 'Budgeting', label: 'Budgeting' },
    { value: 'Investing', label: 'Investing' },
    { value: 'Debt', label: 'Debt Management' },
    { value: 'Retirement', label: 'Retirement' },
    { value: 'Credit', label: 'Credit' },
    { value: 'Insurance', label: 'Insurance' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? portfolioProjects
      : portfolioProjects.filter((project) =>
          project.category.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-[#1a365d] text-white py-20">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl font-bold mb-6">My Portfolio</h1>
          <p className="text-xl text-gray-200">
            A collection of my work making complex financial topics accessible and engaging.
          </p>
        </div>
      </section>

      {/* Portfolio */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="mb-12">
            <div className="flex items-center mb-4">
              <FilterIcon size={20} className="text-[#1a365d] mr-2" />
              <h2 className="text-xl font-bold text-[#1a365d]">Filter by Topic</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === filter.value
                      ? 'bg-[#1a365d] text-white'
                      : 'bg-white text-[#1a365d] hover:bg-gray-100'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </div>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">No projects found with this filter.</p>
              <button
                onClick={() => setActiveFilter('all')}
                className="mt-4 text-[#1a365d] font-medium hover:text-[#ffc940]"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
