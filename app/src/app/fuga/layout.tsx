type Props = {
	children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => {
	return (
		<div>
			fuga-layout
			{children}
		</div>
	);
};

export default Layout;
