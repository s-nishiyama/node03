"use client";
import { useRouter } from "next/navigation";

const Fuga: React.FC = () => {
	const router = useRouter();
	const onClickHandler = () => {
		router.push("fuga/piyopiyo?page=200");
	};

	return (
		<div>
			app-fuga
			<button type="button" onClick={onClickHandler}>
				メタ
			</button>
			<a href="fuga/hogera?page=300">hogera</a>
		</div>
	);
};

export default Fuga;
