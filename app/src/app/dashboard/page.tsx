const fetchData = async () => {
	await new Promise((resolve) => setTimeout(resolve, 1000));
	return "Data fetched";
};

const Page: React.FC = async () => {
	const data = await fetchData();
	return (
		<div>
			<p>dashboard</p>
			{/* loading.tsxはサーバー側の処理で私用されるので、クライアント側で大きな画像つかっても表示されない */}
			<img src="/100MB.png" alt="Loading..." />
		</div>
	);
};

export default Page;
