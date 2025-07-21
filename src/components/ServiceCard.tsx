import React from 'react';
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}
export function ServiceCard({
  title,
  description,
  icon
}: ServiceCardProps) {
  return <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-l-4 border-[#1a365d]">
      <div className="text-[#ffc940] mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#1a365d] mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
}