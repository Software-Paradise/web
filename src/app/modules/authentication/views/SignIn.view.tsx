import React from 'react';
import { ScrollLayout } from 'library/layouts';
import { Link, useRouteMatch } from 'react-router-dom';

const LoginView: React.FunctionComponent = () => {
	const aux = useRouteMatch();
	console.log(aux);
	return (
		<ScrollLayout className="login-view">
			<div>CONTENT</div>
			<Link to="/auth/sign-up">To Sign Up</Link>
		</ScrollLayout>
	);
};

export default React.memo(LoginView);
