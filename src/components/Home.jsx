import React from 'react'
import {styles} from '../styles'
import { motion } from 'framer-motion'

const  Home = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
        <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl flex mx-auto flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Welcome To Echo4x4</h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Design your own personal Trailer today!
          </p>
        </div>
        </div>
    </section>
  )
}

export default Home