import { FC } from 'react';

import ArrowDownward from '@mui/icons-material/ArrowDownward';
import ArrowUpward from '@mui/icons-material/ArrowUpward';
import { ISortingIcons } from './interfaces';

const SortingIcons: FC<ISortingIcons> = ({ direction }) => (
	direction === 'asc'
		? <ArrowUpward style={{ fontSize: '18px' }} data-testid="upward-icon" />
		: <ArrowDownward style={{ fontSize: '18px' }} data-testid="downward-icon" />
);

export default SortingIcons