import React from 'react';
import { render } from '@testing-library/react';
import SortLabel from './SortLabel';
import { ColumnChooser } from '@devexpress/dx-react-grid';

describe('SortLabel', () => {
  it('matches the snapshot with the correct props', () => {
    const onSort = jest.fn();
    const children = <span>Sort By Name</span>;
    const direction = 'asc';

    const { asFragment } = render(
      <SortLabel onSort={onSort} direction={direction} column={ColumnChooser} align={''} disabled={false} getMessage={function (messageKey: string): string {
        throw new Error('Function not implemented.');
      } }>
        {children}
      </SortLabel>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
