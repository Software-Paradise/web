import './styles/index.css';
import React from 'react';
import { AppLayout } from './layouts';
import { PathRoutes } from 'library/components';
import { RouteType } from 'library/models';

/* Import views */
import { HomeView } from './views';

/* Import module paths */
import { AUTHENTICATION_PATH } from 'app/modules/authentication/Authentication.module';

/* Import modules */
const AuthenticationModule = React.lazy(
	() => import('app/modules/authentication/Authentication.module')
);

/* Load routes */
const ROUTES: RouteType[] = [
	{
		name: 'index',
		path: '/',
		component: null,
		condition: false,
		redirect: '/home',
		exact: true,
	},
	{
		name: 'Home',
		path: '/home',
		component: HomeView,
		exact: true,
	},
	{
		name: 'AuthenticationModule',
		path: AUTHENTICATION_PATH,
		component: AuthenticationModule,
	},
];

/**
 * Module Global
 * @returns Module to print as base content
 */
const GlobalModule: React.FunctionComponent = () => {
	return (
		<AppLayout>
			<PathRoutes routes={ROUTES} />
		</AppLayout>
	);
};

export default React.memo(GlobalModule);
