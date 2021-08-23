import { EqualsTo, ToString } from './interfaces';

export abstract class StringValue implements ToString, EqualsTo<StringValue> {
	readonly value: string;

	constructor(value: string) {
		this.value = value;
	}

	equalsTo(other: StringValue): boolean {
		return this.value.toLowerCase() === other.value.toLowerCase();
	}

	toString(): string {
		return this.value;
	}
}
