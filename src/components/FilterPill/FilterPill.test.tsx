// src/components/FilterPill/FilterPill.test.tsx
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FilterPill } from '@fabric-msft/fabric-react';
import userEvent from '@testing-library/user-event';

describe('FilterPill', () => {

  it('renders with default props', () => {
    render(
      <FilterPill>
        Text
      </FilterPill>
    );
    
    const pill = screen.getByTestId('mock-filter-pill');
    expect(pill).toBeInTheDocument();
    expect(pill.getAttribute('data-shape')).toBe('rounded');
    expect(pill.getAttribute('data-size')).toBe('medium');
    expect(pill.getAttribute('data-selected')).toBe('false');
    expect(pill.getAttribute('data-appearance')).toBe('primary');
    expect(pill.textContent).toBe('Text');
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    render(
      <FilterPill onClick={handleClick}>
        Clickable
      </FilterPill>
    );
    
    const pill = screen.getByTestId('mock-filter-pill');
    await userEvent.click(pill);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('respects disabled state', async () => {
    const handleClick = jest.fn();
    render(
      <FilterPill disabled onClick={handleClick}>
        Disabled
      </FilterPill>
    );
    
    const pill = screen.getByTestId('mock-filter-pill');
    await userEvent.click(pill);
    expect(handleClick).not.toHaveBeenCalled();
    expect(pill.getAttribute('data-disabled')).toBe('true');
  });

  it('renders with different shapes', () => {
    const { rerender } = render(<FilterPill shape="circular">Circular</FilterPill>);
    let pill = screen.getByTestId('mock-filter-pill');
    expect(pill.getAttribute('data-shape')).toBe('circular');

    rerender(<FilterPill shape="rounded">Rounded</FilterPill>);
    pill = screen.getByTestId('mock-filter-pill');
    expect(pill.getAttribute('data-shape')).toBe('rounded');

    rerender(<FilterPill shape="square">Square</FilterPill>);
    pill = screen.getByTestId('mock-filter-pill');
    expect(pill.getAttribute('data-shape')).toBe('square');
  });

  it('renders with different sizes', () => {
    const { rerender } = render(<FilterPill size="small">Small</FilterPill>);
    let pill = screen.getByTestId('mock-filter-pill');
    expect(pill.getAttribute('data-size')).toBe('small');

    rerender(<FilterPill size="medium">Medium</FilterPill>);
    pill = screen.getByTestId('mock-filter-pill');
    expect(pill.getAttribute('data-size')).toBe('medium');

    rerender(<FilterPill size="large">Large</FilterPill>);
    pill = screen.getByTestId('mock-filter-pill');
    expect(pill.getAttribute('data-size')).toBe('large');
  });

  it('handles selected state', () => {
    const { rerender } = render(<FilterPill selected>Selected</FilterPill>);
    let pill = screen.getByTestId('mock-filter-pill');
    expect(pill.getAttribute('data-selected')).toBe('true');

    rerender(<FilterPill selected={false}>Not Selected</FilterPill>);
    pill = screen.getByTestId('mock-filter-pill');
    expect(pill.getAttribute('data-selected')).toBe('false');
  });

  it('renders with different appearances', () => {
    const { rerender } = render(<FilterPill appearance="primary">Primary</FilterPill>);
    let pill = screen.getByTestId('mock-filter-pill');
    expect(pill.getAttribute('data-appearance')).toBe('primary');

    rerender(<FilterPill appearance="outline">Outline</FilterPill>);
    pill = screen.getByTestId('mock-filter-pill');
    expect(pill.getAttribute('data-appearance')).toBe('outline');

    rerender(<FilterPill appearance="subtle">Subtle</FilterPill>);
    pill = screen.getByTestId('mock-filter-pill');
    expect(pill.getAttribute('data-appearance')).toBe('subtle');

    rerender(<FilterPill appearance="transparent">Transparent</FilterPill>);
    pill = screen.getByTestId('mock-filter-pill');
    expect(pill.getAttribute('data-appearance')).toBe('transparent');
  });

  it('renders with children correctly', () => {
    render(
      <FilterPill>
        <span>Child 1</span>
        <span>Child 2</span>
      </FilterPill>
    );
    
    const pill = screen.getByTestId('mock-filter-pill');
    expect(pill).toHaveTextContent('Child 1Child 2');
  });

});