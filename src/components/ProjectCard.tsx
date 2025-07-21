import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLinkIcon } from 'lucide-react';
interface ProjectCardProps {
  id?: string;
  title: string;
  description: string;
  client: string;
  category: string;
  image: string;
  externalLink?: string;
}
export function ProjectCard({
  id,
  title,
  description,
  client,
  category,
  image,
  externalLink
}: ProjectCardProps) {
  return <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="inline-block bg-[#e6f0ff] text-[#1a365d] text-xs font-semibold px-2 py-1 rounded">
            {category}
          </span>
          <span className="text-sm text-gray-500">{client}</span>
        </div>
        <h3 className="text-xl font-bold text-[#1a365d] mb-2">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          {id && <Link to={`/portfolio/${id}`} className="text-[#1a365d] font-medium hover:text-[#ffc940] transition-colors">
              View Details
            </Link>}
          {externalLink && <a href={externalLink} target="_blank" rel="noopener noreferrer" className="text-[#1a365d] font-medium hover:text-[#ffc940] transition-colors flex items-center">
              Read Article <ExternalLinkIcon size={16} className="ml-1" />
            </a>}
        </div>
      </div>
    </div>;
}