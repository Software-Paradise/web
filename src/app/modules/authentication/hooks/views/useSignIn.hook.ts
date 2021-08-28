import { InputType } from 'library/models';
import { useForm } from 'react-hook-form';

/* Sign In Form fields */
type SignInForm = {
	email: string;
	password: string;
};

/**
 * Authentication Module hook to manage SignIn
 * @returns {Object} Practical functions to manage SignIn
 */
const useSignIn: Function = (): {
	email_input: InputType;
	password_input: InputType;
	signIn: Function;
} => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();

	/* Form Input definitions */
	/* Email input definition */
	const email_input: InputType = {
		register: register('email', {
			required: {
				value: true,
				message: 'Email address is required',
			},
		}),
		errorMessage: errors.email ? errors.email.message : '',
		value: watch('email'),
	};
	/* Password input definition */
	const password_input: InputType = {
		register: register('password', {
			required: {
				value: true,
				message: 'password is required',
			},
		}),
		errorMessage: errors.password ? errors.password.message : '',
		value: watch('password'),
	};

	/**
	 * Function to perform the Sign In
	 */
	const signIn: Function = handleSubmit((data: SignInForm): void => {
		console.log(data);
	});

	return { /* export inputs */ email_input, password_input, /* export functions */ signIn };
};

export default useSignIn;
