import React from 'react';
import { IRoute } from 'library/models';
import { Route, Redirect } from 'react-router-dom';

/* Prop definition */
type Props = {
	routes: IRoute[];
	redirect?: string;
};

/**
 * Custom component to manege routes and redirects
 * @param routes - current context routes array
 * @param redirect - when condition return false
 * @returns Routes array with redirect support
 */
const PathRoutesComponent: React.FunctionComponent<Props> = ({ routes, redirect }) => {
	return (
		<React.Fragment>
			{routes.map((route, index) => (
				<React.Fragment key={`${index}_${route.name}`}>
					{route.condition === undefined ||
					(typeof route.condition === 'function'
						? route.condition()
						: route.condition) ? (
						<Route path={route.path} component={route.component} exact={route.exact} />
					) : (
						<Route path={route.path} exact={route.exact}>
							<Redirect
								to={
									route.redirect !== undefined
										? route.redirect
										: redirect !== undefined
										? redirect
										: '/'
								}
							/>
						</Route>
					)}
				</React.Fragment>
			))}
		</React.Fragment>
	);
};

export default React.memo(PathRoutesComponent);
