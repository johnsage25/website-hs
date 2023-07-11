import React from 'react'
import { withTheme } from '../Layout/HocFront'
import Head from 'next/head'
import { GetServerSidePropsContext } from 'next'
import { getPackages } from '../../node/packages'
import { ServerSideProps } from '../../types/ServerInterface'
import FaqBlock from './Components/FaqBlock'
import HeroBlock from './Components/HeroBlock'
import PricingBlock from './Components/PricingBlock'
import WordpressTransfer from './Components/WordpressTransfer'
import FeaturesBlock from './Components/FeaturesBlock'
import Section1Block from './Components/Section1Block'
import Section2Block from './Components/Section2Block'
import HeroTab from './Widget/HeroTab'
import OverviewBlock from './Components/OverviewBlock'
import SectionBlock from './Components/SectionBlock'

const WebHosting = (props: any) => {
  return (
    <>
      <Head>
        <title>Web Hosting</title>
      </Head>
      <div>
        <HeroBlock />
        {/* <HeroTab /> */}
        <OverviewBlock />


        <SectionBlock />
        <PricingBlock {...props} />

        <WordpressTransfer />
        <FeaturesBlock />

        {/* <Section1Block /> */}
        {/* <Section2Block /> */}
        <FaqBlock />
      </div>
    </>
  )
}

export default withTheme(WebHosting)

export async function getServerSideProps({
  req,
  res,
}: ServerSideProps) {

  let packages: any = await getPackages(req, res, 'wordpress-page');

  return {
    props: {
      packages
    },
  }
}
