import Loader from 'react-loader-spinner';
import React from 'react';
import { ModalLayout } from 'library/layouts';
import { Role, Size } from 'library/models';

/* React Loader Spinner */
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { classNames } from 'library/utilities';

/* Map the loader role */
const ROLE_LOADER_MAP: Record<Role, string> = {
	[Role.PRIMARY]: '#38BDF8',
	[Role.SECONDARY]: '#2DD4BF',
	[Role.ACCENT]: '#A78BFA',
	[Role.INFO]: '#60A5FA',
	[Role.SUCCESS]: '#4ADE80',
	[Role.WARNING]: '#FBBF24',
	[Role.DANGER]: '#F87171',
	[Role.NONE]: '#A3A3A3',
};

/* Size width & height */
type SIZE_WH = {
	width: number;
	height: number;
};

/* Map the loader size */
const SIZE_LOADER_MAP: Record<Size, SIZE_WH> = {
	[Size.XS]: { width: 16, height: 16 },
	[Size.SM]: { width: 24, height: 24 },
	[Size.MD]: { width: 48, height: 48 },
	[Size.LG]: { width: 64, height: 64 },
	[Size.XL]: { width: 96, height: 96 },
	[Size.XXL]: { width: 128, height: 128 },
};

/* Prop definition */
type Props = {
	className?: string;
	overlay?: boolean;
	role?: Role;
	size?: Size;
	isLoading: boolean;
	type?:
		| 'Audio'
		| 'BallTriangle'
		| 'Bars'
		| 'Circles'
		| 'Grid'
		| 'Hearts'
		| 'Oval'
		| 'Puff'
		| 'Rings'
		| 'TailSpin'
		| 'ThreeDots'
		| 'Watch'
		| 'RevolvingDot'
		| 'Triangle'
		| 'Plane'
		| 'MutatingDots'
		| 'CradleLoader';
};

/**
 * Custom component to manage loaders
 * @param className - style to be applied on 'div' wrapper
 * @param overlay - to show as user center attention
 * @param role - current color schema
 * @param size - current loader size
 * @param isLoading - is loader show
 * @param type - current loader design
 * @returns Component loader with overlay support
 */
const LoaderComponent: React.FunctionComponent<Props> = ({
	className,
	overlay,
	role = Role.NONE,
	size = Size.MD,
	isLoading,
	type = 'Oval',
}) => {
	const loader = () => (
		<div className={classNames('loader', overlay && 'loader--overlay', className)}>
			<Loader
				type={type}
				color={ROLE_LOADER_MAP[role]}
				width={SIZE_LOADER_MAP[size].width}
				height={SIZE_LOADER_MAP[size].height}
			/>
		</div>
	);

	return (
		<>
			{overlay ? (
				<ModalLayout isModal={isLoading} portal="loader">
					{loader()}
				</ModalLayout>
			) : (
				isLoading && loader()
			)}
		</>
	);
};

export default React.memo(LoaderComponent);
