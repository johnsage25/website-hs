import { Button, Container, Image, Tabs, Text } from '@mantine/core'
import React, { useState } from 'react'
import picImage from '../../../public/img/vps-server.svg'

type Props = {}

const Section2 = (props: Props) => {
  const [activeTab, setActiveTab] = useState<string | null>('1')
  return (
    <section className="pb-16">
      <Container size={'lg'}>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                alt="Party"
                src={picImage.src}
                // className="absolute inset-0 h-full w-full object-contain"
              />
            </div>
            <div className="lg:py-24">
              <h2 className="text-3xl font-bold sm:text-4xl">
                Full adaptability and simple management
              </h2>
              <Text size={17} className="mt-4 text-gray-700">
                Several popular Linux and Windows operating systems are
                available, including Windows Server 2022. Total control over
                your VPS is ensured via root access.
              </Text>
              <Text size={17} className="mt-4 text-gray-700">
                Modify any file, add server-wide programs, and completely tailor
                your server to your project&#39;s requirements. You may easily and
                securely administer your server with the Plesk Obsidian
                administration tool.
              </Text>
            </div>
          </div>
        </div>

      </Container>
    </section>
  )
}

export default Section2
