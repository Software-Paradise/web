import { InvalidValueException } from '../exceptions';
import { EqualsTo, ToString, IsValidValue } from './interfaces';

export abstract class EnumValue<T> implements ToString, EqualsTo<EnumValue<T>>, IsValidValue<T> {
	readonly value: T;
	readonly validValues: T[];

	constructor(value: T, validValues: T[]) {
		this.validValues = validValues;

		if (!this.isValidValue(value)) throw new InvalidValueException(value, validValues);

		this.value = value;
	}

	isValidValue(value: T): boolean {
		return this.validValues.includes(value);
	}

	equalsTo(other: EnumValue<T>): boolean {
		return this.value === other.value;
	}

	toString(): string {
		return `${this.value}`;
	}
}
