import React from 'react'
import {styles} from '../styles'
import { motion } from 'framer-motion'
import TrailerCanvas from './canvas/Trailer'

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
        <TrailerCanvas />
        <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white-100 flex justify-center items-start p-2">
            <motion.div animate={{y: [0, 24, 0]}} transition={{duration: 1.5, repeat: Infinity, repeatType: 'loop' }} className="w-3 h-3 rounded-full bg-primary mb-1"/>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Home