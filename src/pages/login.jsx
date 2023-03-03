import Head from 'next/head'
import Link from 'next/link'
import { Input, ButtonSubmit, Button } from '../Components'

export default function Login() {
  return (
    <main>
      <Head>
        <title>Youlist</title>
        <meta name="description" content="Watch youtube videos together" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-screen h-screen flex items-center justify-center'>
        <form action='/api/login' method='post' className='flex items-center flex-col'>
          <h1 className='text-4xl font-light mb-2 dark:text-white'>Login: </h1>
          <Input type="text" name="username" className="mb-5" placeholder="Username" required={true} />
          <Input type="password" name="password" className="mb-2" placeholder="Password" required={true}   />
          <Link href="/signup" className="transition-all ease-in-out duration-300 text-blue-500 hover:text-blue-700 mb-5 dark:text-blue-300 dark:hover:text-blue-500">I don&apos;t have an account</Link>
          <ButtonSubmit text="Login" />
        </form>
      </div>
    </main>
  )
}
