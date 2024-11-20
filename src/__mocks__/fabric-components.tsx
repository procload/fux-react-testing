import React from 'react';

interface FilterPillProps {
  shape?: 'circular' | 'rounded' | 'square';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  appearance?: 'primary' | 'outline' | 'subtle' | 'transparent';
}

export const FilterPill: React.FC<FilterPillProps> = ({ 
  shape = 'rounded', 
  size = 'medium', 
  disabled = false, 
  children, 
  onClick,
  selected = false,
  appearance = 'primary'
}) => {
  return (
    <div 
      data-testid="mock-filter-pill"
      onClick={disabled ? undefined : onClick}
      data-shape={shape}
      data-size={size}
      data-disabled={disabled}
      data-selected={selected}
      data-appearance={appearance}
    >
      {children}
    </div>
  );
};