import React, { useEffect, useRef } from 'react';
import { Alignment, Direction } from 'library/models';
import { classNames } from 'library/utilities';

/* Map the drop direction */
const DIRECTION_MAP: Record<Direction, string> = {
	[Direction.UP]: 'drop-content--up',
	[Direction.DOWN]: 'drop-content--down',
	[Direction.LEFT]: 'drop-content--left',
	[Direction.RIGHT]: 'drop-content--right',
	[Direction.NONE]: 'drop-content--none',
};

/* Map the drop direction */
const ALIGNMENT_MAP: Record<Alignment, string> = {
	[Alignment.START]: 'drop-content--start',
	[Alignment.CENTER]: 'drop-content--center',
	[Alignment.END]: 'drop-content--end',
};

/* Prop definition */
type Props = {
	className?: string;
	content: any;
	direction?: Direction;
	alignment?: Alignment;
	isHoverable?: boolean;
	isUserInput?: boolean;
	isDropActive?: boolean;
	toggleDropActive?: VoidFunction;
	children?: any;
};

/**
 * Custom component to manage drop content
 * @param className - style to applied on 'div' wrapper
 * @param content - drop content to be show as click or hover events
 * @param direction - to drop the content
 * @param alignment - betwhen the children and the drop content
 * @param isHoverable - to show drop content when user hover
 * @param isUserInput - to show the drop content when the user hover on it
 * @param isDropActive - to show the drop content when click on children
 * @param toggleDropActive - to manage the state to show the drop content
 * @param children - nested jsx
 * @param rest - prop to be applied on div tag
 * @returns Component to manage drop content
 */
const DropComponent: React.FunctionComponent<Props & Record<string, any>> = ({
	className,
	content,
	direction = Direction.NONE,
	alignment = Alignment.CENTER,
	isHoverable = false,
	isUserInput = false,
	isDropActive = false,
	toggleDropActive,
	children,
	...rest
}) => {
	/* Component reference */
	const selfRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		let closeEsc: any;
		let closeClick: any;

		/* Add event listeners when drop content is active by external control */
		if (isDropActive && !isHoverable) {
			/* To hide drop content when keyboard Esc is pressed */
			closeEsc = (e: KeyboardEvent) => {
				if (e.key === 'Escape' && toggleDropActive) toggleDropActive();
			};
			/* Add event listener */
			window.addEventListener('keydown', closeEsc);

			/* To hide drop content when user click outside the component */
			closeClick = (e: InputEvent) => {
				if (
					selfRef.current &&
					!selfRef.current.contains(e.target as Node) &&
					toggleDropActive
				)
					toggleDropActive();
			};
			/* Add event listener */
			window.addEventListener('mousedown', closeClick, { capture: true });
		}
		return () => {
			/* Remove event listeners */
			window.removeEventListener('keydown', closeEsc);
			window.removeEventListener('mousedown', closeClick, { capture: true });
		};
	}, [isDropActive, isHoverable, toggleDropActive]);

	return (
		<div className={classNames('drop', className)} ref={selfRef} {...rest}>
			<div className="drop-children" onClick={toggleDropActive}>
				{children}
			</div>

			{(isDropActive || isHoverable) && (
				<div
					className={classNames(
						'drop-content',
						DIRECTION_MAP[direction],
						ALIGNMENT_MAP[alignment],
						isHoverable ? 'drop-content--hoverable' : '',
						isHoverable ? (isUserInput ? '' : 'drop-content--prevent') : ''
					)}>
					{content}
				</div>
			)}
		</div>
	);
};

export default React.memo(DropComponent);
