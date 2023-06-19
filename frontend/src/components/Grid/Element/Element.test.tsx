import React from 'react';
import { render, screen } from '@testing-library/react';
import Element from './Element';

describe('Element', () => {
  it('renders the Element component', () => {
    render(<Element />);
    const element = screen.getByTestId('table');
    expect(element).toBeInTheDocument();
  });
});