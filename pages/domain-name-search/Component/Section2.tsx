import { Text, Title } from '@mantine/core'
import React from 'react'
import DomainLockIcon from '../../components/Icons/DomainLockIcon'
import AutorenewalIcon from '../../components/Icons/AutorenewalIcon'
import ManagementIcon from '../../components/Icons/ManagementIcon'
import ShieldPrivacyIcon from '../../components/Icons/ShieldPrivacyIcon'
import DnsManagementIcon from '../../components/Icons/DnsManagementIcon'
import ForwardIcon from '../../components/Icons/ForwardIcon'
import PrivacyIcon from '../../components/Icons/PrivacyIcon'

type Props = {}

function Section2({ }: Props) {
    return (

        <section className="">
            <div className="mx-auto container py-20">
                <div className="flex justify-center items-center flex-col">
                    <div className="lg:text-6xl md:text-5xl text-4xl font-black leading-10 text-center text-arapawa-800 dark:text-white">
                        <Title>Maximize the potential of your domain.</Title>
                    </div>
                    <div className="pt-24 grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center xl:gap-y-16 gap-y-20 gap-x-16 lg:gap-x-28 xl:gap-x-0 lg:px-10 xl:px-0">
                        <div className="py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                            <div className="mb-6">
                                <DomainLockIcon className=" w-14 h-14" />
                            </div>
                            <div className="text-arapawa-800 dark:text-white text-2xl font-semibold text-center">
                                <h2>Domain locking</h2>
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center ">
                                <Text size={17}>Protect your domain names from unauthorized transfers and maintain control to unlock them at your discretion.</Text>
                            </div>
                        </div>
                        <div className=" py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                            <div className="mb-6">
                                <AutorenewalIcon className=' w-14 h-14' />
                            </div>
                            <div className="text-arapawa-800 dark:text-white text-2xl font-semibold text-center">
                                <h2>Auto-renewal</h2>
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                                <Text size={17}>Failing to renew your domain can lead to losing it (surprise!). To put your mind at ease, we&lsquo;ve arranged for automatic renewal.</Text>
                            </div>
                        </div>
                        <div className=" py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                            <div className="mb-6">
                                <ManagementIcon className=' w-14 h-14' />
                            </div>
                            <div className="text-arapawa-800 dark:text-white text-2xl font-semibold text-center">
                                <h2>Easy management</h2>
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                                <Text size={17}>Our control panel is made to be simple to use. Organize all of your fantastic online activities from a single dashboard.</Text>
                            </div>
                        </div>
                        <div className="py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                            <div className="mb-6">
                                <PrivacyIcon className=" w-14 h-14" />
                            </div>
                            <div className="text-arapawa-800 dark:text-white text-2xl font-semibold text-center">
                                <h2>Privacy protection</h2>
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                                <Text size={17}>You can prevent the public access to your personal information in the WHOIS database for a nominal price.</Text>
                            </div>
                        </div>
                        <div className="py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                            <div className="mb-6">
                                <DnsManagementIcon className=" w-14 h-14" />
                            </div>
                            <div className="text-arapawa-800 dark:text-white text-2xl font-semibold text-center">
                                <h2>DNS management</h2>
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                                <Text size={17}>You can direct your DNS traffic to us, another host, specific IP addresses, or even the moon (minus the moon part).</Text>
                            </div>
                        </div>
                        <div className="py-6 xl:px-4 rounded xl:w-96 w-60 flex justify-center items-center flex-col">
                            <div className="mb-6">
                                <ForwardIcon className=" w-14 h-14" />
                            </div>
                            <div className="text-arapawa-800 dark:text-white text-2xl font-semibold text-center">
                                <h2>Email forwarding</h2>
                            </div>
                            <div className="text-gray-600 dark:text-gray-300 mt-2 text-lg text-center">
                                <Text size={17}>You can choose to instantly forward any of the email addresses associated with your domain to any other working email address.</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Section2