import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Button, Link } from '../Components';
import { deleteCookie } from 'cookies-next';

export default function Home() {
    const [loaded, setLoaded] = useState(false);
    const [user, setUser] = useState('');
    const [submitted, setSubmitted] = useState(false);

    async function fetchLogin() {
        var resp = await axios.get('/api/checkLogin');

        return resp;
    }

    useEffect(() => {
        var loggedin = true;
        Promise.all([fetchLogin()]).then((res) => {
            if (res[0].data.success) {
                setUser(res[0].data.user);
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

    function logOut() {
        setSubmitted(true);
        deleteCookie('token');
        window.location.href = '/';
    }

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
                        <nav className="fixed top-0 left-0 flex w-screen items-center justify-between p-5">
                            <h1 className="text-xl font-light dark:text-white">
                                Youlist
                            </h1>
                            <div>
                                <Link
                                    text="Home"
                                    active={true}
                                    onClick={() => {
                                        window.location.href = '/';
                                    }}
                                />
                            </div>
                            <Button
                                disabled={submitted}
                                text={
                                    submitted ? (
                                        <div className="flex items-center">
                                            <Spinner className="mr-2 h-5 w-5 border-2 border-t-white dark:border-t-black" />
                                            <span>Please wait...</span>
                                        </div>
                                    ) : (
                                        <span>Log out</span>
                                    )
                                }
                                onClick={logOut}
                            />
                        </nav>
                        <h1 className="text-5xl font-bold dark:text-white">
                            Hello, {user}
                        </h1>
                    </div>
                ) : (
                    <div className="flex">
                        <Spinner className="mr-3 h-10 w-10 border-4 border-t-black dark:border-t-white" />
                        <h1 className="text-5xl dark:text-white">Please wait...</h1>
                    </div>
                )}
            </div>
        </main>
    );
}
