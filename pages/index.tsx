import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { HomeHero } from './components/Home/HomeHero'
import SectionFive from './components/Home/SectionFive'
import SectionFour from './components/Home/SectionFour'
import SectionOne from './components/Home/SectionOne'
import SectionSeven from './components/Home/SectionSeven'
import SectionSix from './components/Home/SectionSix'
import SectionThree from './components/Home/SectionThree'
import SectionTwo from './components/Home/SectionTwo'
import { withTheme } from './Layout/HocFront'
import { SectionNine } from './components/Home/SectionNine'
import ClientSection from './components/Home/ClientSection'


function Home() {
  return (
    <div>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="The cloud for developers" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=''>
        <HomeHero />
        <SectionOne />
        {/* <SectionTwo/> */}
        <SectionFour />
        <SectionThree />


        <SectionNine />
        <SectionSix />
        <SectionFive />
        {/* <SectionSeven /> */}
        {/* <ClientSection /> */}

      </div>
    </div>
  )
}

export default withTheme(Home)
