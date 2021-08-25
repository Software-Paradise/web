import React from 'react';

/* Lazy import */
const SignInView = React.lazy(() => import('./SignIn.view'));
const SignUpView = React.lazy(() => import('./SignUp.view'));

export { SignInView, SignUpView };
