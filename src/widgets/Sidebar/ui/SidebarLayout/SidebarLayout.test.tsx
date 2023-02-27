import { fireEvent, screen } from '@testing-library/react';
import { SidebarLayout } from 'widgets/Sidebar';
import {
  componentRender,
} from 'shared/config/tests/componentRender/componentRender';

describe('SidebarLayout', () => {
  test('Test SidebarLayout', () => {
    componentRender(<SidebarLayout />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test SidebarLayout collapsed', () => {
    componentRender(<SidebarLayout />);
    const btn = screen.getByTestId('collapse-btn');
    fireEvent.click(btn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(btn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
