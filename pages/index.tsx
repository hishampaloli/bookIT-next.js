import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Homes from '../components/Home'
import Layout from '../components/layouts/Layout'
import { useSelector } from 'react-redux'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const room = useSelector((state) => state)
  console.log(room);
  
  return (
    <Layout title={'Home'}>
      <Homes />
    </Layout>
  )
}
