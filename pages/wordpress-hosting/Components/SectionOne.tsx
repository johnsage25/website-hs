import React from 'react'
import { Container, Text } from '@mantine/core'
import MoneyBackIcon from '../../components/Icons/MoneyBackIcon'
import ShieldPrivacyIcon from '../../components/Icons/ShieldPrivacyIcon'
import VerifyIcon from '../../components/Icons/VerifyIcon'
import DataTransferIcon from '../../components/Icons/DataTransferIcon'
import InstallerIcon from '../../components/Icons/InstallerIcon'

type Props = {}

const SectionOne = (props: Props) => {
  return (
    <section>
      <Container size={'lg'}>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Affordable WordPress Hosting
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              The most cost-effective method of obtaining all the essentials for
              your WordPress website.
            </p>
          </div>
          <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col justify-between p-5">
              <div className=" flex justify-center w-full text-center flex-col">
                <div className="flex items-center justify-center mx-auto w-16 h-16 mb-4 ">
                  <ShieldPrivacyIcon className="w-14 h-14 " />
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Advanced Security
                </h6>
                <Text>
                  It serves as security for control freaks. Enjoy backups of the
                  website, malware protection, and more.
                </Text>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 text-center">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto">
                  <InstallerIcon className=" w-14 h-14" />
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  WordPress Pre-Installed
                </h6>
                <Text className=' text-gray-600'>
                  WordPress is already set up and ready to use on your hosting
                  account.
                </Text>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 text-center">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full mx-auto">
                  <DataTransferIcon className=" w-14 h-14" />
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Free Site Migrations
                </h6>
                <Text className=' text-gray-600'>
                  Yes, what you heard is true. If you already have a WordPress
                  site, we&apos;ll transfer it for you.
                </Text>
              </div>
            </div>
            <div className="flex flex-col justify-between p-5 text-center">
              <div>
                <div className="flex items-center justify-center w-16 h-16 mb-4 mx-auto">
                  <VerifyIcon className=" w-14 h-14 fill-gray-500" />
                </div>
                <h6 className="mb-2 font-semibold leading-5">
                  Trusted by Millions
                </h6>
                <Text className=' text-gray-600'>
                  Our potent next-generation cloud platform can help your
                  website weather even the worst visitation storms.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default SectionOne
