import React from 'react';
import { Alignment, Direction, Role, Size, Variant } from 'library/models';
import { Button, Drop, InputField, Loader } from 'library/components';
import { FiAirplay, FiAlignCenter } from 'react-icons/fi';
import { ScrollLayout } from 'library/layouts';
import { useActive } from 'library/hooks';

const HomeView: React.FunctionComponent = () => {
	const [isDropActive, , , toggleDropActive] = useActive(false);

	return (
		<ScrollLayout className="home-view">
			<h1 className="font-bold text-xl text-center">Home View</h1>

			<h2 className="font-semibold text-center">Inputs</h2>
			<div className="flex flex-col m-4">
				<InputField
					role={Role.PRIMARY}
					label="PRIMARY"
					hint="PRIMARY TEXT"
					beforeIcon={<FiAirplay />}
					afterIcon={<FiAlignCenter />}
				/>

				<InputField
					role={Role.SECONDARY}
					label="SECONDARY"
					hint="SECONDARY TEXT"
					beforeIcon={<FiAirplay />}
					afterIcon={<FiAlignCenter />}
				/>

				<InputField
					role={Role.ACCENT}
					label="ACCENT"
					hint="ACCENT TEXT"
					beforeIcon={<FiAirplay />}
					afterIcon={<FiAlignCenter />}
				/>

				<InputField
					role={Role.INFO}
					label="INFO"
					hint="INFO TEXT"
					beforeIcon={<FiAirplay />}
					afterIcon={<FiAlignCenter />}
				/>

				<InputField
					role={Role.SUCCESS}
					label="SUCCESS"
					hint="SUCCESS TEXT"
					beforeIcon={<FiAirplay />}
					afterIcon={<FiAlignCenter />}
				/>

				<InputField
					role={Role.WARNING}
					label="WARNING"
					hint="WARNING TEXT"
					beforeIcon={<FiAirplay />}
					afterIcon={<FiAlignCenter />}
				/>

				<InputField
					role={Role.DANGER}
					label="DANGER"
					hint="DANGER TEXT"
					beforeIcon={<FiAirplay />}
					afterIcon={<FiAlignCenter />}
				/>

				<InputField
					role={Role.NONE}
					label="NONE"
					hint="NONE TEXT"
					beforeIcon={<FiAirplay />}
					afterIcon={<FiAlignCenter />}
				/>
			</div>

			<h2 className="font-semibold text-center">Buttons</h2>
			<div className="flex flex-col m-4">
				<div className="flex flex-row">
					<Button role={Role.PRIMARY} variant={Variant.FILL} className="flex-grow m-2">
						PRIMARY Fill
					</Button>
					<Button role={Role.PRIMARY} variant={Variant.OUTLINE} className="flex-grow m-2">
						PRIMARY Outline
					</Button>
					<Button role={Role.PRIMARY} variant={Variant.TEXT} className="flex-grow m-2">
						PRIMARY Text
					</Button>
				</div>

				<div className="flex flex-row">
					<Button role={Role.SECONDARY} variant={Variant.FILL} className="flex-grow m-2">
						SECONDARY Fill
					</Button>
					<Button
						role={Role.SECONDARY}
						variant={Variant.OUTLINE}
						className="flex-grow m-2">
						SECONDARY Outline
					</Button>
					<Button role={Role.SECONDARY} variant={Variant.TEXT} className="flex-grow m-2">
						SECONDARY Text
					</Button>
				</div>

				<div className="flex flex-row">
					<Button role={Role.ACCENT} variant={Variant.FILL} className="flex-grow m-2">
						ACCENT Fill
					</Button>
					<Button role={Role.ACCENT} variant={Variant.OUTLINE} className="flex-grow m-2">
						ACCENT Outline
					</Button>
					<Button role={Role.ACCENT} variant={Variant.TEXT} className="flex-grow m-2">
						ACCENT Text
					</Button>
				</div>

				<div className="flex flex-row">
					<Button role={Role.INFO} variant={Variant.FILL} className="flex-grow m-2">
						INFO Fill
					</Button>
					<Button role={Role.INFO} variant={Variant.OUTLINE} className="flex-grow m-2">
						INFO Outline
					</Button>
					<Button role={Role.INFO} variant={Variant.TEXT} className="flex-grow m-2">
						INFO Text
					</Button>
				</div>

				<div className="flex flex-row">
					<Button role={Role.SUCCESS} variant={Variant.FILL} className="flex-grow m-2">
						SUCCESS Fill
					</Button>
					<Button role={Role.SUCCESS} variant={Variant.OUTLINE} className="flex-grow m-2">
						SUCCESS Outline
					</Button>
					<Button role={Role.SUCCESS} variant={Variant.TEXT} className="flex-grow m-2">
						SUCCESS Text
					</Button>
				</div>

				<div className="flex flex-row">
					<Button role={Role.WARNING} variant={Variant.FILL} className="flex-grow m-2">
						WARNING Fill
					</Button>
					<Button role={Role.WARNING} variant={Variant.OUTLINE} className="flex-grow m-2">
						WARNING Outline
					</Button>
					<Button role={Role.WARNING} variant={Variant.TEXT} className="flex-grow m-2">
						WARNING Text
					</Button>
				</div>

				<div className="flex flex-row">
					<Button role={Role.DANGER} variant={Variant.FILL} className="flex-grow m-2">
						DANGER Fill
					</Button>
					<Button role={Role.DANGER} variant={Variant.OUTLINE} className="flex-grow m-2">
						DANGER Outline
					</Button>
					<Button role={Role.DANGER} variant={Variant.TEXT} className="flex-grow m-2">
						DANGER Text
					</Button>
				</div>

				<div className="flex flex-row">
					<Button role={Role.NONE} variant={Variant.FILL} className="flex-grow m-2">
						NONE Fill
					</Button>
					<Button role={Role.NONE} variant={Variant.OUTLINE} className="flex-grow m-2">
						NONE Outline
					</Button>
					<Button role={Role.NONE} variant={Variant.TEXT} className="flex-grow m-2">
						NONE Text
					</Button>
				</div>
			</div>

			<h2 className="font-semibold text-center">Drops</h2>
			<div className="flex flex-col m-4">
				<Drop
					className="mx-auto my-4"
					content={<span className="bg-blue-200">Amazing Drop content</span>}
					direction={Direction.DOWN}
					alignment={Alignment.END}
					isHoverable={false}
					isDropActive={isDropActive}
					toggleDropActive={toggleDropActive}>
					<Button variant={Variant.TEXT}>
						<FiAlignCenter className="w-28 h-28 text-gray-600 m-0.5" />
					</Button>
				</Drop>

				<Drop
					className="mx-auto my-4"
					content={
						<Drop
							className="mx-auto my-4"
							content={<span className="bg-blue-200">Amazing Drop content</span>}
							direction={Direction.RIGHT}
							alignment={Alignment.CENTER}
							isHoverable
							isUserInput>
							<Button variant={Variant.TEXT}>
								<FiAlignCenter className="w-28 h-28 text-gray-600 m-0.5" />
							</Button>
						</Drop>
					}
					direction={Direction.RIGHT}
					alignment={Alignment.CENTER}
					isHoverable
					isUserInput>
					<Button variant={Variant.TEXT}>
						<FiAlignCenter className="w-28 h-28 text-gray-600 m-0.5" />
					</Button>
				</Drop>
			</div>

			<Loader isLoading size={Size.XL} role={Role.DANGER} />
		</ScrollLayout>
	);
};

export default React.memo(HomeView);
