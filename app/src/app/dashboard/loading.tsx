const Loading = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				height: "100vh",
			}}
		>
			<img src="/spinner.gif" alt="Loading..." />
		</div>
	);
};

export default Loading;
