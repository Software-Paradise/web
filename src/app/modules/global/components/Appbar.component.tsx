import React from 'react';
import { Button } from 'library/components';
import { FiMenu } from 'react-icons/fi';
import { Role, Variant } from 'library/models';
import { classNames } from 'library/utilities';

/* Prop definition */
type Props = { className?: string; toggleDrawer: VoidFunction };

const AppbarComponent: React.FunctionComponent<Props> = ({ className, toggleDrawer }) => {
	return (
		<div className={classNames('appbar', className)}>
			<Button onClick={toggleDrawer} variant={Variant.TEXT}>
				<i className="appbar-menu">
					<FiMenu />
				</i>
			</Button>

			<div className="appbar-middle"></div>

			<div className="appbar-opts">
				<Button role={Role.PRIMARY} variant={Variant.TEXT}>
					Nav 1
				</Button>

				<Button role={Role.SECONDARY} variant={Variant.TEXT}>
					Nav 2
				</Button>

				<Button role={Role.ACCENT} variant={Variant.TEXT}>
					Nav 3
				</Button>
			</div>
		</div>
	);
};

export default React.memo(AppbarComponent);
