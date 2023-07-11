import React from 'react'
import { withTheme } from '../Layout/HocFront'
import Head from 'next/head'
import SectionOne from './Components/SectionOne'
import { ServerSideProps } from '../../types/ServerInterface'
import { getPackages } from '../../node/packages'
import PricingBlock from './Components/PricingBlock'
import SectionTwo from './Components/SectionTwo'
import SectionThree from './Components/SectionThree'
import Section2Block from './Components/Section2Block'
import Section1Block from './Components/Section1Block'
import FaqBlock from './Components/FaqBlock'
import HeroBlock from './Components/HeroBlock'

type Props = {}

const WordpressHosting = (props: Props) => {
  return (
    <>
      <Head>
        <title>WordPress Hosting</title>
      </Head>

      <HeroBlock />
      <PricingBlock {...props} />
      <SectionOne />
      <SectionTwo/>
      <SectionThree/>
      <Section2Block/>
      <Section1Block/>
      <FaqBlock/>
    </>
  )
}

export default withTheme(WordpressHosting)

export async function getServerSideProps({ req, res }: ServerSideProps) {
  let packages:any = await getPackages(req, res, 'wordpress-page');

  return {
    props: {
      packages,
    },
  }
}
