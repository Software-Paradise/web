import React from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { FieldValues, UseFormRegister } from 'react-hook-form';
import { OptionType, Role } from 'library/models';
import { classNames, randomKey } from 'library/utilities';
import { useActive } from 'library/hooks';

/* Map the input role */
const ROLE_PARENT_MAP: Record<Role, string> = {
	[Role.PRIMARY]: 'input-field--primary',
	[Role.SECONDARY]: 'input-field--secondary',
	[Role.ACCENT]: 'input-field--accent',
	[Role.INFO]: 'input-field--info',
	[Role.SUCCESS]: 'input-field--success',
	[Role.WARNING]: 'input-field--warning',
	[Role.DANGER]: 'input-field--danger',
	[Role.NONE]: '',
};

/* Prop definition */
type Props = {
	className?: string;
	disabled?: boolean;
	label?: string;
	type?: 'text' | 'password' | 'select' | 'email' | 'hidden' | 'number';
	options?: OptionType[];
	id?: string;
	beforeIcon?: any;
	afterIcon?: any;
	hint?: string;
	errorMessage?: string;
	role?: Role;
	register?: UseFormRegister<FieldValues>;
};

/**
 * Custom component for inputs
 * @param className - style to be applied on 'fieldset' wrapper
 * @param disabled - to block fieldset children actions
 * @param label - to be print as input label
 * @param type - current input type
 * @param options - to be printed as select-options
 * @param id - current input id for label input relationship
 * @param beforeIcon - to be set before the input
 * @param afterIcon . to be set after the input
 * @param hint - current input description
 * @param errorMessage - current input error
 * @param role - to manage color schema
 * @param rest - prop to be applied on input tag
 * @returns Component input with support to color schema & dark mode
 */
const InputFieldComponent: React.FunctionComponent<Props & Record<string, any>> = ({
	className,
	disabled,
	label,
	type = 'text',
	options = [],
	id = randomKey(),
	beforeIcon,
	afterIcon,
	hint,
	errorMessage,
	role = Role.NONE,
	register,
	...rest
}) => {
	const [isVisible, showPassword, hidePassword] = useActive();

	return (
		<fieldset
			className={classNames(
				'input-field',
				errorMessage ? ROLE_PARENT_MAP[Role.DANGER] : ROLE_PARENT_MAP[role],
				className
			)}
			disabled={disabled}>
			{label && (
				<label className="input-field__label" htmlFor={id}>
					{label}
				</label>
			)}

			<div className="input-field__content">
				{beforeIcon && <i className="input-field__content-bi">{beforeIcon}</i>}

				{type === 'select' ? (
					<select id={id} autoComplete="off" {...rest} {...register}>
						{options.map(({ label, value, disabled }, index) => (
							<option
								key={`${id}_${index}`}
								value={value}
								disabled={disabled}
								hidden={disabled}>
								{label}
							</option>
						))}
					</select>
				) : (
					<input
						type={type === 'password' && isVisible ? 'text' : type}
						id={id}
						autoComplete="off"
						{...rest}
						{...register}
					/>
				)}

				{type === 'password' && (
					<i className="input-field__content-pass">
						{isVisible ? (
							<FiEyeOff onClick={!disabled ? hidePassword : undefined} />
						) : (
							<FiEye onClick={!disabled ? showPassword : undefined} />
						)}
					</i>
				)}

				{afterIcon && <i className="input-field__content-ai">{afterIcon}</i>}
			</div>

			{errorMessage ? (
				<span className="input-field__hint">{errorMessage}</span>
			) : (
				hint && <span className="input-field__hint">{hint}</span>
			)}
		</fieldset>
	);
};

export default React.memo(InputFieldComponent);
