import React from 'react';
import { Button, InputField } from 'library/components';
import { ScrollLayout } from 'library/layouts';
import { Role, Variant } from 'library/models';

const SignInView: React.FunctionComponent = () => {
	return (
		<ScrollLayout className="login-view">
			<div className="m-auto w-full max-w-xs p-2">
				<h1 className="text-center my-2">Sign In</h1>

				<form onSubmit={e => e.preventDefault()} className="my-2">
					<InputField type="email" label="Email" className="my-2" role={Role.PRIMARY} />

					<InputField
						type="password"
						label="Password"
						className="my-2"
						role={Role.PRIMARY}
					/>

					<hr className="border-primary-200 my-4" />

					<div className="my-2 grid grid-cols-2 gap-2">
						<Button type="submit" role={Role.PRIMARY}>
							Sign In
						</Button>

						<Button
							type="button"
							variant={Variant.TEXT}
							className="col-start-1 row-start-1">
							Sign Up
						</Button>
					</div>
				</form>
			</div>
		</ScrollLayout>
	);
};

export default React.memo(SignInView);
