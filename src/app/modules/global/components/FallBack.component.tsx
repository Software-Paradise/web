import React from 'react';
import { classNames } from 'library/utilities';

/* Prop definition */
type Props = {
	className?: string;
};

const FallBackComponent: React.FunctionComponent<Props> = ({ className }) => {
	return <div className={classNames('fall-back', className)}>FallBack</div>;
};

export default React.memo(FallBackComponent);
