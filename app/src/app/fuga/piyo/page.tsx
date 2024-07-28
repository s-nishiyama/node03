import { NextResponse } from "next/server";
import { useState } from "react";

type UserType = {
	id: number;
	name: string;
	email: string;
};

const getUsers = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users: UserType[] = await res.json();
	return users.map((user) => {
		return {
			users: {
				id: user.id,
				name: user.name,
				email: user.email,
			},
		};
	});
};

const Page: React.FC = async () => {
	const users = await getUsers();
	return (
		<div>
			<h3>piyo</h3>
			<ul>
				{users.map((user) => (
					<li key={user.users.id}>
						{user.users.name} - {user.users.email}
					</li>
				))}
			</ul>
		</div>
	);
};

export default Page;
