import React from 'react';
import { render, screen } from '@testing-library/react';
import SortingIcons from './SortingIcons';

describe('SortingIcons', () => {
  it('renders the SortingIcons component with the correct direction', () => {
    render(<SortingIcons direction="asc" />);
    const upwardIcon = screen.getByTestId('upward-icon');
    expect(upwardIcon).toBeInTheDocument();

    render(<SortingIcons direction="desc" />);
    const downwardIcon = screen.getByTestId('downward-icon');
    expect(downwardIcon).toBeInTheDocument();
  });
  it('matches the snapshot with the correct direction', () => {
    const { asFragment } = render(<SortingIcons direction="asc" />);
    expect(asFragment()).toMatchSnapshot();

    const { asFragment: asFragment2 } = render(<SortingIcons direction="desc" />);
    expect(asFragment2()).toMatchSnapshot();
  });
});