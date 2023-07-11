import { Container, Text } from '@mantine/core'
import React from 'react'
import ShieldPrivacyIcon from '../../components/Icons/ShieldPrivacyIcon'
import CertifiedIcon from '../../components/Icons/CertifiedIcon'
import FirewallIcon from '../../components/Icons/FirewallIcon'
import DdosIcon from '../../components/Icons/DdosIcon'
import BackupIcon from '../../components/Icons/BackupIcon'
import BackupIcon2 from '../../components/Icons/BackupIcon2'
import SupportIcon from '../../components/Icons/SupportIcon'

type Props = {}

const Features = (props: Props) => {
  return (
    <section className=" bg-zinc-50">
      <Container size={'xl'}>
        <div className="py-28 md:px-24 lg:py-20 space-y-6">
          <div className="max-w-xl pb-20 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-8 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              Secure Cloud VPS hosting
            </h2>
            <Text className="text-base text-gray-700 md:text-lg">
              Everything is built for optimum security, including redundant
              storage networks, backup options, firewall rules, access, and data
              transfer.
            </Text>
          </div>
          <div className="grid gap-10 row-gap-10 mx-auto lg:grid-cols-3">
            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-8">
                <CertifiedIcon className=" w-14 h-14" />
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Certified infrastructure
                </h6>
                <Text className="mb-3 text-gray-600">
                  Our data centers are among of the safest and most advanced in
                  the entire world. They are backed by our dedication to giving
                  you the greatest levels of uptime and are ISO 27001 certified.
                </Text>
              </div>
            </div>

            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-8">
                <DdosIcon className=" w-14 h-14" />
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  DDoS protection
                </h6>
                <Text className="mb-3 text-gray-600">
                  By sending suspicious traffic to our scrubbing centers, our
                  global scrubbing defends you against DDoS and prolonged
                  high-bandwidth attacks, reducing the risk and defending your
                  infrastructure.
                </Text>
              </div>
            </div>

            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-8">
                <ShieldPrivacyIcon className=" w-14 h-14" />
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  SSL encryption
                </h6>
                <Text className="mb-3 text-gray-600">
                  A Wildcard SSL certificate is included with your VPS for the
                  highest level of data security and user confidence.
                </Text>
              </div>
            </div>

            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-8">
                <SupportIcon className=" w-16 h-16" />
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  24/7 expert support
                </h6>
                <Text className="mb-3 text-gray-600">
                  Our server specialists are ready around-the-clock, seven days
                  a week, in case a problem develops. They&lsquo;ll quickly
                  resolve your problem, reducing any downtime.
                </Text>
              </div>
            </div>

            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-8">
                <FirewallIcon className=" w-14 h-14" />
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">
                  Firewall management
                </h6>
                <Text className="mb-3 text-gray-600">
                  You are automatically protected from assaults by the external
                  firewall. The HostSpacing cloud panel allows for the central
                  setting of certain firewall rules.
                </Text>
              </div>
            </div>

            <div className="flex flex-col max-w-md sm:mx-auto sm:flex-row">
              <div className="mr-8">
                <BackupIcon2 className=" w-14 h-14" />
              </div>
              <div>
                <h6 className="mb-3 text-xl font-bold leading-5">Backups</h6>
                <Text className="mb-3 text-gray-600">
                  You may back up your data using an industry-leading solution
                  from Acronis for an extra cost.
                </Text>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Features
