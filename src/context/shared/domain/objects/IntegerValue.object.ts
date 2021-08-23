import { EqualsTo, GreaterThan, SmallerThan, ToString } from './interfaces';
import { TypeMismatchException } from '../exceptions';

export abstract class IntegerValue
	implements
		ToString,
		EqualsTo<IntegerValue>,
		GreaterThan<IntegerValue>,
		SmallerThan<IntegerValue>
{
	readonly value: number;

	constructor(value: number) {
		if (!Number.isInteger(value)) throw new TypeMismatchException(value, 'Integer');

		this.value = value;
	}

	smallerThan(other: IntegerValue): boolean {
		return this.value < other.value;
	}

	greaterThan(other: IntegerValue): boolean {
		return this.value > other.value;
	}

	equalsTo(other: IntegerValue): boolean {
		return this.value === other.value;
	}

	toString(): string {
		return this.value.toString();
	}
}
