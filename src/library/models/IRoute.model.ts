export interface IRoute {
	name: string;
	path: string;
	exact?: boolean;
	condition?: boolean | Function;
	component: any;
	redirect?: string;
}
