import { Anchor, Container, Image, SimpleGrid, Text, Title } from '@mantine/core'
import React from 'react'
import bg from '../../../public/img/wordpress-datatransfer.svg'

const SectionThree = () => {
  return (
    <section className="py-10 bg-slate-100 relative overflow-hidden antialiased">
      <div aria-hidden="true" className="flex absolute -top-96 left-1/2 transform -translate-x-1/2">
        {/* <div className="bg-gradient-to-r from-blue-50 to-blue-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem] dark:from-blue-200/50 dark:to-purple-900"></div> */}
        {/* <div className="bg-gradient-to-tl from-blue-50 via-blue-50 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem] dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70"></div> */}
      </div>
      <Container size={"lg"} className=' relative z-10 mb-6 space-y-6'>
        <SimpleGrid cols={2} px={10} spacing={"lg"} className="space-x-8 justify-between items-center">
          <div className=' space-y-8 px-4'>
            <Title order={1}>Automated WordPress Migrations</Title>
            <Text component='p' size={17} className='text-gray-600'>
              Our engineers can perform one migration for no charge. You can also transfer an unlimited number of WordPress websites from any other hosting using the built-in WordPress migration plugin.
            </Text>
          </div>
          <div>
            <Image src={bg.src} alt="image" />
          </div>
        </SimpleGrid>


        <div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="bg-blue-600 bg-[url('/img/abstract-1.svg')] bg-no-repeat bg-cover justify-between bg-center py-4 px-6 rounded-md flex">
            <p className="mr-2 inline-block text-white text-2xl font-semibold antialiased">Sign up for web hosting today!</p>

            <Anchor
              className="py-2 px-6 inline-flex justify-center items-center gap-2 rounded-full border-2 border-white bg-white font-semibold text-hscolor-500 hover:bg-gray-200 hover:border-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-all text-sm"
              href="/web-hosting"
            >
              Start Now
            </Anchor>

          </div>
        </div>

      </Container>

    </section>
  )
}

export default SectionThree
