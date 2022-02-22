import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Body from '../components/Body'
import { Container } from '@nextui-org/react'

export default function Home() {
  return (
    <div className='w-full h-full bg-background-default bg-center bg-cover bg-no-repeat flex flex-row items-center justify-center'>
      <div  className='w-full h-screen backdrop-blur-xl flex items-center justify-around'>
        <Navbar />
        <Body />
      </div>
    </div>
  )
}
