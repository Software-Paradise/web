import React from 'react';
import { Position } from 'library/models';
import { classNames } from 'library/utilities';
import { createPortal } from 'react-dom';

/* Map modal content position */
const POSITION_MAP: Record<Position, string> = {
	[Position.TOP]: 'modal-layout--top',
	[Position.RIGHT]: 'modal-layout--right',
	[Position.BOTTOM]: 'modal-layout--bottom',
	[Position.LEFT]: 'modal-layout--left',
	[Position.CENTER]: 'modal-layout--center',
};

/* Prop definition */
type Props = {
	className?: string;
	portal?: string;
	isModal: boolean;
	position?: Position;
	onClose?: VoidFunction;
	children?: any;
};

/**
 * Custom layout to print content as modal overlay
 * @param className - style to be applied on 'div' wrapper
 * @param portal - where be the modal mounted
 * @param isModal - is current modal open?
 * @param position - current position to print the modal content
 * @param onClose - to close the modal
 * @param children - nested jsx
 * @returns Layout with modal content support
 */
const ModalLayout: React.FunctionComponent<Props> = ({
	className,
	portal = 'modal',
	isModal = false,
	position = Position.CENTER,
	onClose,
	children,
}) => {
	return createPortal(
		<>
			{isModal && (
				<div className={classNames('modal-layout', POSITION_MAP[position], className)}>
					<div className="modal-layout__overlay" onClick={onClose}></div>

					<div className="modal-layout__content">{children}</div>
				</div>
			)}
		</>,
		document.getElementById(portal) as HTMLElement
	);
};

export default React.memo(ModalLayout);
