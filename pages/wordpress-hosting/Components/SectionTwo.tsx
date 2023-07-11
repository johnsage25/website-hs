import { Button, Container, Image, Text } from '@mantine/core'
import React from 'react'
import image from '../../../public/img/ds-wodpress.jpg'

type Props = {}

const SectionTwo = (props: Props) => {
  return (
    <section className=" bg-slate-100">
      <Container size={'xl'}>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative sm:h-80 lg:order-last lg:h-full">
              <Image
                alt="Party"
                src={image.src}
                fit={'cover'}
                className="absolute inset-0 h-full w-full rounded-md overflow-hidden"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                WordPress Hosting themes.
              </h2>
              <Text className="mt-4 text-gray-600">
                Choose your industry, and we&apos;ll give you a ready-made site
                with photos that you can easily customize. Alternately, use one
                of the countless third-party themes and plugins to completely
                customize it.
              </Text>
              <Button
                href="#"
                radius={'xl'}
                component='a'
                size='md'
                className="mt-8 inline-flex bg-dodger-blue-600"
              >
                <span className="text-sm font-medium"> Explore Themes </span>
                <svg
                  className="ml-3 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SectionTwo
