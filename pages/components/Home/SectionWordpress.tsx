import {
    Button,
    Container,
    Group,
    Paper,
    Progress,
    SimpleGrid,
    Text,
    ThemeIcon,
    Title,
  } from '@mantine/core'
  import React from 'react'
  import { Swiper, SwiperSlide } from 'swiper/react'
  import { Mousewheel, Pagination } from 'swiper'
  import { motion, Variants, AnimatePresence } from 'framer-motion'

  // Import Swiper styles
  import 'swiper/css'
  import 'swiper/css/pagination'
  import Link from 'next/link'

  const SectionFive = () => {
    return (
      <section className=' bg-white'>
        <Container size={"xl"}>
          <div className="flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
            <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
              <div className="max-w-lg lg:mx-12 lg:order-2">
                <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                  WordPress Hosting
                </h1>
                <Text size={18} className="mt-4 text-gray-600 dark:text-gray-300">
                  With WordPress, you have complete independence. As a result, you
                  have complete control over the look and operation of your website
                  thanks to the abundance of completely customizable themes and
                  simple-to-install plugins in our HostSpacing Marketplace.
                </Text>
                {/* <div className="flex space-x-0 items-center py-2 text-lochmara-600">
                <Text fw={700} size={25}>
                  {new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: 'USD',
                  }).format(7.5)}
                </Text>
                <Text size={18}>/mo</Text>
              </div> */}
                <div className="mt-2">
                  <Button
                    href={'/dddd'}
                    radius="xl"
                    size="md"
                    uppercase
                    component={'a'}
                    className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-hscolor-500 hover:bg-hscolor-600 lg:mx-0 lg:w-auto focus:outline-none"
                  >
                    Start now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center order-first w-full h-96 lg:w-1/2">
              <img
                className="object-cover w-full h-full max-w-2xl rounded-md"
                src="./wordpress-hosting.svg"
                alt="apple watch photo"
              />
            </div>
          </div>
        </Container>

      </section>
    )
  }

  export default SectionFive
