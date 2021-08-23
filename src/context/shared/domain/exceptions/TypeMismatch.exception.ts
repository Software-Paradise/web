import { ErrorType } from '../entities';

export default class TypeMismatchException extends Error {
	readonly attributes: ErrorType;

	constructor(value: any, type: string) {
		super();

		this.name = 'TypeMismatchException';
		this.message = `The current value "${value}" does not match "${type}" type`;

		this.attributes = {
			type: this.name,
			message: this.message,
			args: { value, type },
		};
	}
}
