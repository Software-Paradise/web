import React from 'react';
import { Role, Variant } from 'library/models';
import { classNames } from 'library/utilities';

/* Map the button role */
const ROLE_BUTTON_MAP: Record<Role, string> = {
	[Role.PRIMARY]: 'button--primary',
	[Role.SECONDARY]: 'button--secondary',
	[Role.ACCENT]: 'button--accent',
	[Role.INFO]: 'button--info',
	[Role.SUCCESS]: 'button--success',
	[Role.WARNING]: 'button--warning',
	[Role.DANGER]: 'button--danger',
	[Role.NONE]: 'button--gray',
};

/* Map the button variant */
const VARIANT_BUTTON_MAP: Record<Variant, string> = {
	[Variant.FILL]: 'button--fill',
	[Variant.OUTLINE]: 'button--outline',
	[Variant.TEXT]: 'button--text',
};

/* Prop definition */
type Props = {
	className?: string;
	disabled?: boolean;
	role?: Role;
	variant?: Variant;
	children?: any;
};

/**
 * Custom component for buttons
 * @param className - style to be applied on Button
 * @param disabled - to block the actions on button
 * @param role - current color schema
 * @param variant - current button style
 * @param children - nested jsx
 * @param rest - props to be applied on button tag
 * @returns Component button with support to color schema & dark mode
 */
const ButtonComponent: React.FunctionComponent<Props & Record<string, any>> = ({
	className,
	disabled,
	role = Role.NONE,
	variant = Variant.FILL,
	children,
	...rest
}) => {
	return (
		<button
			className={classNames(
				'button',
				ROLE_BUTTON_MAP[role],
				VARIANT_BUTTON_MAP[variant],
				className
			)}
			disabled={disabled}
			{...rest}>
			{children}
		</button>
	);
};

export default React.memo(ButtonComponent);
