import Head from 'next/head'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  async function fetchLogin() {
    var resp = await axios.get("/api/checkLogin");
    
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
        window.location.href = "/login";
      } else {
        setLoaded(true)
      }
      
    });
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
        {loaded ?
        <h1 className='dark:text-white text-5xl font-bold'>Hello</h1>
        :
        <h1 className="dark:text-white text-5xl">Loading...</h1>
        }
      </div>
    </main>
  )
}
