# Fabric UX React Components Testing Demo

This project demonstrates how to effectively test React-wrapped Fabric UX web components using Jest and React Testing Library. It showcases a practical approach to mocking Fabric components for unit testing.

## Overview

The project uses a FilterPill component from the Fabric UX library (`@fabric-msft/fabric-react`) as an example. It demonstrates:

- Mocking Fabric components for testing
- Setting up Jest with TypeScript
- Writing comprehensive unit tests
- Testing component interactions and state changes

## Project Structure
src/
├── mocks/
│ └── fabric-components.tsx # Mocked Fabric components
├── components/
│ └── FilterPill/
│ ├── FilterPill.test.tsx # Component tests
│ ├── FilterPillDemo.tsx # Demo component
│ └── FilterPillDemo.test.tsx # Demo component tests
└── setupTests.ts # Test setup configuration

## Setup

1. Install dependencies:
```bash
npm install
```

2. Run tests:
```bash
npm test
```

## Testing Strategy

### Component Mocking

The project demonstrates how to mock Fabric components by creating simplified versions that maintain the same API but are easier to test. See `src/__mocks__/fabric-components.tsx` for the implementation.

Example mock:

```typescript
export const FilterPill: React.FC<FilterPillProps> = ({
  shape = 'rounded',
  size = 'medium',
  disabled = false,
  children,
  onClick,
  selected = false,
  appearance = 'primary'}) => {
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
```
### Test Coverage

The tests cover:
- Default prop rendering
- Event handling
- Component states (disabled, selected)
- Visual variations (shape, size, appearance)
- Child component rendering
- State management
- User interactions

## Key Files

- `jest.config.js`: Jest configuration including module mapping
- `src/__mocks__/fabric-components.tsx`: Mocked components
- `src/components/FilterPill/FilterPill.test.tsx`: Component unit tests
- `src/setupTests.ts`: Test environment setup

## Technologies Used

- React 18
- TypeScript
- Jest
- React Testing Library
- @fabric-msft/fabric-react
- Vite

## Best Practices Demonstrated

1. **Component Mocking**: Simplified mock components that maintain the same API
2. **Data Attributes**: Using data-* attributes for testing
3. **Test Organization**: Clear test structure and descriptions
4. **Comprehensive Coverage**: Testing all component variations and states
5. **Type Safety**: Full TypeScript support in tests

## Running the Demo

To see the components in action:

```bash
npm run dev
```

Visit `http://localhost:5173` to view the demo.

## Contributing

Feel free to submit issues and enhancement requests.

## License

[MIT License](LICENSE)