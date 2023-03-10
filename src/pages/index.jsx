import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Spinner, Button, Link, Input, ButtonSubmit, YtVid } from '../Components';
import { deleteCookie } from 'cookies-next';

export default function Home() {
    const [loaded, setLoaded] = useState(false);
    const [user, setUser] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [vid_ids, setVid_ids] = useState([]);

    async function fetchLogin() {
        var resp = await axios.post('/api/checkLogin');

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

    async function logOut() {
        setSubmitted(true);
        await axios.post('/api/logout');
        deleteCookie('token');
        window.location.href = '/';
    }

    function handleSubmit(event) {
        event.preventDefault();

        var link = event.target[0].value;
        var vid_id = '';

        if (link.includes('youtu.be')) {
            vid_id = link.substring(link.lastIndexOf('/'), link.length);
        } else if (link.includes('youtube.com/watch?v=')) {
            if (link.includes('&')) {
                var tmp = link.substring(link.indexOf('=') + 1, link.length);
                vid_id = tmp.substring(0, tmp.indexOf('&'));
            } else {
                vid_id = link.substring(link.indexOf('=') + 1, link.length);
            }
        }

        setVid_ids([...vid_ids, vid_id]);
    }

    return (
        <main>
            <Head>
                <title>Youlist</title>
                <meta name="description" content="Watch youtube videos together" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="flex h-screen justify-center">
                {loaded ? (
                    <div className="w-screen">
                        <nav className="z-10 flex w-full items-center justify-between p-5 backdrop-blur-md">
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

                        <div className="mt-10 flex flex-col items-center justify-center">
                            <h1 className="mb-10 text-5xl font-bold dark:text-white">
                                Hello, {user}
                            </h1>
                            <form
                                className="mb-5 flex flex-col items-center justify-center"
                                onSubmit={handleSubmit}
                            >
                                <Input
                                    className="mb-5"
                                    placeholder="Link to youtube video"
                                />
                                <div>
                                    <ButtonSubmit text="Add to list!" className="mr-5" />
                                    <Button text="Share!" />
                                </div>
                            </form>

                            {vid_ids.map((el, idx) => (
                                <div key={idx} className="mb-5 flex">
                                    <h1 className="mr-5 text-2xl dark:text-white">
                                        {idx + 1}.
                                    </h1>
                                    <YtVid id={el} />
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="flex h-screen items-center">
                        <Spinner className="mr-3 h-10 w-10 border-4 border-t-black dark:border-t-white" />
                        <h1 className="text-5xl dark:text-white">Please wait...</h1>
                    </div>
                )}
            </div>
        </main>
    );
}
