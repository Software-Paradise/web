import React from 'react';
import { Button, InputField } from 'library/components';
import { Role, Variant } from 'library/models';
import { ScrollLayout } from 'library/layouts';
import { img_logo, img_powered } from 'assets';
import { useSignIn } from '../hooks';

/**
 * Sign In View
 * @returns Authentication Module Sign In View
 */
const SignInView: React.FunctionComponent = () => {
	const { email_input, password_input, signIn } = useSignIn();

	return (
		<ScrollLayout className="sign-in-view">
			<InputField
				type="select"
				className="sign-in-view--lang"
				style={{
					zoom: 0.75,
				}}
				role={Role.SECONDARY}
				defaultValue=""
				options={[
					{ label: 'Select a language', value: '', disabled: true },
					{ label: 'English', value: 'en' },
					{ label: 'Español', value: 'es' },
				]}
			/>

			<div className="sign-in-view--content">
				<div className="sign-in-view--content--logo">
					<img src={img_logo} alt="AlyPay EL FUTURO ¡AHORA!" />
				</div>

				<h1 className="sign-in-view--content--title">Sign In</h1>

				<form onSubmit={signIn} className="sign-in-view--content--form">
					<InputField
						register={email_input.register}
						type="email"
						label="Email"
						role={Role.PRIMARY}
						errorMessage={email_input.errorMessage}
					/>

					<InputField
						register={password_input.register}
						type="password"
						label="Password"
						role={Role.PRIMARY}
						errorMessage={password_input.errorMessage}
					/>

					<hr />

					<div className="sign-in-view--content--form--actions">
						<Button type="submit" role={Role.PRIMARY}>
							Sign In
						</Button>

						<Button
							type="button"
							variant={Variant.TEXT}
							className="sign-in-view--content--form--actions--sign-up">
							Sign Up
						</Button>
					</div>
				</form>
			</div>

			<div className="sign-in-view--powered">
				<img src={img_powered} alt="Powered by AlySystem" />
			</div>
		</ScrollLayout>
	);
};

export default React.memo(SignInView);
