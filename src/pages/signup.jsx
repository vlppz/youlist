import Head from 'next/head';
import { useEffect, useState } from 'react';
import { Input, ButtonSubmit, Spinner } from '../Components';
import { toast, ToastContainer } from 'react-toastify';
import { Zoom } from 'react-toastify';
import { useRouter } from 'next/router';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const [pass, setPass] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const { query } = useRouter();

    useEffect(() => {
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

    function handlePassChange(event) {
        if (event.target.value != '') {
            setPass(event.target.value);

            checkPassRetype(event.target.value, document.getElementById('pass2'));
        }
    }

    function checkPassRetype(pass, target) {
        if (pass === target.value) {
            target.classList.remove(
                'border-red-300',
                'hover:border-red-500',
                'focus:border-red-500',
                'dark:border-red-500',
                'dark:hover:border-red-300',
                'dark:focus:border-red-300'
            );

            target.classList.add(
                'border-teal-400',
                'hover:border-teal-600',
                'focus:border-teal-600',
                'dark:border-teal-500',
                'dark:hover:border-teal-300',
                'dark:focus:border-teal-300'
            );
        } else {
            target.classList.remove(
                'border-teal-400',
                'hover:border-teal-600',
                'focus:border-teal-600',
                'dark:border-teal-500',
                'dark:hover:border-teal-300',
                'dark:focus:border-teal-300'
            );

            target.classList.add(
                'border-red-300',
                'hover:border-red-500',
                'focus:border-red-500',
                'dark:border-red-500',
                'dark:hover:border-red-300',
                'dark:focus:border-red-300'
            );
        }
    }

    function handlePassRetypeChange(event) {
        checkPassRetype(pass, event.target);
    }

    function handleSubmit(event) {
        if (pass !== event.target[3].value) {
            event.preventDefault();
            toast.error("Passwords don't match!", {
                position: 'bottom-center',
                autoClose: 3000,
                closeOnClick: true,
                draggable: true,
                pauseOnHover: false,
                theme: 'light',
            });
        } else {
            setSubmitted(true);
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
                <form
                    action="/api/reg"
                    method="post"
                    className="flex flex-col items-center"
                    onSubmit={handleSubmit}
                >
                    <h1 className="mb-2 text-4xl font-light dark:text-white">
                        Register:{' '}
                    </h1>
                    <Input
                        type="text"
                        name="username"
                        className="mb-1"
                        placeholder="Username"
                        required={true}
                    />
                    <Input
                        type="email"
                        name="email"
                        className="mb-4"
                        placeholder="Email"
                        required={true}
                    />
                    <Input
                        type="password"
                        name="password"
                        className="mb-1"
                        placeholder="Password"
                        onChange={handlePassChange}
                        required={true}
                    />
                    <Input
                        type="password"
                        id="pass2"
                        name="password2"
                        className="mb-5 border-red-300 hover:border-red-500 focus:border-red-500 dark:border-red-500 dark:hover:border-red-300 dark:focus:border-red-300"
                        placeholder="Retype password"
                        onChange={handlePassRetypeChange}
                        required={true}
                    />
                    <ButtonSubmit
                        text={
                            submitted ? (
                                <div className="flex items-center">
                                    <Spinner className="mr-2 h-5 w-5 border-2 border-t-white dark:border-t-black" />
                                    <span>Please wait...</span>
                                </div>
                            ) : (
                                <span>Register</span>
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
