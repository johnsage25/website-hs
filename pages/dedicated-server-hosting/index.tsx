import React from 'react'
import { withTheme } from '../Layout/HocFront'
import HeroBlock from './Components/HeroBlock'
import Section1 from './Components/Section1'
import PricingConfig from './Components/PricingConfig'
import Section2 from './Components/Section2'
import Features from './Components/Features'
import Head from 'next/head'
import Section3 from './Components/Section3'
import OsApp from './Components/OsApp'

type Props = {}

const DedicatedServerHosting = (props: Props) => {
  return (
    <>
      <Head>
        <title>Dedicated Server</title>
      </Head>

      <main>
        <HeroBlock />
        <Section1 />
        <PricingConfig />
        <Section2 />
        <Features />
        <OsApp/>
        <Section3/>
      </main>
    </>
  )
}

export default withTheme(DedicatedServerHosting)
