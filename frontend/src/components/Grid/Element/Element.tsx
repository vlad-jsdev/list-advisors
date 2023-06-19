import { FC, useEffect, useState } from "react";
import { Grid, Table, TableFilterRow, TableHeaderRow } from "@devexpress/dx-react-grid-material-ui"
import Paper from '@mui/material/Paper';
import { FilteringState, IntegratedFiltering, IntegratedSorting, SortingState } from "@devexpress/dx-react-grid";

import { ADVISORS_HEADER } from "./headersGrid";
import SortLabel from "../SortLabel/SortLabel";
import './style.css'
import { TData, TMainHeader } from "./types";

const Element: FC = () => {
	const [columns] = useState<TMainHeader[]>(ADVISORS_HEADER);
	const [rows, setRows] = useState<TData[]>([]);

	useEffect(() => {
		fetch('http://localhost:8080/advisors/getlistAll').then((response) => response.json()).then((data) => setRows(data))
	}, [])

	return (
		<Paper className="grid" data-testid="table">
			<Grid
				rows={rows}
				columns={columns}
			>
				<FilteringState
					defaultFilters={[]}
					columnExtensions={
						[
							{ columnName: 'name', filteringEnabled: false },
							{ columnName: 'reviews', filteringEnabled: false },
						]
					}
				/>
				<IntegratedFiltering />
				<SortingState />
				<IntegratedSorting />
				<Table />
				<TableHeaderRow
					showSortingControls
					sortLabelComponent={SortLabel}
				/>
				<TableFilterRow />
			</Grid>
		</Paper>
	)
}

export default Element