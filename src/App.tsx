import GlobalModule from 'app/modules/global/Global.module';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/configs/store.config';

const App: React.FunctionComponent = () => {
	return (
		<Provider store={store}>
			<GlobalModule />
		</Provider>
	);
};

export default React.memo(App);
