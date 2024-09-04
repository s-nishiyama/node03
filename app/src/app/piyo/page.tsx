type Props = {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};

const Piyo: React.FC<Props> = (props) => {
	console.log(props.searchParams); // 静的
	console.log(props.searchParams.foo); // 動的
	return <>piyo</>;
};
export default Piyo;
