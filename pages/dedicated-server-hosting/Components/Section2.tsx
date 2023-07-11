import { Container, Image, Text } from '@mantine/core'
import React from 'react'
import imageIsometric from '../../../public/img/working-office.svg'

type Props = {}

const Section2 = (props: Props) => {
  return (
    <section>
      <Container size={'xl'}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full">
              <Image
                alt="Party"
                src={imageIsometric.src}
                // className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Dedicated to you
              </h2>
              <Text size={18} className="mt-4 text-gray-700">
                With dedicated hosting, you will have exclusive access to an
                entire server, eliminating the possibility of resource
                competition with other users. This results in optimal
                performance for your projects, even during high workloads.
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Section2
