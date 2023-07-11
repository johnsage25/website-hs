import { Container, Text } from '@mantine/core'
import React from 'react'
import RocketIcon from '../../components/Icons/RocketIcon'
import DataProcessingIcon from '../../components/Icons/DataProcessingIcon'
import SsdSardIcon from '../../components/Icons/SsdSardIcon'
import DdosIcon from '../../components/Icons/DdosIcon'

type Props = {}

const Section1 = (props: Props) => {
  return (
    <section className=" bg-neutral-100">
      <Container size={'lg'}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              What You Get with Your Cloud VPS Server
            </h2>
          </div>
          <div className="grid max-w-screen-lg gap-8 row-gap-10 mx-auto lg:grid-cols-2">
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-6">
                <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
                  <RocketIcon className=" w-14 h-14" />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Performance You Can Rely On
                </h6>
                <Text className="mb-3 text-gray-900">
                Improve user experience and website loading times. Use our fast CPUs and lots of RAM, as well as the discreetly positioned online cloud server systems around the world.
                </Text>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-6">
                <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
                  <DataProcessingIcon className=" w-14 h-14" />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Designed for a variety of workloads
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Utilize HTTP/3, high-performance SSD storage, and a dedicated
                  IP address to your fullest potential. Technical expertise is
                  not necessary.
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-6">
                <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
                  <SsdSardIcon className=" w-14 h-14" />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Enterprise NVMe Storage
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  All of our VPSs include highly quick enterprise NVMe storage
                  from reputable suppliers.
                </p>
              </div>
            </div>
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-6">
                <div className="flex items-center justify-center mb-4 rounded-full bg-indigo-50">
                  <DdosIcon className=" w-14 h-14" />
                </div>
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Always-On DDoS Protection
                </h6>
                <p className="mb-3 text-sm text-gray-900">
                  Automatic traffic mitigation for HostSpacing cloud VPS. Your
                  traffic stays unaffected.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Section1
