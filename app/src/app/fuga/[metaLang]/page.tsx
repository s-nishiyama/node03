type Props = {
	params: { metaLang: string };
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
};

export default function Page(props: Props) {
	const { params, searchParams } = props;
	const page = typeof searchParams.page === "string" ? searchParams.page : "1";

	return (
		<div>
			<h1>メタ言語</h1>
			<h2>カテゴリ: {props.params.metaLang}</h2>
			<p>ページ番号: {page}</p>
		</div>
	);
}
