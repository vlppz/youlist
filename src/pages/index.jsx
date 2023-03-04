import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner } from '../Components';

export default function Home() {
	const [loaded, setLoaded] = useState(false);

	async function fetchLogin() {
		var resp = await axios.get('/api/checkLogin');

		return resp;
	}

	useEffect(() => {
		var loggedin = true;
		Promise.all([fetchLogin()]).then((res) => {
			if (res[0].data.success) {
				loggedin = true;
			} else {
				loggedin = false;
			}

			if (!loggedin) {
				window.location.href = '/login';
			} else {
				setLoaded(true);
			}
		});
	}, []);

	return (
		<main>
			<Head>
				<title>Youlist</title>
				<meta name="description" content="Watch youtube videos together" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex h-screen w-screen items-center justify-center">
				{loaded ? (
					<div>
						<h1 className="text-5xl font-bold dark:text-white">Hello</h1>
						<Spinner className="h-10 w-10 border-4 border-t-emerald-300" />
					</div>
				) : (
					<div className="flex">
						<Spinner className="mr-2 h-10 w-10 border-4 border-t-emerald-300" />
						<h1 className="text-5xl dark:text-white">Loading...</h1>
					</div>
				)}
			</div>
		</main>
	);
}
