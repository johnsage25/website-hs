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

  const cardVariants: Variants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: 'spring',
        bounce: 0.4,
        duration: 0.8,
      },
    },
  }

  const SectionD = () => {
    return (
      <section className="bg-white dark:bg-gray-900 slider-pr">
        <Swiper
          direction={'vertical'}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {({ isActive }) => (
              <>
                {isActive == true ? (
                  <motion.div
                    className="card-container"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                      <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg lg:mx-12 lg:order-2">
                          <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                            Web Hosting
                          </h1>
                          <p className="mt-4 text-gray-600 dark:text-gray-300">
                            You'll experience speedier sites thanks to our most
                            recent, optimized server hardware, with an average
                            server response time improvement of around 40%.
                          </p>
                          <div className='flex space-x-0 items-center py-2 text-lochmara-600'>
                              <Text fw={700} size={25}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(7.5)}</Text>
                              <Text size={18}>/ mo</Text>
                          </div>
                          <div className="mt-2">
                            <Button
                              href={'/dddd'}
                              radius="xl" size="md" uppercase
                              component={Link}
                              className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-lochmara-400  hover:bg-lochmara-500  lg:mx-0 lg:w-auto focus:outline-none"
                            >
                              Start now
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-full  lg:w-1/2">
                        <img
                          className="object-cover w-full h-full max-w-2xl rounded-md"
                          src="./home-hostspacing-dash-vector.svg"
                          alt="apple watch photo"
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <>
                {isActive == true ? (
                  <motion.div
                    className="card-container"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                      <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg lg:mx-12 lg:order-2">
                          <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                            WordPress Hosting
                          </h1>
                          <p className="mt-4 text-gray-600 dark:text-gray-300">
                            With WordPress, you have complete independence. As a
                            result, you have complete control over the look and
                            operation of your website thanks to the abundance of
                            completely customizable themes and simple-to-install
                            plugins in our HostSpacing Marketplace.
                          </p>
                          <div className='flex space-x-0 items-center py-2 text-lochmara-600'>
                              <Text fw={700} size={25}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(7.5)}</Text>
                              <Text size={18}>/mo</Text>
                          </div>
                          <div className="mt-2">
                          <Button
                              href={'/dddd'}
                              radius="xl" size="md" uppercase
                              component={Link}
                              className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-lochmara-400  hover:bg-lochmara-500 lg:mx-0 lg:w-auto focus:outline-none"
                            >
                              Start now
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img
                          className="object-cover w-full h-full max-w-2xl rounded-md"
                          src="./wordpress-hosting.svg"
                          alt="apple watch photo"
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <>
                {isActive == true ? (
                  <motion.div
                    className="card-container"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                      <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg lg:mx-12 lg:order-2">
                          <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                            VPS Hosting
                          </h1>
                          <p className="mt-4 text-gray-600 dark:text-gray-300">
                            For high traffic sites, larger businesses and
                            resellers. Get the power, flexibility, and speed you
                            need with our virtual private server hosting.
                          </p>
                          <div className='flex space-x-0 items-center py-2 text-blue-800'>
                              <Text fw={700} size={25}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(7.5)}</Text>
                              <Text size={18}>/mo</Text>
                          </div>
                          <div className="mt-2">
                          <Button
                              href={'/dddd'}
                              radius="xl" size="md" uppercase
                              component={Link}
                              className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600  hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
                            >
                              Start now
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img
                          className="object-cover w-full h-full max-w-2xl rounded-md"
                          src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80"
                          alt="apple watch photo"
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <>
                {isActive == true ? (
                  <motion.div
                    className="card-container"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                      <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg lg:mx-12 lg:order-2">
                          <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                            Dedicated Hosting
                          </h1>
                          <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Our dedicated solutions provide you with complete
                            control and 100% isolation from other users.
                          </p>
                          <div className='flex space-x-0 items-center py-2 text-blue-800'>
                              <Text fw={700} size={25}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(7.5)}</Text>
                              <Text size={18}>/mo</Text>
                          </div>
                          <div className="mt-2">
                          <Button
                              href={'/dddd'}
                              radius="xl" size="md" uppercase
                              component={Link}
                              className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600  hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
                            >
                              Start now
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img
                          className="object-cover w-full h-full max-w-2xl rounded-md"
                          src="./dedicated-server.svg"
                          alt="dedicated server"
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <>
                {isActive == true ? (
                  <motion.div
                    className="card-container"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                      <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg lg:mx-12 lg:order-2">
                          <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">
                            Cloud Hosting
                          </h1>
                          <p className="mt-4 text-gray-600 dark:text-gray-300">
                            Our cloud servers offer a wide range of 1-click
                            installation options and are entirely customizable.
                          </p>
                          <div className='flex space-x-0 items-center py-2 text-blue-800'>
                              <Text fw={700} size={25}>{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(7.5)}</Text>
                              <Text size={18}>/mo</Text>
                          </div>
                          <div className="mt-2">
                          <Button
                              href={'/dddd'}
                              radius="xl" size="md" uppercase
                              component={Link}
                              className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600  hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none"
                            >
                              Start now
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-center w-full lg:w-1/2">
                        <img
                          className="object-contain w-full h-full max-w-2xl rounded-md"
                          src="./cloud-hosting.svg"
                          alt="apple watch photo"
                        />
                      </div>
                    </div>
                  </motion.div>
                ) : null}
              </>
            )}
          </SwiperSlide>
        </Swiper>
      </section>
    )
  }

  export default SectionD
