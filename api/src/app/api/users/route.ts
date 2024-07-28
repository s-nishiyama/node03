import { users } from "@/_mock/users";

export const GET = async () => {
	return Response.json({ users });
};
