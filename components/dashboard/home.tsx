import React from 'react'
import Image from 'next/image'
import { RotatingCircle } from '../ui/rotating-circle'
import { Button } from '../ui/button'
import { DownloadIcon } from '@radix-ui/react-icons'

export const Home = () => {
  return (
    <div id='home' className='h-screen w-3/4 m-auto pb-20 grid grid-cols-2'>
      <RotatingCircle />
      <section className='flex justify-center items-center m-4'>
        <Image  className='rounded-full ' src="/developer-pic-1.png" alt='me' width={600} height={600} />
      </section>
      <section className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-6xl m-4 text-left'>Turning Vison Into Reality With Code And Design</h1>
        <p className='text-2xl m-4 text-muted-foreground '>As a skilled full-stack developer, I am dedicated to turning ideas into innovation web application. Explore my latest projects and articles, showcasing my expertise in Nextjs and web development.</p>
        <Button size={'lg'}>Resume<DownloadIcon/></Button>
      </section>
      
    </div>
  )
}
