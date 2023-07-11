import { Box, Button, Container, Group, SegmentedControl, Tabs, Text } from '@mantine/core'
import React from 'react'
import { PricingTable } from '../Widgets/PricingTable'
import { trpc } from '../../../utils/trpc'
import _ from 'lodash'
import CurrencyFormat from 'react-currency-format';



const PricingConfig = (props: any) => {
  const landingQuery = trpc.node.landingQuery.useQuery()
  const createVmCartMutation = trpc.node.createVmCart.useMutation()
  // console.log(landingQuery.data);

  const vmList = landingQuery.data || []
  return (
    <section>
      <Container size={'lg'}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:pt-28 lg:pb-8">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Choose your powerful SSD VPS
            </h2>
            <p className="text-base text-gray-700 md:text-lg mb-6">
              Try a new CPU-optimized plan for more vCores or save money on
              standard VPS!
            </p>

            {/* <SegmentedControl
              className="border-2 border-dodger-blue-500 border-solid shadow-lg bg-white"
              radius={'xl'}
              color="#0069ff"
              onChange={(e) => { }}
              data={[
                { label: 'Standard', value: 'standard' },
                { label: 'Shared CPU', value: 'a' },
                { label: 'High Memory', value: 'q' },
              ]}
            /> */}
          </div>

          <Tabs defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab value="gallery" >All plans</Tabs.Tab>
              <Tabs.Tab value="messages" >Shared resources</Tabs.Tab>
              <Tabs.Tab value="settings">Dedicated resources</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="gallery" pt="xs" className='pt-6'>


              <Box className=' divide-y border'>
                <Box className='grid grid-cols-7  pb-4 px-4 gap-4 py-4'>
                  <Text size={13} className=' text-gray-900 font-bold'>Plan</Text>
                  <Text size={13} className=' text-gray-900 font-bold'>
                    vCPU
                  </Text>
                  <Text size={13} className=' text-gray-900 font-bold'>Memory</Text>
                  <Text size={13} className=' text-gray-900 font-bold'>Storage</Text>
                  <Text size={13} className=' text-gray-900 font-bold'>Bandwidth</Text>
                  <Text size={13} className=' text-gray-900 font-bold'>Price</Text>
                </Box>
                {vmList?.map((item: any, key: number) => {
                  let price = item?.pricing.filter((item: any) => item.period == "m")

                  return (
                    <Box key={key} className='grid grid-cols-7 items-center  pb-4 px-4 gap-4 py-4 hover:bg-gray-100 cursor-pointer'>
                      <div className='flex justify-center flex-col'>
                        <Text fz={15} className=' font-semibold'>{item.title}</Text>
                        {/* <Text size={14} className=' text-gray-600'>{_.isEqual(item.type, "stared") ? "Shared resources" : "Dedicated resources"}</Text> */}
                      </div>
                      <div className=''>
                        <Box className='flex flex-col'>
                          <Text size={14} className=' text-gray-800 font-semibold'>{item.vcpu} vCores</Text>
                          {/* <Text size={14} className=' text-gray-600'>{item.cpuType}</Text> */}
                        </Box>
                      </div>
                      <div className='items-center'>

                        <Text size={14} className=' text-gray-800 font-semibold'>{item.memory}{item.memoryType?.toLocaleUpperCase()}</Text>
                      </div>
                      <div className=''>

                        <Text size={14} className=' text-gray-600 font-semibold'>{item.storage}{item.storageFormat?.toLocaleUpperCase()} {item.storageType}</Text>
                      </div>
                      <div className=''>

                        <Text size={14} className=' text-gray-600 font-semibold'>{item.bandwidth}{item.bandwidthType?.toLocaleUpperCase()}</Text>
                      </div>
                      <div className='flex items-center'>
                        <Group spacing={3}>
                          <Text size={17} className=' text-blue-azure-700 font-semibold'>
                            <CurrencyFormat value={price[0]?.amount} displayType={'text'} suffix=' USD' thousandSeparator={true} prefix={'$'} />
                          </Text>

                          <Text size={14}>/{price[0]?.period}</Text>
                        </Group>
                      </div>
                      <div className='flex items-center'>

                        <Button loading={createVmCartMutation.isLoading} onClick={() => {
                          createVmCartMutation.mutate({ _id: item?._id }, {
                            onSuccess(data: any, variables, context) {
                              switch (data?.status) {
                                case "continue":
                                  window.location.href = `${props.BACKEND_HOME}/instances/provision?id=${data.id}`
                                  break;

                                default:
                                  window.location.href = `${props.BACKEND_HOME}/login?redirect=${props.BACKEND_HOME}/instances/provision?id=${data.id}&return=true`
                                  break;
                              }
                              console.log(data);
                              // window.location.href = `${props.BACKEND_HOME}/instances/provision?id=${data.id}`
                            },
                            onError(error, variables, context) {
                              console.log(error);
                            },
                          })
                        }} radius={"xl"} size='sm' className=' bg-blue-azure-500' fullWidth>Configure</Button>
                      </div>
                    </Box>
                  )
                })}
              </Box>

            </Tabs.Panel>

            <Tabs.Panel value="messages" pt="xs">

            </Tabs.Panel>

            <Tabs.Panel value="settings" pt="xs">

            </Tabs.Panel>
          </Tabs>


        </div>
      </Container>
    </section>
  )
}

export default PricingConfig
