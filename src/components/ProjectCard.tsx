import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
}

export function ProjectCard({
  title,
  description,
  category,
  image,
  href,
}: ProjectCardProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="mb-2">
            <span className="inline-block bg-[#e6f0ff] text-[#1a365d] text-xs font-semibold px-2 py-1 rounded">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-[#1a365d] mb-2">{title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        </div>
      </div>
    </a>
  );
}
