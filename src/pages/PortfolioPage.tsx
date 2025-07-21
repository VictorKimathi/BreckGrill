import React, { useState } from 'react';
import { ProjectCard } from '../components/ProjectCard';
import { FilterIcon } from 'lucide-react';
export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const portfolioProjects = [{
    id: '1',
    title: 'Understanding IRAs: A Complete Guide',
    description: 'A comprehensive guide to Individual Retirement Accounts, breaking down complex retirement options into accessible steps.',
    client: 'For Stacked Wallet',
    category: 'Retirement',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    id: '2',
    title: 'Student Loan Forgiveness Programs',
    description: 'Detailed analysis of available student loan forgiveness programs and qualification requirements.',
    client: 'Finance Education Platform',
    category: 'Debt Management',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    id: '3',
    title: 'Cryptocurrency for Beginners',
    description: 'An accessible introduction to cryptocurrency concepts, investments, and market trends for newcomers.',
    client: 'Crypto News Blog',
    category: 'Investing',
    image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    id: '4',
    title: 'How to Improve Your Credit Score',
    description: 'Actionable strategies to build and maintain a strong credit score, with step-by-step guidance.',
    client: 'Credit Education Website',
    category: 'Credit',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    id: '5',
    title: 'The Ultimate Guide to Emergency Funds',
    description: 'Everything you need to know about building and maintaining an emergency fund that works for your situation.',
    client: 'Personal Finance Blog',
    category: 'Budgeting',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    id: '6',
    title: 'Understanding Insurance Policies',
    description: 'A breakdown of different insurance types and how to choose the right coverage for your needs.',
    client: 'Insurance Comparison Site',
    category: 'Insurance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    id: '7',
    title: '10 Steps to Financial Independence',
    description: 'A roadmap for achieving financial freedom with practical steps anyone can follow.',
    client: 'Financial Wellness Newsletter',
    category: 'Budgeting',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    id: '8',
    title: 'NFTs Explained: Beyond the Hype',
    description: 'A clear explanation of non-fungible tokens, their uses, risks, and potential future in the digital economy.',
    client: 'Tech & Finance Publication',
    category: 'Investing',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }, {
    id: '9',
    title: 'How to Create a Monthly Budget That Works',
    description: 'Practical budgeting methods and tools to help readers take control of their finances.',
    client: 'Personal Finance App',
    category: 'Budgeting',
    image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
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