import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  className?: string;
  clickable?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Card = ({ className, clickable = false, onClick, children }: CardProps) => {
  const baseClasses = 'bg-white rounded-xl shadow-sm overflow-hidden';
  const clickableClasses = clickable ? 
    'cursor-pointer hover:shadow-md transition-shadow duration-200' : '';

  return (
    <div 
      className={cn(baseClasses, clickableClasses, className)} 
      onClick={clickable ? onClick : undefined}
    >
      {children}
    </div>
  );
};

interface CardImageProps {
  src: string;
  alt: string;
  className?: string;
}

const CardImage = ({ src, alt, className }: CardImageProps) => (
  <div className={cn('relative w-full overflow-hidden', className)}>
    <img 
      src={src} 
      alt={alt} 
      className="w-full h-full object-cover" 
    />
  </div>
);

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent = ({ className, children }: CardContentProps) => (
  <div className={cn('p-4', className)}>
    {children}
  </div>
);

interface CardTitleProps {
  className?: string;
  children: React.ReactNode;
}

const CardTitle = ({ className, children }: CardTitleProps) => (
  <h3 className={cn('text-lg font-semibold text-gray-900', className)}>
    {children}
  </h3>
);

interface CardDescriptionProps {
  className?: string;
  children: React.ReactNode;
}

const CardDescription = ({ className, children }: CardDescriptionProps) => (
  <p className={cn('text-sm text-gray-600', className)}>
    {children}
  </p>
);

Card.Image = CardImage;
Card.Content = CardContent;
Card.Title = CardTitle;
Card.Description = CardDescription;

export default Card;