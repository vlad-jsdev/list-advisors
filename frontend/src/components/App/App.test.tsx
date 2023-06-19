import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { Table } from '../Grid';

describe('App', () => {
  it('renders the App component', () => {
    render(<App />);
    const appElement = screen.getByTestId('app');
    expect(appElement).toBeInTheDocument();
  });

  it('renders the Table component', () => {
    render(<Table />);
    const tableElement = screen.getByTestId('table');
    expect(tableElement).toBeInTheDocument();
  });
});