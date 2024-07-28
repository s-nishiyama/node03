import type { Users } from ".";

export const users: Users[] = [...new Array(10)].map((_, i) => {
	const id = `00${i + 1}`.slice(-3);
	return {
		id,
		name: `hogefuga ${id}`,
		email: `hogefuga${id}@example.com`,
	};
});
