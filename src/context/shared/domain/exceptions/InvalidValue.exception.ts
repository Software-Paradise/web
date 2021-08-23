import { ErrorType } from '../entities';

export default class InvalidValueException<T> extends Error {
	readonly attributes: ErrorType;

	constructor(value: T, validValues: T[]) {
		super();

		this.name = 'InvalidValueException';
		this.message = `The current value "${value}" does not match the available values [${validValues.map(
			vv => vv
		)}]`;

		this.attributes = {
			type: this.name,
			message: this.message,
			args: { value, validValues },
		};
	}
}
