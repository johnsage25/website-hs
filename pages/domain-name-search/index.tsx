import React, { ComponentType } from 'react'
import { withTheme } from '../Layout/HocFront'
import Head from 'next/head'
import SearchBar from './Component/SearchBar'
import DomainFeatures from './Component/DomainFeatures'
import { NextPage } from 'next'
import { featuredTldTable } from '../../node/featuredTldTable'
import { ServerSideProps } from '../../types/ServerInterface'
import { AppProps } from 'next/app'
import Section2 from './Component/Section2'
import Section3 from './Component/Section3'
import Section4 from './Component/Section4'
import FaqBlock from './Component/FaqBlock'


const Index = (props: any) => {

  return (
    <>
      <Head>
        <title>Domain Name Search</title>
      </Head>
      <SearchBar  />
      <DomainFeatures {...props} />
      <Section2/>
      <Section3/>
      <Section4/>
      <FaqBlock/>
    </>
  )
}

export default withTheme(Index)

export async function getServerSideProps({
  req,
  res,
}: ServerSideProps) {

  let tldfeatures = await featuredTldTable(req, res);
  let PICKER_BUCKET_URI = process.env.PICKER_BUCKET_URI
  return {
    props: {
      PICKER_BUCKET_URI,
      tldfeatures
    },
  }
}
