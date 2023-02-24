import { fireEvent, screen } from '@testing-library/react';
import { SidebarLayout } from 'widgets/Sidebar';
import {
  renderTranslationTest,
} from 'shared/lib/renderTranslationTest/renderTranslationTest';

describe('SidebarLayout', () => {
  test('Test SidebarLayout', () => {
    renderTranslationTest(<SidebarLayout />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Test SidebarLayout collapsed', () => {
    renderTranslationTest(<SidebarLayout />);
    const btn = screen.getByTestId('collapse-btn');
    fireEvent.click(btn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(btn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
