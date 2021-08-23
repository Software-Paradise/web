import React from 'react';
import { Scroll } from 'library/models';
import { classNames } from 'library/utilities';

/* Map the scroll direction */
const SCROLL_MAP: Record<Scroll, string> = {
	[Scroll.X]: 'scroll-layout__content--x',
	[Scroll.Y]: 'scroll-layout__content--y',
	[Scroll.XY]: 'scroll-layout__content--xy',
};

/* Prop definition */
type Props = {
	className?: string;
	scroll?: Scroll;
	children?: any;
};

/**
 * Custom layout to print an internal scroll control
 * @param className - style to be applied on 'div' wrapper
 * @param scroll - Scroll direction
 * @param children - nested jsx
 * @returns Layout with internal scroll control
 */
const ScrollLayout: React.FunctionComponent<Props> = ({
	className,
	scroll = Scroll.Y,
	children,
}) => {
	return (
		<div className={classNames('scroll-layout', className)}>
			<div className={classNames('scroll-layout__content', SCROLL_MAP[scroll])}>
				{children}
			</div>
		</div>
	);
};

export default React.memo(ScrollLayout);
