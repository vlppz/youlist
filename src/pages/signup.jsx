import Head from 'next/head'
import Link from 'next/link'
import { Input, ButtonSubmit } from '../Components'

export default function Home() {
  return (
    <main>
      <Head>
        <title>Youlist</title>
        <meta name="description" content="Watch youtube videos together" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-screen h-screen flex items-center justify-center'>
        <form action='/api/reg' method='post' className='flex items-center flex-col'>
          <h1 className='text-4xl font-light mb-2'>Register: </h1>
          <Input type="text" name="username" className="mb-1" placeholder="Username" />
          <Input type="email" name="email" className="mb-4" placeholder="Email" />
          <Input type="password" name="password" className="mb-1" placeholder="Password" />
          <Input type="password" name="password2" className="mb-5" placeholder="Retype password" />
          <ButtonSubmit text="Register" />
        </form>
      </div>
    </main>
  )
}
