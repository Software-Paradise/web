import React from 'react';
import { IRoute } from 'library/models';
import { PathRoutes } from 'library/components';
import { Switch } from 'react-router-dom';

/* Import views */
import { SignInView, SignUpView } from './views';

/* Path module */
export const AUTHENTICATION_PATH = '/auth';

/* Load routes */
export const ROUTES: IRoute[] = [
	{
		name: 'SignIn',
		path: '/sign-in',
		component: SignInView,
		exact: true,
	},
	{
		name: 'SignUp',
		path: '/sign-up',
		component: SignUpView,
		exact: true,
	},
];

/**
 * Module Authentication
 * @returns Module to perform authentication
 */
const AuthenticationModule: React.FunctionComponent = () => {
	return (
		<Switch>
			<PathRoutes routes={ROUTES} path={AUTHENTICATION_PATH} />
		</Switch>
	);
};

export default React.memo(AuthenticationModule);
