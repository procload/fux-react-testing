// src/pages/FilterPillDemo.tsx
import React, { useState } from 'react';
import { FilterPill } from '@fabric-msft/fabric-react';

const FilterPillDemo = () => {
  const [selectedPills, setSelectedPills] = useState<string[]>([]);
  const [lastClicked, setLastClicked] = useState<string>('');

  const handlePillClick = (pillName: string) => {
    setLastClicked(pillName);
    setSelectedPills(prev => {
      if (prev.includes(pillName)) {
        return prev.filter(name => name !== pillName);
      }
      return [...prev, pillName];
    });
  };

  const PlusIcon = () => (
    <svg
      fill="currentColor"
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.5 2.75a.75.75 0 0 0-1.5 0V9H2.75a.75.75 0 0 0 0 1.5H9v6.25a.75.75 0 0 0 1.5 0V10.5h6.25a.75.75 0 0 0 0-1.5H10.5V2.75Z" />
    </svg>
  );

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Filter Pill Demo</h1>
      
      <div className="space-y-6">
        {/* Active Pills Section */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Click to Toggle Pills</h2>
          <div className="flex flex-wrap gap-3">
            <FilterPill
              shape="circular"
              onClick={() => handlePillClick('Status')}
              selected={selectedPills.includes('Status')}
            >
              <PlusIcon />
              Status
            </FilterPill>

            <FilterPill
              shape="circular"
              onClick={() => handlePillClick('Priority')}
              selected={selectedPills.includes('Priority')}
            >
              <PlusIcon />
              Priority
            </FilterPill>

            <FilterPill
              shape="circular"
              onClick={() => handlePillClick('Category')}
              selected={selectedPills.includes('Category')}
            >
              <PlusIcon />
              Category
            </FilterPill>
          </div>
        </div>

        {/* Disabled Example */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Disabled Pills</h2>
          <div className="flex gap-3">
            <FilterPill shape="circular" disabled>
              <PlusIcon />
              Disabled Pill
            </FilterPill>
          </div>
        </div>

        {/* Different Sizes */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Different Sizes</h2>
          <div className="flex flex-wrap gap-3">
            <FilterPill shape="circular" size="small">
              <PlusIcon />
              Small
            </FilterPill>
            
            <FilterPill shape="circular" size="medium">
              <PlusIcon />
              Medium
            </FilterPill>
            
            <FilterPill shape="circular" size="large">
              <PlusIcon />
              Large
            </FilterPill>
          </div>
        </div>

        {/* Appearance Variations */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Appearance Variations</h2>
          <div className="flex flex-wrap gap-3">
            <FilterPill 
              shape="circular" 
              appearance="primary"
              onClick={() => handlePillClick('Primary')}
              selected={selectedPills.includes('Primary')}
            >
              <PlusIcon />
              Primary
            </FilterPill>
            
            <FilterPill 
              shape="circular" 
              appearance="outline"
              onClick={() => handlePillClick('Outline')}
              selected={selectedPills.includes('Outline')}
            >
              <PlusIcon />
              Outline
            </FilterPill>
            
            <FilterPill 
              shape="circular" 
              appearance="subtle"
              onClick={() => handlePillClick('Subtle')}
              selected={selectedPills.includes('Subtle')}
            >
              <PlusIcon />
              Subtle
            </FilterPill>
            
            <FilterPill 
              shape="circular" 
              appearance="transparent"
              onClick={() => handlePillClick('Transparent')}
              selected={selectedPills.includes('Transparent')}
            >
              <PlusIcon />
              Transparent
            </FilterPill>
          </div>
        </div>

        {/* Status Display */}
        <div className="mt-8 p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold mb-2">Status</h2>
          <p><strong>Selected Pills:</strong> {selectedPills.length > 0 ? selectedPills.join(', ') : 'None'}</p>
          <p><strong>Last Clicked:</strong> {lastClicked || 'None'}</p>
        </div>
      </div>
    </div>
  );
};

export default FilterPillDemo;