import React from 'react';
import { classNames } from 'library/utilities';

/* Prop definition */
type Props = {
	className?: string;
};

const SidebarComponent: React.FunctionComponent<Props> = ({ className }) => {
	return <div className={classNames('sidebar', className)}>Sidebar</div>;
};

export default React.memo(SidebarComponent);
