import { Button, Container, Image } from '@mantine/core'
import React from 'react'
import sectionImage from "../../../public/img/18559731_devices20.png"


type Props = {}

const WordpressTransfer = (props: Props) => {
  return (

    <section className="py-14 bg-white" id='migration'>
      <Container size={'lg'}>
        <div className="max-w-screen-xl mx-auto md:px-8">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
            <div className="flex-1 rounded-lg bg-slate-100 p-4 sm:hidden lg:block order-last rounded-lg p-4">
              <img src={sectionImage.src} className="md:max-w-lg  h-96  sm:rounded-lg" alt="" />
            </div>
            <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">

              <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                Have a WordPress site? Migrate it to us for free!
              </p>
              <p className="mt-3 text-gray-600">
              Easily migrate any WordPress or Php websites to Hostspacing with no downtime using our free automatic migration plugin. No technical knowledge is required.
              </p>

            </div>
          </div>
        </div>
      </Container>
    </section>


  )
}

export default WordpressTransfer
