import React, { Suspense } from 'react';
import { Appbar, FallBack, Sidebar } from '../components';
import { BrowserRouter, Switch } from 'react-router-dom';
import { DrawerLayout } from 'library/layouts';
import { Loader } from 'library/components';
import { Role, Size } from 'library/models';
import { useActive } from 'library/hooks';

/* Prop definition */
type Props = {
	children?: any;
};

const AppLayout: React.FunctionComponent<Props> = ({ children }) => {
	const [isDrawerOpen, , closeDrawer, toggleDrawer] = useActive();

	return (
		<>
			<DrawerLayout
				className="app-layout"
				isDrawer={isDrawerOpen}
				onClose={closeDrawer}
				drawer={<Sidebar />}>
				<Appbar toggleDrawer={toggleDrawer} />

				<BrowserRouter>
					<Suspense fallback={<FallBack />}>
						<Switch>{children}</Switch>
					</Suspense>
				</BrowserRouter>
			</DrawerLayout>

			{/* Manage 'isLoading' & 'role' with global store */}
			<Loader isLoading={false} overlay={false} size={Size.XXL} role={Role.ACCENT} />
		</>
	);
};

export default React.memo(AppLayout);
