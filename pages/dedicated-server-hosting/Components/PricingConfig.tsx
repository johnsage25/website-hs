import { Button, Container, Group, SegmentedControl, Text } from '@mantine/core'
import React from 'react'
import { PricingTable } from '../../cloud-hosting/Widgets/PricingTable'

type Props = {}

const PricingConfig = (props: Props) => {
  return (
    <section>
      <Container size={'lg'}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-28 lg:pb-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Dedicated Servers at a Great Price
            </h2>
            <p className="text-base text-gray-700 md:text-lg mb-6">
              High-performance bare metal at an unbeatable price, with 100%
              resource allocation for maximum efficiency.
            </p>

            <SegmentedControl
              className="border-2 border-dodger-blue-500 border-solid shadow-lg bg-white"
              radius={'xl'}
              color="#0069ff"
              onChange={(e) => {}}
              data={[
                { label: 'Standard', value: 'standard' },
                { label: 'Shared CPU', value: 'a' },
                { label: 'High Memory', value: 'q' },
              ]}
            />
          </div>

          <PricingTable
            data={[
              {
                ram: '2GB',
                cpu: '1 vCore',
                storage: '10 GB',
                networkIn: '10 Gbps',
                networkOut: '10 Gbps',
                productId: '3003030',
                price: 30,
              },
              {
                ram: '4GB',
                cpu: '2 vCores',
                storage: '80 GB',
                networkIn: '10 Gbps',
                productId: '3003030',
                networkOut: '10 Gbps',
                price: 30,
              },
              {
                ram: '4GB',
                cpu: '3 vCores',
                storage: '80 GB',
                networkIn: '10 Gbps',
                productId: '3003030',
                networkOut: '10 Gbps',
                price: 30,
              },
              {
                ram: '6GB',
                cpu: '4 vCores',
                storage: '80 GB',
                networkIn: '10 Gbps',
                productId: '3003030',
                networkOut: '10 Gbps',
                price: 30,
              },
              {
                ram: '2GB',
                cpu: '2 vCores',
                storage: '80 GB',
                networkIn: '10 Gbps',
                productId: '3003030',
                networkOut: '10 Gbps',
                price: 30,
              },
              {
                ram: '2GB',
                cpu: '2 vCores',
                storage: '80 GB',
                networkIn: '10 Gbps',
                productId: '3003030',
                networkOut: '10 Gbps',
                price: 30,
              },
              {
                ram: '2GB',
                cpu: '2 vCores',
                storage: '80 GB',
                networkIn: '10 Gbps',
                productId: '3003030',
                networkOut: '10 Gbps',
                price: 30,
              },
              {
                ram: '2GB',
                cpu: '2 vCores',
                storage: '80 GB',
                networkIn: '10 Gbps',
                productId: '3003030',
                networkOut: '10 Gbps',
                price: 30,
              },
              {
                ram: '2GB',
                cpu: '2 vCores',
                storage: '80 GB',
                networkIn: '10 Gbps',
                productId: '3003030',
                networkOut: '10 Gbps',
                price: 30,
              },
            ]}
          />

          <Group position="center" py={10} mt={20}>
            <Button
              radius={'xl'}
              size="md"
              className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white  border-gray-200 hover:bg-gray-100 hover:text-dodger-blue-700  focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              More Pricing
            </Button>
          </Group>
        </div>
      </Container>
    </section>
  )
}

export default PricingConfig
