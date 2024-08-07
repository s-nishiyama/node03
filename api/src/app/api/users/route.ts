import { users } from "@/_mock/users";

export const GET = async () => {
	console.log("hoge");
	return Response.json({ users });
};
