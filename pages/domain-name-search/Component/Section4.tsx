import { Text, Title } from '@mantine/core'
import React from 'react'
import SupportIcon from '../../components/Icons/SupportIcon'
import CertifiedIcon from '../../components/Icons/CertifiedIcon'
import ShieldPrivacyIcon from '../../components/Icons/ShieldPrivacyIcon'
import SpeedTestIcon from '../../components/Icons/SpeedTestIcon'
import PrivacyIcon from '../../components/Icons/PrivacyIcon'

type Props = {}

const Section4 = (props: Props) => {
    return (
        <section>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <Title className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-arapawa-900 sm:text-4xl md:mx-auto">
                        Why Buy Domain Names at HostSpacing?
                    </Title>
                    <Text className="text-base text-gray-700 md:text-lg">
                        HostSpacing offers fast and reliable domain registration services, complete with instant activation, dedicated live support, and full DNS management.
                    </Text>
                </div>
                <div className="grid gap-14 row-gap-8 lg:grid-cols-3">
                    <div className="sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16  mb-4 rounded-full  sm:mx-auto sm:w-24 sm:h-24">
                            <SupportIcon className=' w-14 h-14' />
                        </div>
                        <Title order={4} className="mb-4 font-semibold leading-5">24/7 Live Technical Support</Title>
                        <Text className="max-w-md mb-3 text-gray-900 sm:mx-auto">
                            Our Support Team is always available to provide guidance and assistance whenever you need it. From searching for available domain names to registering them and beyond, our friendly experts are here to support you at every step of the process.
                        </Text>

                    </div>
                    <div className="sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full  sm:mx-auto sm:w-24 sm:h-24">
                            <PrivacyIcon className=' w-14 h-14' />
                        </div>
                        <Title order={3} className="mb-4 font-semibold leading-5">Privacy and Security</Title>
                        <Text className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                            At Hostspacing, we prioritize your website&apos;s security and privacy, and we constantly support people&apos;s online rights. Our goal is to maintain the Internet accessible, unrestricted, and secure for everyone.
                        </Text>

                    </div>
                    <div className="sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full  sm:mx-auto sm:w-24 sm:h-24">
                            <SpeedTestIcon className=' w-14 h-14'/>
                        </div>
                        <Title order={3} className="mb-4 font-semibold leading-5">Your Business Online</Title>
                        <Text className="max-w-md mb-3 text-sm text-gray-900 sm:mx-auto">
                            After you&apos;ve confirmed your domain name availability and secured it, it&apos;s time to enhance your business with top-tier products and services from our industry-leading collection, all at affordable prices. We only offer products that can elevate your internet experience, ensuring that you get the best value for your money.
                        </Text>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4