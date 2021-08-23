import React from 'react';
import { IRoute } from 'library/models';
import { PathRoutes } from 'library/components';

/* Import views */
/* import { _View } from './views'; */

/* Load routes */
export const ROUTES: IRoute[] = [
	{
		name: 'SignIn',
		path: '/sign-in',
		component: null,
		exact: true,
	},
	{
		name: 'SignUp',
		path: '/sign-up',
		component: null,
		exact: true,
	},
];

/**
 * Module Authentication
 * @returns Module to perform authentication
 */
const AuthenticationModule: React.FunctionComponent = () => {
	return <PathRoutes routes={ROUTES} />;
};

export default React.memo(AuthenticationModule);
