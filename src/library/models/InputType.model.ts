import { UseFormRegisterReturn } from 'react-hook-form';

export type InputType = {
	register: UseFormRegisterReturn;
	errorMessage: string;
	value: any;
};
