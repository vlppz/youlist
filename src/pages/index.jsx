import Head from 'next/head'
import { useEffect } from 'react'
import { Input, ButtonSubmit } from '../Components'
import { PrismaClient } from '@prisma/client'
import requestIp from 'request-ip'

const prisma = new PrismaClient();

export default function Home() {
  
  useEffect(() => {
    window.location.href = "/login";
  }, [])

  return (
    <main>
      <Head>
        <title>Youlist</title>
        <meta name="description" content="Watch youtube videos together" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='w-screen h-screen flex items-center justify-center'>
        
      </div>
    </main>
  )
}
