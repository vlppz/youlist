import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Input, ButtonSubmit } from '../Components'
import { toast, ToastContainer } from 'react-toastify'
import { Zoom } from 'react-toastify'
import { useRouter } from 'next/router'
import "react-toastify/dist/ReactToastify.css"

export default function Register() {
  const [pass, setPass] = useState("");
  const { query } = useRouter();

  useEffect(() => {
    if (query.error !== undefined) {
      toast.error(query.error, { position: "bottom-center", autoClose: 3000, closeOnClick: true, draggable: true, pauseOnHover: false, theme: "light" });
    }
  }, [query])

  function handlePassChange(event) {
    setPass(event.target.value);
  }

  function handlePassRetypeChange(event) {
    if (pass === event.target.value) {
      event.target.classList.remove('border-red-300')
      event.target.classList.remove('hover:border-red-500')
      event.target.classList.remove('focus:border-red-500')

      event.target.classList.add('border-teal-400')
      event.target.classList.add('hover:border-teal-600')
      event.target.classList.add('focus:border-teal-600')
    } else {
      event.target.classList.remove('border-teal-400')
      event.target.classList.remove('hover:border-teal-600')
      event.target.classList.remove('focus:border-teal-600')

      event.target.classList.add('border-red-300')
      event.target.classList.add('hover:border-red-500')
      event.target.classList.add('focus:border-red-500')
    }
  }

  function handleSubmit(event) {
    if (pass !== event.target[3].value) {
      event.preventDefault();
      toast.error('Passwords don\'t match!', { position: "bottom-center", autoClose: 3000, closeOnClick: true, draggable: true, pauseOnHover: false, theme: "light" });
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
      <div className='w-screen h-screen flex items-center justify-center'>
        <form action='/api/reg' method='post' className='flex items-center flex-col' onSubmit={handleSubmit}>
          <h1 className='text-4xl font-light mb-2'>Register: </h1>
          <Input type="text" name="username" className="mb-1" placeholder="Username" required={true} />
          <Input type="email" name="email" className="mb-4" placeholder="Email" required={true} />
          <Input type="password" name="password" className="mb-1" placeholder="Password" onChange={handlePassChange} required={true} />
          <Input type="password" name="password2" className="mb-5 border-red-300 hover:border-red-500 focus:border-red-500" placeholder="Retype password" onChange={handlePassRetypeChange} required={true} />
          <ButtonSubmit text="Register" />
        </form>
      </div>

      <ToastContainer position="bottom-center" theme="light" transition={Zoom} />
    </main>
  )
}
