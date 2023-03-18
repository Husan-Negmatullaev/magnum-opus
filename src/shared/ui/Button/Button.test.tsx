import { render, screen } from '@testing-library/react';
import { Button, ButtonThemes } from './Button';

describe('Button', () => {
  test('Test Button', () => {
    render(<Button>button</Button>);
    expect(screen.getByText(/button/i)).toBeInTheDocument();
  });

  test('Test theme clear', () => {
    render(<Button theme={ButtonThemes.CLEAR}>button</Button>);
    expect(screen.getByText(/button/i)).toHaveClass('clear');
    screen.debug();
  });
});
