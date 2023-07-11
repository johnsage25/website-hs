import { Button, Container } from '@mantine/core'
import React from 'react'

type Props = {}

function Section3({}: Props) {
  return (
    <section className=" bg-whisper-300">
      <Container size={'xl'}>
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className=" text-gray-800 font-bold">
              Ready to get started or have questions?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl sm:text-xl sm:leading-relaxed">
              We&apos;re here 24/7/365 to help you get the best hosting for your
              needs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button
                component="a"
                size='md'
                radius={'xl'}
                className=" border-dodger-blue-600 bg-dodger-blue-500 px-12 py-3"
                href="/get-started"
              >
                Get Started
              </Button>
              <Button
                component="a"
                size='md'
                radius={'xl'}
                className=" border-dodger-blue-600 text-dodger-blue-600 hover:bg-dodger-blue-600 hover:text-white"
                href="/about"
              >
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Section3
