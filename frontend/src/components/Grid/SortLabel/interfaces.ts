import { ReactNode } from "react";

export interface SortLabelProps {
	onSort?: (parameters: { direction?: 'asc' | 'desc' | null, keepOther?: boolean }) => void
	children?: ReactNode
	direction?: 'asc' | 'desc'
}