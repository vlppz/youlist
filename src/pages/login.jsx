import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Input, ButtonSubmit, Spinner } from '../Components';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
    const { query } = useRouter();
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        if (query.success !== undefined) {
            toast.success(query.success, {
                position: 'bottom-center',
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                pauseOnHover: false,
                theme: 'light',
            });
        }

        if (query.error !== undefined) {
            toast.error(query.error, {
                position: 'bottom-center',
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                pauseOnHover: false,
                theme: 'light',
            });
        }
    }, [query]);

    function handleSubmit() {
        setSubmitted(true);
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
                <form
                    action="/api/login"
                    method="post"
                    className="flex flex-col items-center"
                    onSubmit={handleSubmit}
                >
                    <h1 className="mb-2 text-4xl font-light dark:text-white">Login: </h1>
                    <Input
                        type="text"
                        name="username"
                        className="mb-5"
                        placeholder="Username"
                        required={true}
                    />
                    <Input
                        type="password"
                        name="password"
                        className="mb-2"
                        placeholder="Password"
                        required={true}
                    />
                    <Link
                        href="/signup"
                        className="mb-5 text-blue-500 transition-all duration-300 ease-in-out hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500"
                    >
                        I don&apos;t have an account
                    </Link>
                    <ButtonSubmit
                        text={
                            submitted ? (
                                <div className="flex items-center">
                                    <Spinner className="mr-2 h-5 w-5 border-2 border-t-white dark:border-t-black" />
                                    <span>Please wait...</span>
                                </div>
                            ) : (
                                <span>Login</span>
                            )
                        }
                        disabled={submitted}
                    />
                </form>
            </div>
            <ToastContainer position="bottom-center" theme="light" transition={Zoom} />
        </main>
    );
}
