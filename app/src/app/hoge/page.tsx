import { cookies } from "next/headers";
import Link from "next/link";

const Hoge: React.FC = () => {
	const cookieStore = cookies();
	console.log(cookieStore);
	return (
		<>
			app-hoge
			<Link href="/fuga">fuga</Link>
		</>
	);
};

export default Hoge;
