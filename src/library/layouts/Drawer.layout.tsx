import React from 'react';
import { BreakPoint, Position } from 'library/models';
import { classNames } from 'library/utilities';
import { useWindowDimensions } from 'library/hooks';
import { ModalLayout } from '.';

/* Map the position parent flex direction */
const POSITION_PARENT_MAP: Record<Position, string> = {
	[Position.TOP]: 'drawer-layout--top',
	[Position.RIGHT]: 'drawer-layout--right',
	[Position.BOTTOM]: 'drawer-layout--bottom',
	[Position.LEFT]: 'drawer-layout--left',
	[Position.CENTER]: '',
};

/* Prop definition */
type Props = {
	className?: string;
	isDrawer: boolean;
	onClose: VoidFunction;
	position?: Position;
	breakPoint?: BreakPoint;
	drawer?: any;
	children?: any;
};

/**
 * Custom layout to print a drawer content
 * @param className - style to be applied on 'div' wrapper
 * @param isDrawer - is current drawer open?
 * @param onClose - to close the current drawer when click on overlay
 * @param position - current position to print the drawer content
 * @param breakPoint - to change between the 'side push' and 'modal'
 * @param drawer - to print as drawer content
 * @param children - nested jsx
 * @returns Layout with drawer content support
 */
const DrawerLayout: React.FunctionComponent<Props> = ({
	className,
	isDrawer = false,
	onClose,
	position = Position.LEFT,
	breakPoint = BreakPoint.MD,
	drawer,
	children,
}) => {
	const { isUnderBreakPoint } = useWindowDimensions();

	return (
		<>
			<div className={classNames('drawer-layout', POSITION_PARENT_MAP[position], className)}>
				{isDrawer && !isUnderBreakPoint(breakPoint) && (
					<div className="drawer-layout__side">{drawer}</div>
				)}

				<div className="drawer-layout__content">{children}</div>
			</div>

			<ModalLayout
				isModal={isDrawer && isUnderBreakPoint(breakPoint)}
				position={position}
				onClose={onClose}>
				{drawer}
			</ModalLayout>
		</>
	);
};

export default React.memo(DrawerLayout);
