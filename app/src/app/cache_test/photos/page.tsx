const Page = () => {
	return <></>;
};
export default Page;

async function getPhotos() {
	const photos = await fetch(
		"https://jsonplaceholder.typicode.com/photos",
	).then((res) => res.json());
	return photos;
}
