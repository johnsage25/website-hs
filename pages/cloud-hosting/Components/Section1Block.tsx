import {
  Button,
  Container,
  Image,
  Paper,
  Tabs,
  Text,
  ThemeIcon,
} from '@mantine/core'
import React from 'react'
import sectionImage from '../../../public/img/help-dsk.svg'

type Props = {}

const Section1Block = (props: Props) => {
  return (
    <section className=" py-16 bg-zinc-50">
      <Container size={'xl'}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-80 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <img
                alt=""
                src={sectionImage.src}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                We&lsquo;re Always Here to Help...
              </h2>
              <Text size={18} className="mt-4 text-gray-600">
                Need some help? Our dedicated team of hosting experts is
                standing by, ready to help via Live Chat. Whether you’re just
                starting out or there’s an issue that needs fixing, we’re here
                for all your Shared Hosting needs.
              </Text>
            </div>
          </div>
        </div>


      </Container>
    </section>
  )
}

export default Section1Block
