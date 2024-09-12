"use client";

import axios from "axios";

export default function Home() {
	const apiInstance = axios.create({
		baseURL: "https://dev.omniattention.com/api/v1",
		withCredentials: true,
	});

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		const email = formData.get("email");
		const password = formData.get("password");

		const response = await apiInstance
			.post("/admin/auth/login", {
				email,
				password,
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

		console.log({ response });
	};

	const fetchData = async () => {
		const response = await apiInstance.get("/admin/locations?search=grocer");
		console.log(response.data);
	};

	return (
		<div>
			<form
				action=""
				className="flex flex-col gap-4 max-w-md mx-auto items-center justify-center h-screen"
				onSubmit={handleSubmit}
			>
				<input
					type="email"
					name="email"
					className="border border-gray-300 rounded-md p-2 text-black"
				/>
				<input
					type="password"
					name="password"
					className="border border-gray-300 rounded-md p-2 text-black"
				/>
				<button type="submit" className="bg-blue-500 text-white rounded-md p-2">
					Login
				</button>

				<button
					type="button"
					onClick={fetchData}
					className="bg-blue-500 text-white rounded-md p-2"
				>
					Fetch Data
				</button>
			</form>
		</div>
	);
}
