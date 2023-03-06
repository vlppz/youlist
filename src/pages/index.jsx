import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Button, Link, Input, ButtonSubmit, YtVid } from '../Components';
import { deleteCookie } from 'cookies-next';

export default function Home() {
    const [loaded, setLoaded] = useState(false);
    const [user, setUser] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [vid_id, setVid_id] = useState('');

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

    function handleSubmit(event) {
        event.preventDefault();

        var link = event.target[0].value;

        if (link.includes('youtu.be')) {
            setVid_id(link.substring(link.lastIndexOf('/'), link.length));
        } else if (link.includes('youtube.com/watch?v=')) {
            if (link.includes('&')) {
                var tmp = link.substring(link.indexOf('=') + 1, link.length);
                setVid_id(tmp.substring(0, tmp.indexOf('&')));
            } else {
                setVid_id(link.substring(link.indexOf('=') + 1, link.length));
            }
        }
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
                        <nav className="fixed top-0 left-0 flex w-screen items-center justify-between p-5 backdrop-blur-md">
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

                        <div className="mt-44 flex flex-col items-center justify-center">
                            <h1 className="mb-10 text-5xl font-bold dark:text-white">
                                Hello, {user}
                            </h1>
                            <form
                                className="flex flex-col items-center justify-center"
                                onSubmit={handleSubmit}
                            >
                                <Input
                                    className="mb-5"
                                    placeholder="Link to youtube video"
                                />
                                <ButtonSubmit text="Open!" />
                            </form>
                            <YtVid
                                id={vid_id}
                                width="1006"
                                height="566"
                                className="mt-12"
                            />
                        </div>
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
