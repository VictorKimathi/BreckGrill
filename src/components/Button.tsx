import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  href?: string;
  to?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  to,
  onClick,
  type = 'button'
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md';
  const variantStyles = {
    primary: 'bg-[#1a365d] text-white hover:bg-[#0f2b4a] focus:ring-2 focus:ring-offset-2 focus:ring-[#1a365d]',
    secondary: 'bg-[#ffc940] text-[#1a365d] hover:bg-[#ffbd1f] focus:ring-2 focus:ring-offset-2 focus:ring-[#ffc940]',
    outline: 'border border-[#1a365d] text-[#1a365d] hover:bg-[#f0f7ff] focus:ring-2 focus:ring-offset-2 focus:ring-[#1a365d]'
  };
  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  };
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  if (href) {
    return <a href={href} className={styles} onClick={onClick}>
        {children}
      </a>;
  }
  if (to) {
    return <Link to={to} className={styles} onClick={onClick}>
        {children}
      </Link>;
  }
  return <button type={type} className={styles} onClick={onClick}>
      {children}
    </button>;
}