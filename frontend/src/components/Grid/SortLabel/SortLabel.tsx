import Button from '@mui/material/Button';

import SortingIcon from "../SortingIcons/SortingIcons";
import { ComponentType, isValidElement, MouseEvent } from 'react';
import { TableHeaderRow } from '@devexpress/dx-react-grid';

const SortLabel: ComponentType<TableHeaderRow.SortLabelProps> = ({ onSort, children, direction }) => {
	const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (isValidElement(children) && children?.props?.children === 'Reviews' && onSort) {
			onSort({ direction: direction === 'asc' ? 'desc' : 'asc' });
		}
	};
	return (
		<Button size="small" variant="contained" onClick={handleClick}>
			{children}
			{(direction && <SortingIcon direction={direction} />)}
		</Button>

	);
}

export default SortLabel