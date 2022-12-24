import Link from 'next/link'
import {motion} from 'framer-motion'
// import Script from 'next/script'
import { FaTshirt } from 'react-icons/fa'
import { MdOutlineDeliveryDining } from 'react-icons/md'
import { AiFillDollarCircle } from 'react-icons/ai'
// import styles from '../styles/Home.module.css'
import { app } from './firebase'
import { collection, getFirestore, limit, query } from 'firebase/firestore'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useEffect } from 'react'
import Head from 'next/head'
// import { Link } from 'react-router-dom'
export default function Home({ updateTop, time }) {
  const db = getFirestore(app)
  const recentcollection = collection(db, 'hpducts')
  const limited = query(recentcollection, limit(3))
  const [data] = useCollectionData(limited)


  return (
    <div>
      <Head>

        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Rouge+Script&display=swap" rel="stylesheet"/>
      </Head>
    <div className='courousel -z-50 justify-center'>
      <h1 className='cursive absolute md:top-40 left-28 md:w-auto md:text-7xl text-xl sm:text-3xl w-36 top-28'>Bakes and cakes by sarika</h1>
      <motion.img initial={{y:-500}} animate={{y:0}} transition={{duration:2}} src="/cour.png" className='w-full -z-50 pt-12 md:pt-0' alt="" />
    {/* <img src="/cake.png" className='-mt-96 md:ml-100 ml-109 md:w-96 w-36'  alt="" /> */}
      <button className='bg-black buy -z-50 rounded-full text-white md:h-12 h-6 w-16  absolute md:top-64 md:text-auto text-xs sm:top-56 sm:left-28 top-44 left-20 md:w-28 lg:top-80 md:left-36 z-50'>Buy Now</button>


    </div>
    <div className="cloud">
    <img src="/clouds.png" className="md:mt-2 mt-6" alt="" id='cloud1' style={{'--i':2}}/>
    <img src="/clouds.png" className="md:mt-2 mt-6" alt="" id='cloud2' style={{'--i':2}}/>
    <img src="/clouds.png" className="md:mt-2 mt-6" alt="" id='cloud3' style={{'--i':3}}/>
    <img src="/clouds.png" className="md:mt-2 mt-6" alt="" id='cloud4' style={{'--i':4}}/>
    <div  className="md:mt-2 mt-6 w-full h-96" alt="" id='coro' style={{'--i':0}}></div>

    </div>
    </div>
  )
}
