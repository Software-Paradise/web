import { BreakPoint } from 'library/models';
import { useEffect, useState } from 'react';

/* Dimensions definition */
type Dimensions = {
	width: number;
	height: number;
};

/* BreakPoint min & max width */
type BP_WIDTH = {
	min: number;
	max: number;
};

const INFINITE = -1;

/* Map the screen breakpoint */
const BP_WIDTH_MAP: Record<BreakPoint, BP_WIDTH> = {
	[BreakPoint.XS]: { min: 0, max: 639 },
	[BreakPoint.SM]: { min: 640, max: 767 },
	[BreakPoint.MD]: { min: 768, max: 1023 },
	[BreakPoint.LG]: { min: 1024, max: 1279 },
	[BreakPoint.XL]: { min: 1280, max: 1535 },
	[BreakPoint.XXL]: { min: 1536, max: INFINITE },
};

/**
 * Custom hook to manage the current viewport breakpoints
 * @returns {Object} - practical functions to manage the current viewport breakpoints
 */
const useWindowDimensions: Function = (): {
	width: number | undefined;
	height: number | undefined;
	isInBreakPoint: Function;
	isUnderBreakPoint: Function;
	isOnBreakPoint: Function;
} => {
	const [windowDimensions, setWindowDimensions] = useState<Dimensions>();

	/**
	 * Function to veryfy if the current viewport is in the breakpoint
	 * @param breakPoint - to verify the viewport
	 * @returns {boolean}
	 */
	const isInBreakPoint = (breakPoint: BreakPoint): boolean =>
		typeof windowDimensions?.width === 'number' &&
		BP_WIDTH_MAP[breakPoint].min <= windowDimensions?.width &&
		(BP_WIDTH_MAP[breakPoint].max >= windowDimensions?.width ||
			BP_WIDTH_MAP[breakPoint].max === INFINITE);

	/**
	 * Function to veryfy if the current viewport is under the breakpoint
	 * @param breakPoint - to verify the viewport
	 * @returns {boolean}
	 */
	const isUnderBreakPoint = (breakPoint: BreakPoint): boolean =>
		typeof windowDimensions?.width === 'number' &&
		BP_WIDTH_MAP[breakPoint].min > windowDimensions?.width;

	/**
	 * Function to veryfy if the current viewport is on the breakpoint
	 * @param breakPoint - to verify the viewport
	 * @returns {boolean}
	 */
	const isOnBreakPoint = (breakPoint: BreakPoint): boolean =>
		typeof windowDimensions?.width === 'number' &&
		BP_WIDTH_MAP[breakPoint].max < windowDimensions?.width &&
		BP_WIDTH_MAP[breakPoint].max !== INFINITE;

	/* Execute on component mounting */
	useEffect(() => {
		/* get current viewport dimensions */
		const getWindowDimensions = (): Dimensions => {
			const { innerWidth, innerHeight } = window;
			return { width: innerWidth, height: innerHeight };
		};

		/* Handle the viewport resize */
		const onResize = () => setWindowDimensions(getWindowDimensions());
		onResize();

		/* Add event listener */
		window.addEventListener('resize', onResize);

		/* Clear event listener on component unmounting */
		return () => window.removeEventListener('resize', onResize);
	}, []);

	return {
		width: windowDimensions?.width,
		height: windowDimensions?.height,
		isInBreakPoint,
		isUnderBreakPoint,
		isOnBreakPoint,
	};
};

export default useWindowDimensions;
