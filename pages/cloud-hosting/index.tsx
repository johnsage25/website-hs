import React from 'react'
import { withTheme } from '../Layout/HocFront'
import Head from 'next/head'
import HeroBlock from '../components/CloudHosting/HeroBlock'
import { Container, Header, Tabs, Text, UnstyledButton } from '@mantine/core'
import Section1 from './Components/Section1'
import Section2 from './Components/Section2'
import PricingConfig from './Components/PricingConfig'
import Features from './Components/Features'
import OsApp from './Components/OsApp'
import FaqBlock from './Components/FaqBlock'
import Section1Block from './Components/Section1Block'
import Section3 from './Components/Section3'
import { ServerSideProps } from '../../types/ServerInterface'
import { RegionList } from '../../node/RegionList'

type Props = {}

const CloudHosting = (props: Props) => {
  return (
    <>
      <Head>
        <title>Cloud Hosting</title>
      </Head>
      <main>
        <HeroBlock />
        <Section1 />
        <PricingConfig {...props} />
        <Section2 />
        <Features />
        <OsApp />
        <Section3 />
        {/* <Section1Block/> */}
        {/* <FaqBlock/> */}
      </main>
    </>
  )
}

export default withTheme(CloudHosting)

export async function getServerSideProps({
  req,
  res,
}: ServerSideProps) {
  let region = await RegionList()
  const BACKEND_HOME = process.env.BACKEND_HOME
  return {
    props: {
      region,
      BACKEND_HOME
    },
  };
}
