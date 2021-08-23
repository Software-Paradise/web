import { EqualsTo, GreaterThan, SmallerThan, ToString } from './interfaces';

export abstract class FloatValue
	implements ToString, EqualsTo<FloatValue>, GreaterThan<FloatValue>, SmallerThan<FloatValue>
{
	readonly value: number;

	constructor(value: number) {
		this.value = value;
	}

	smallerThan(other: FloatValue): boolean {
		return this.value < other.value;
	}

	greaterThan(other: FloatValue): boolean {
		return this.value > other.value;
	}

	equalsTo(other: FloatValue): boolean {
		return this.value === other.value;
	}

	toString(): string {
		return this.value.toString();
	}
}
