import { screen } from '@testing-library/react';
import { SidebarLayout } from 'widgets/Sidebar';
import {
  renderTranslationTest,
} from 'shared/lib/renderTranslationTest/renderTranslationTest';

describe('SidebarLayout', () => {
  test('Test SidebarLayout', () => {
    renderTranslationTest(<SidebarLayout />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
