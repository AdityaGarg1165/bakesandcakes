import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link'
import {collection, getFirestore} from 'firebase/firestore'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import {app} from './firebase'
import { useEffect } from 'react'
const Mugs = ({updateT}) => {
  const db = getFirestore(app)
  const tshirts = []
  const coll = collection(db,"mugs")
  const [data] = useCollectionData(coll)
  useEffect(()=>{
    updateT("topload")
    
  },[])
  

    return(
        <div>
            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap space-x-6 -m-4">
    {data && data.map((item)=>(
      <div id='conar'  key={item.id}>
        
      <Link href={`product/${item.name}`}><div className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg cursor-pointer">
        <a className="block relative  rounded overflow-hidden">
          <img id="cimag" alt="ecommerce" className="object-cover object-center w-full h-full block" src={item.photourl}></img>
        </a>
        <div className="mt-4">
          {/* <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3> */}
          <h2 className="text-gray-900 title-font text-lg font-medium ctex">{item.name}</h2>
          <p className="mt-1 hidden pric">₹{item.price}</p>
          <p className="mt-1 hidden pric">pineapple cake with dry fruit made with fresh butter and no palm oil prepared hygenically.</p>
        </div>
        {/* <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">Hoodies</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{item.name}</h2>
          <p className="mt-1">₹{item.price}</p>
          <p className="mt-1">S, M, L, XL, XXL</p>
        </div> */}
      </div>
      </Link>
      </div>
      ))}
    </div>
  </div>
  </section>
  </div>
  )
}
export default Mugs