import { render, screen } from '@testing-library/react';
import { Button } from 'shared/ui/Button/Button';

describe('Button', () => {
  test('Test Button', () => {
    render(<Button>button</Button>);
    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });

  test('Test theme clear', () => {
    render(<Button>button</Button>);
    expect(screen.getByText(/button/i)).toHaveClass('clear');
    screen.debug();
  });
});
